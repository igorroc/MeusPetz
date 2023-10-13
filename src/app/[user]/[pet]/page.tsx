import React from "react"
import styles from "./page.module.css"
import { TPet } from "@/models/Pet"

type Props = {
	params: {
		user: string
		pet: string
	}
}

export default async function User(props: Props) {
	const { pet: petId } = props.params

	const pet = (await fetch(`http://localhost:3000/api/pets?search=${petId}`, {
		cache: "no-cache",
	})
		.then((res) => res.json())
		.catch((err) => {
			console.error("ERROR ------")
		})) as TPet

	if (!pet) {
		return (
			<main className={styles.main}>
				<div className={styles.petTitle}>
					<h1 className={styles.petName}>Pet não encontrado</h1>
					{/* <Image className={styles.imageNotFound} src={NotFound} alt="Pet não encontrado" /> */}
				</div>
			</main>
		)
	}

	return (
		<main className={styles.main}>
			<div className={styles.petTitle}>
				<div className={styles.petPhoto}>
					{/* eslint-disable-next-line */}
					<img src={pet.photo} className={styles.img} alt="Foto de Perfil" />
				</div>
				<h1 className={styles.petName}>{pet.name}</h1>
				<span className={styles.petBreed}>{pet.breed}</span>
			</div>
			<section>
				
			</section>
		</main>
	)
}
