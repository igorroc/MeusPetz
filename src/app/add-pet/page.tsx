"use client"

import React from "react"
import styles from "./page.module.css"

export default function AddPet() {
	const APP_PRODUCTION = process.env.NODE_ENV === "production"

	const API_URL = APP_PRODUCTION
		? process.env.APP_URL_PRODUCTION
		: process.env.APP_URL_DEVELOPMENT

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const data = Object.fromEntries(formData)
		console.log(data)

		fetch(`/api/pets`, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((json) => console.log(json))
			.catch((err) => console.error(err))
	}

	return (
		<main className={styles.main}>
			<form onSubmit={handleSubmit} className={styles.form} encType="multipart/form-data">
				<input type="text" name="name" />
				<input type="file" name="photo" />
				<button type="submit">Salvar</button>
			</form>
		</main>
	)
}
