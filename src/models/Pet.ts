import { TParent } from "./Parent"

export type TPet = {
	name: string
	photo: string
	url: string
	id: string
	breed: string
	specie: string
	pageAccentColor?: string
	parents?: TParent[]
	address?: string
	birthDate: string
	gender: "M" | "F"
	isAdopted: boolean
	isCastrated: boolean
}

export const PETS: TPet[] = [
	{
		id: "grego",
		name: "Grego",
		photo: "/img/grego.png",
		url: "/Igor/grego",
		specie: "Gato",
		breed: "SRD",
		address: "Av. Vereador Marcus Paiva, 74 - Ilhéus - BA",
		birthDate: "04/10/2019",
		isAdopted: true,
		gender: "M",
		isCastrated: true,
		parents: [
			{
				name: "Graziella Rocha",
				photo: "/img/gra.jpg",
				role: "Mãe",
				whatsapp: "https://wa.me/5511999999999",
				phone: "+55 11 99999-9999",
			},
			{
				name: "Igor Rocha",
				photo: "/img/igor.jpg",
				role: "Primo",
				whatsapp: "https://wa.me/5511999999999",
				phone: "+55 11 99999-9999",
			},
		],
	},
	{
		id: "cole",
		name: "Cole",
		photo: "/img/cole.png",
		url: "/Igor/cole",
		specie: "Cachorro",
		breed: "Border Collie",
		pageAccentColor: "#FFB800",
		birthDate: "04/05/2023",
	},
	{
		id: "edgar",
		name: "Edgar",
		photo: "/img/edgar.png",
		url: "/Igor/edgar",
		specie: "Gato",
		birthDate: "04/05/2022",
		gender: "M",
		breed: "SRD",
	},
	{
		id: "rex",
		name: "Rex",
		photo: "/img/rex.png",
		url: "/Igor/rex",
		specie: "Cachorro",
		birthDate: "04/05/2021",
		gender: "M",
		breed: "Bulldog Francês",
	},
] as TPet[]
