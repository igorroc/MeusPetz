import "./globals.css"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"

const roboto = Roboto({
	weight: "500",
	subsets: ["latin-ext"],
})

export const metadata: Metadata = {
	title: "Crie Perfis de Pets Personalizados - Meus Petz",
	description:
		"Crie perfis informativos e bonitos para seus pets e obtenha coleiras com QR code personalizado. Encontre pets perdidos e conecte-se com outros amantes de animais.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-br">
			<body className={roboto.className}>{children}</body>
		</html>
	)
}
