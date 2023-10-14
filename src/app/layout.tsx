import "./globals.css"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
	weight: "500",
	subsets: ["latin-ext"],
})

export const metadata: Metadata = {
	title: {
		default: "Crie Perfis de Pets Personalizados - Meus Petz",
		template: "%s - Meus Petz - Crie Perfis de Pets Personalizados",
	},
	description:
		"Crie perfis informativos e bonitos para seus pets e obtenha coleiras com QR code personalizado. Encontre pets perdidos e conecte-se com outros amantes de animais.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-br">
			<body className={montserrat.className}>{children}</body>
		</html>
	)
}
