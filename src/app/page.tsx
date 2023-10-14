"use client"

import Image from "next/image"
import styles from "./page.module.css"
import Logo from "/public/icon/favicon.png"
import { useRouter } from "next/navigation"

export default function Home() {
	const router = useRouter()

	function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
		ev.preventDefault()
		const formData = new FormData(ev.currentTarget)
		const id = formData.get("id")
		console.log(id)

		router.push(`/${id}`)
	}
	return (
		<main className={styles.main}>
			<Image src={Logo} alt="Logo do MeusPetz" />
			<h1>MeusPetz</h1>
			<p>Encontrou um pet perdido?</p>
			<p>Coloque o nome dele aqui em baixo e nós avisaremos ao seu dono</p>
			<form onSubmit={handleSubmit} className={styles.form}>
				<input type="text" name="id" />
				<button>Buscar</button>
			</form>
		</main>
	)
}
