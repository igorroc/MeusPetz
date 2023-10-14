import { storage } from "@/firebase/config"
import { TParent } from "./Parent"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"

export type TPet = {
	_id: string
	name: string
	photo: string
	breed: string
	specie: string
	address: string
	birthDate: string
	gender: "M" | "F"
	isAdopted: boolean
	isCastrated: boolean
	pageAccentColor?: string
	parents?: TParent[]
}

export async function uploadPetPhoto(file: File) {
	const fileName = `${new Date().getTime()}-${file.name}`

	const imageRef = ref(storage, `pet_photos/${fileName}`)
	const bytes = await file.arrayBuffer()
	const metadata = {
		contentType: file.type,
	}

	const path = await uploadBytes(imageRef, bytes, metadata)
		.then((snapshot) => {
			return getDownloadURL(snapshot.ref) as unknown as Promise<string>
		})
		.catch((error) => {
			console.error("Erro no upload")
			return null
		})

	return path
}
