"use client"

import { useEffect } from 'react'
import { TPet } from '@/models/Pet'
import { isBirthdayToday } from '@/utils/getDate'
import toast from 'react-hot-toast'

type Props = {
    pet: TPet
}

export default function BirthDayPopUp(props: Props) {
    useEffect(() => {
        const isBirthday = isBirthdayToday(props.pet.birthDate)

        if (isBirthday) {
            console.log(`${props.pet.name} está fazendo aniversário hoje!`)
            toast(`${props.pet.name} está fazendo aniversário hoje!`, {
                icon: '🎉',
                position: 'top-center',
                duration: 5000,
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                    transition: 'all 1.5s ease',
                },
            })
        }

        // eslint-disable-next-line
    }, [])

    return (
        <></>
    )
}
