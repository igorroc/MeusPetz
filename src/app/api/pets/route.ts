import { uploadPetPhoto } from "@/models/Pet"
import { NextRequest } from "next/server"
import { addDocument, getCollection } from "@/firebase/firestore/getData"
import idCleaner from "@/utils/clean_string"

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams
	const search = searchParams.get("search")

	const collectionPets = await getCollection("pets")
	const petsArray = collectionPets.result?.docs.map((doc) => doc.data())

	if (!search) {
		return Response.json(petsArray, {
			status: 200,
			statusText: "Pets found",
		})
	}

	if (!petsArray)
		return Response.json(null, {
			status: 504,
			statusText: "No pets found",
		})

	const foundPet = petsArray.find((pet) => pet._id == search)

	if (!foundPet) {
		return Response.json(null, {
			status: 404,
			statusText: "Pet not found",
		})
	}

	return Response.json(foundPet, {
		status: 200,
		statusText: "Pet found",
	})
}

export async function POST(request: NextRequest) {
	const data = await request.formData()

	const file: File | null = data.get("photo") as unknown as File

	if (!file) return Response.json({ message: "No file" })

	const petPhotoPath = await uploadPetPhoto(file)

	const pet = {
		_id: idCleaner(data.get("name") as string),
		name: data.get("name") as string,
		specie: data.get("specie") as string,
		breed: data.get("breed") as string,
		gender: data.get("gender"),
		isAdopted: data.get("isAdopted") === "true",
		isCastrated: data.get("isCastrated") === "true",
		birthDate: data.get("birthDate") as string,
		address: data.get("address") as string,
		pageAccentColor: data.get("pageAccentColor") as string,
		photo: petPhotoPath,
	}

	const newPet = await addDocument("pets", pet)

	if (newPet.error) {
		return Response.json({ message: "Pet error" })
	}

	return Response.json({ message: "Pet OK " })
}
