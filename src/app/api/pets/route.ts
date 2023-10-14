import { PETS, uploadPetPhoto } from "@/models/Pet"
import { NextRequest } from "next/server"
import { ref, uploadBytes } from "firebase/storage"
import { storage } from "@/firebase/config"
import { addDocument } from "@/firebase/firestore/getData"

export function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams
	const search = searchParams.get("search")

	if (!search) {
		return Response.json(PETS)
	}

	const foundPet = PETS.find((pet) => pet.id.includes(search))

	if (!foundPet) {
		return Response.json(null)
	}

	return Response.json(foundPet)
}

export async function POST(request: NextRequest) {
	const data = await request.formData()

	const file: File | null = data.get("photo") as unknown as File

	if (!file) return Response.json({ message: "No file" })

	const petPhotoPath = await uploadPetPhoto(file)

	const pet = {
		name: data.get("name") as string,
		photo: petPhotoPath,
	}

	const newPet = await addDocument("pets", pet)

	if (newPet.error) {
		return Response.json({ message: "Pet error" })
	}

	return Response.json({ message: "Pet OK " })
}
