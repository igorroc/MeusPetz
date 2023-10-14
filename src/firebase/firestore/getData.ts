import firebase_app from "../config"
import { getFirestore, doc, getDoc, getDocs, collection, addDoc } from "firebase/firestore"

const db = getFirestore(firebase_app)

export default async function getDocument(collection: string, id: string) {
	let docRef = doc(db, collection, id)

	let result = null
	let error = null

	try {
		result = await getDoc(docRef)
	} catch (e) {
		error = e
	}

	return { result, error }
}

export async function getCollection(collectionToSearch: string) {
	let collectionRef = collection(db, collectionToSearch)

	let result = null
	let error = null

	try {
		result = await getDocs(collectionRef)
	} catch (e) {
		error = e
	}

	return { result, error }
}

export async function addDocument(collectionToSearch: string, data: any) {
	let docRef = collection(db, collectionToSearch)

	let result = null
	let error = null

	try {
		result = await addDoc(docRef, data)
	} catch (e) {
		error = e
	}

	return { result, error }
}
