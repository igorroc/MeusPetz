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
				whatsapp: "https://wa.me/557388089557",
				phone: "+55 73 9 8808-9557",
			},
			{
				name: "Igor Rocha",
				photo: "/img/igor.jpg",
				role: "Primo",
				whatsapp: "https://wa.me/5573988089810",
				phone: "+55 73 9 8808-9810",
			},
		],
	},
	{
		id: "jollie",
		name: "Jollie",
		photo: "/img/jollie.jpg",
		url: "/Igor/jollie",
		specie: "Gato",
		breed: "SRD",
		address: "R. A, 100 - Pontal, Ilhéus - BA",
		birthDate: "04/10/2018",
		isAdopted: true,
		gender: "F",
		isCastrated: true,
		parents: [
			{
				name: "Tina Rocha",
				photo: "/img/tina.png",
				role: "Mãe",
				whatsapp: "https://wa.me/557399817408",
				phone: "+55 73 9981-7408",
			},
			{
				name: "Neyzinho Rocha",
				photo: "/img/neyzinho.png",
				role: "Pai",
				whatsapp: "https://wa.me/557388478110",
				phone: "+55 73 8847-8110",
			},
			{
				name: "Gigi",
				photo: "/img/gigi.png",
				role: "Irmã",
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
