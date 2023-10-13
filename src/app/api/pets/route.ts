import { PETS } from "@/models/Pet"
import { NextRequest } from "next/server"

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
