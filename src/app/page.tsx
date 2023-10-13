import Image from "next/image"
import styles from "./page.module.css"
import Logo from "/public/icon/favicon.png"

export default function Home() {
	return (
		<main className={styles.main}>
			<Image src={Logo} alt="Logo do MeusPetz" />
			<h1>MeusPetz</h1>
			<p>Encontrou um pet perdido?</p>
			<p>Coloque o nome dele aqui em baixo e nós avisaremos ao seu dono</p>
			<input type="text" />
		</main>
	)
}
