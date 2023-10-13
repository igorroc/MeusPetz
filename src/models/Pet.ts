export type TPet = {
	name: string
	photo: string
	url: string
	id: string
	breed: string
	specie: string
}

export const PETS = [
	{
		id: "grego",
		name: "Grego",
		photo: "/img/grego.png",
		url: "/Igor/grego",
		specie: "Gato",
		breed: "SRD",
	},
	{
		id: "cole",
		name: "Cole",
		photo: "/img/cole.png",
		url: "/Igor/cole",
		specie: "Cachorro",
		breed: "Border Collie",
	},
	{
		id: "edgar",
		name: "Edgar",
		photo: "/img/edgar.png",
		url: "/Igor/edgar",
		specie: "Gato",
		breed: "SRD",
	},
	{
		id: "rex",
		name: "Rex",
		photo: "/img/rex.png",
		url: "/Igor/rex",
		specie: "Cachorro",
		breed: "Bulldog Francês",
	},
] as TPet[]
