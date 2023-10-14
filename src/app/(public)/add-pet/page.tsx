"use client"

import React from "react"
import styles from "./page.module.css"
import placeholder from "@/../public/img/placeholder.webp"

export default function AddPet() {
	const [photo, setPhoto] = React.useState<File | null>(null)
	const [color, setColor] = React.useState<string>("#3AB6A7")
	const [adding, setAdding] = React.useState<boolean>(false)

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setAdding(true)
		const formData = new FormData(e.currentTarget)

		fetch(`/api/pets`, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((json) => {
				alert("Pet adicionado com sucesso!")
				console.log(json)
			})
			.catch((err) => {
				alert("Erro ao adicionar pet")
				console.error(err)
			})
			.finally(() => setAdding(false))
	}

	return (
		<main className={styles.main}>
			<h1>Adicionar novo Pet</h1>
			<form onSubmit={handleSubmit} className={styles.form} encType="multipart/form-data">
				<div className={styles.petPhoto}>
					<input
						type="file"
						name="photo"
						id="photo"
						required
						disabled={adding}
						onChange={(event) => {
							const file = event.target.files?.[0]
							if (file) {
								console.log("set", file)
								setPhoto(file)
							}
						}}
					/>
					<label htmlFor="photo" className={styles.petPhoto}>
						{/* eslint-disable  */}
						{photo ? (
							<img src={URL.createObjectURL(photo)} />
						) : (
							<img src={placeholder.src} />
						)}
					</label>
				</div>
				<div className={styles.question}>
					<label htmlFor="name">Nome do seu Pet</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Rex"
						required
						disabled={adding}
					/>
				</div>
				<div className={styles.question}>
					<label htmlFor="specie">Espécie</label>
					<select name="specie" id="specie" required disabled={adding}>
						<option value="gato">Gato</option>
						<option value="cachorro">Cachorro</option>
						<option value="outro">Outro</option>
					</select>
				</div>
				<div className={styles.question}>
					<label htmlFor="breed">Raça</label>
					<input
						type="text"
						id="breed"
						name="breed"
						placeholder="Raça"
						required
						disabled={adding}
					/>
				</div>
				<div className={styles.question}>
					<label htmlFor="gender">Gênero</label>
					<select name="gender" id="gender" required disabled={adding}>
						<option value="M">Macho</option>
						<option value="F">Fêmea</option>
					</select>
				</div>
				<div className={styles.question}>
					<label>Seu Pet é adotado?</label>
					<label htmlFor="isAdopted" className={styles.row}>
						<input
							type="radio"
							name="isAdopted"
							id="isAdopted"
							required
							disabled={adding}
						/>
						Sim, ele é adotado
					</label>
					<label htmlFor="isNotAdopted" className={styles.row}>
						<input type="radio" name="isAdopted" id="isNotAdopted" />
						Não, ele não é adotado
					</label>
				</div>
				<div className={styles.question}>
					<label>Seu Pet é castrado?</label>
					<label htmlFor="isCastrated" className={styles.row}>
						<input
							type="radio"
							name="isAdopted"
							id="isCastrated"
							required
							disabled={adding}
						/>
						Sim, ele é castrado
					</label>
					<label htmlFor="isNotCastrated" className={styles.row}>
						<input type="radio" name="isAdopted" id="isNotCastrated" />
						Não, ele não é castrado
					</label>
				</div>
				<div className={styles.question}>
					<label htmlFor="birthDate">Data de nascimento/adoção</label>
					<input type="date" id="birthDate" name="birthDate" required disabled={adding} />
				</div>
				<div className={styles.question}>
					<label htmlFor="address">Endereço completo</label>
					<input
						type="text"
						name="address"
						id="address"
						placeholder="Avenida Vereador Marcus Paiva, 74, Ilhéus"
						required
						disabled={adding}
					/>
				</div>
				<div className={styles.question}>
					<label htmlFor="pageAccentColor">Cor do perfil do seu Pet</label>
					<div className={styles.row}>
						<input
							type="color"
							name="pageAccentColor"
							value={color}
							onChange={(event) => setColor(event.target.value)}
						/>
						<input
							type="text"
							id="pageAccentColor"
							value={color}
							onChange={(ev) => setColor(ev.target.value)}
						/>
					</div>
				</div>
				<button type="submit" className={styles.primaryButton}>
					{adding ? "Adicionando..." : "Adicionar"}
				</button>
			</form>
		</main>
	)
}
