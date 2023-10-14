"use client"

import Image from "next/image"
import styles from "./page.module.css"
import Logo from "/public/icon/favicon.png"
import { useRouter } from "next/navigation"
import { TPet } from "@/models/Pet"
import React from "react"
import Link from "next/link"

export default function Home() {
	const router = useRouter()

	const [pets, setPets] = React.useState<TPet[]>([])

	React.useEffect(() => {
		fetch(`/api/pets`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			cache: "no-cache",
		})
			.then((res) => res.json())
			.then((data) => {
				setPets(data)
			})

		// eslint-disable-next-line
	}, [])

	function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
		ev.preventDefault()
		const formData = new FormData(ev.currentTarget)
		const id = formData.get("id")

		router.push(`/${id}`)
	}

	return (
		<main className={styles.main}>
			<Image src={Logo} alt="Logo do MeusPetz" />
			<h1>MeusPetz</h1>
			<h2>Encontrou um pet perdido?</h2>
			<p>Coloque o nome dele aqui em baixo e nós avisaremos ao seu dono</p>
			<form onSubmit={handleSubmit} className={styles.form}>
				<input type="text" name="id" />
				<button>Buscar</button>
			</form>
			<h2>Pets cadastrados:</h2>
			{pets ? (
				<div className={styles.scrollerWrapper}>
					<div className={styles.scroller}>
						{pets.map((pet, index) => (
							<Link href={pet._id} className={styles.pet} key={index}>
								<div className={styles.petImage}>
									{/* eslint-disable-next-line */}
									<img className={styles.img} src={pet.photo} alt="Foto do pet" />
								</div>
								<span className={styles.petName}>{pet.name}</span>
							</Link>
						))}
					</div>
				</div>
			) : (
				<p>Carregando...</p>
			)}
		</main>
	)
}
