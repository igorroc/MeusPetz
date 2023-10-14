import React from "react"
import styles from "./page.module.css"
import Image from "next/image"
import UserPhoto from "/public/img/igor.jpg"
import Link from "next/link"
import { TPet } from "@/models/Pet"

export default async function User() {
	const APP_PRODUCTION = process.env.NODE_ENV === "production"
	const API_URL = APP_PRODUCTION
		? process.env.APP_URL_PRODUCTION
		: process.env.APP_URL_DEVELOPMENT

	const pets = (await fetch(`${API_URL}/api/pets`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		cache: "no-cache",
	}).then((res) => res.json())) as TPet[]

	return (
		<main className={styles.main}>
			<div className={styles.userTitle}>
				<div className={styles.userPhoto}>
					<Image src={UserPhoto} alt="Foto do usuário" className={styles.img} />
				</div>
				<span className={styles.userName}>Olá, Igor</span>
			</div>

			<section className={styles.section}>
				{pets ? (
					<>
						<span className={styles.sectionTitle}>Meus Petz ({pets.length})</span>
						<div className={styles.scrollerWrapper}>
							<div className={styles.scroller}>
								{pets.map((pet, index) => (
									<Link href={pet._id} className={styles.pet} key={index}>
										<div className={styles.petImage}>
											{/* eslint-disable-next-line */}
											<img
												className={styles.img}
												src={pet.photo}
												alt="Foto do pet"
											/>
										</div>
										<span className={styles.petName}>{pet.name}</span>
									</Link>
								))}
							</div>
						</div>
					</>
				) : (
					<>
						<p>Carregando...</p>
					</>
				)}
			</section>
		</main>
	)
}
