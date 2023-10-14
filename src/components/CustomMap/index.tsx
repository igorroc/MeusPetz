import React from "react"
import styles from "./map.module.css"

type CustomMapProps = {
    address: string
}

export default function CustomMap(props: CustomMapProps) {
    const apiKey = process.env.GOOGLE_API_KEY

    return (
        <iframe
            width="600"
            height="450"
            loading="lazy"
            className={styles.map}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${props.address}`}
        ></iframe>
    )
}
