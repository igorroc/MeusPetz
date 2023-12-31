import React from "react"
import styles from "./page.module.css"
import { TPet } from "@/models/Pet"

import { AiOutlineWhatsApp, AiFillPhone } from "react-icons/ai"
import Link from "next/link"
import CustomMap from "@/components/CustomMap"
import { calculateAge } from "@/utils/getDate"
import { Metadata } from "next"

import Image_404 from "@/../public/img/404_2.jpg"
import BirthDayPopPup from "@/components/BirthDayPopUp"
import BirthDayPopUp from "@/components/BirthDayPopUp"

type Props = {
	params: {
		user: string
		pet: string
	}
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const petId = params.pet
	const APP_PRODUCTION = process.env.NODE_ENV === "production"
	const API_URL = APP_PRODUCTION
		? process.env.APP_URL_PRODUCTION
		: process.env.APP_URL_DEVELOPMENT

	const pet = (await fetch(`${API_URL}/api/pets?search=${petId}`, {
		cache: "no-cache",
	})
		.then((res) => res.json())
		.catch((err) => {
			console.error("ERROR ------")
		})) as TPet

	if (pet) {
		return {
			title: `Perfil de ${pet.name}`,
			openGraph: {
				images: [pet.photo],
			},
			twitter: {
				card: "summary_large_image",
				images: [pet.photo],
			},
		}
	}

	return {
		title: `Pet não encontrado`,
		openGraph: {
			images: [Image_404.src],
		},
		twitter: {
			card: "summary_large_image",
			images: [Image_404.src],
		},
	}
}

export default async function User(props: Props) {
	const { pet: petId } = props.params
	const APP_PRODUCTION = process.env.NODE_ENV === "production"
	const API_URL = APP_PRODUCTION
		? process.env.APP_URL_PRODUCTION
		: process.env.APP_URL_DEVELOPMENT

	const pet = (await fetch(`${API_URL}/api/pets?search=${petId}`, {
		cache: "no-cache",
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
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
		<main
			className={styles.main}
			style={
				{
					"--color-primary": pet.pageAccentColor || "#3AB6A7",
				} as React.CSSProperties
			}
		>
			<BirthDayPopUp pet={pet} />
			<div className={styles.petTitle}>
				<div className={styles.petPhoto}>
					{/* eslint-disable-next-line */}
					<img src={pet.photo} className={styles.img} alt="Foto de Perfil" />
				</div>
				<h1 className={styles.petName}>{pet.name}</h1>
				<span className={styles.petBreed}>{pet.breed}</span>
			</div>
			<section className={styles.section}>
				<h2 className={styles.title}>Sobre mim</h2>
				<div className={styles.table}>
					<div className={styles.row}>
						<span className={styles.label}>
							Data de {pet.isAdopted ? "adoção" : "nascimento"}
						</span>
						<span className={styles.value}>{pet.birthDate}</span>
					</div>
					<div className={styles.row}>
						<span className={styles.label}>Idade</span>
						<span className={styles.value}>{calculateAge(pet.birthDate)}</span>
					</div>
					<div className={styles.row}>
						<span className={styles.label}>Gênero</span>
						<span className={styles.value}>
							{pet.gender == "M" ? "Macho" : "Fêmea"}
						</span>
					</div>
					<div className={styles.row}>
						<span className={styles.label}>Castrado</span>
						<span className={styles.value}>{pet.isCastrated ? "Sim" : "Não"}</span>
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<h2 className={styles.title}>Parentes</h2>
				{!pet.parents && <p>{pet.name} não possui parentes cadastrados</p>}
				{pet.parents &&
					pet.parents.map((parent, index) => (
						<div key={index} className={styles.parent}>
							<div className={styles.parentPhoto}>
								{/* eslint-disable-next-line */}
								<img
									src={parent.photo}
									className={styles.img}
									alt="Foto de Perfil"
								/>
							</div>
							<div className={styles.parentInfo}>
								<h3 className={styles.parentName}>{parent.name}</h3>
								<span className={styles.parentBreed}>{parent.role}</span>
							</div>

							<div className={styles.actions}>
								{parent.whatsapp && (
									<Link href={parent.whatsapp}>
										<AiOutlineWhatsApp />
									</Link>
								)}

								{parent.phone && (
									<Link href={"tel:" + parent.phone}>
										<AiFillPhone />
									</Link>
								)}
							</div>
						</div>
					))}
			</section>

			<section className={styles.section}>
				<h2 className={styles.title}>Minha casa</h2>
				{!pet.address && <p>{pet.name} não possui endereço cadastrado</p>}
				{pet.address && (
					<>
						<CustomMap address={pet.address} />
					</>
				)}
			</section>
		</main>
	)
}
