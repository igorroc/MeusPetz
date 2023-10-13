export type TPets = {
	name: string
	photo: string
	url: string
}

export async function GET(request: Request) {
	const pets = [
		{
			name: "Grego",
			photo: "/img/grego.png",
			url: "/Igor/grego",
		},
		{
			name: "Cole",
			photo: "/img/cole.png",
			url: "/Igor/cole",
		},
		{
			name: "Edgar",
			photo: "/img/edgar.png",
			url: "/Igor/edgar",
		},
		{
			name: "Rex",
			photo: "/img/rex.png",
			url: "/Igor/rex",
		},
	]

	return Response.json(pets)
}
