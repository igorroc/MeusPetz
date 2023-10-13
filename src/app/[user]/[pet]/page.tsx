import React from "react"

type Props = {
	params: {
		user: string
		pet: string
	}
}

export default function User(props: Props) {
	const { user, pet } = props.params

	return (
		<div>
			<p>User: {user}</p>
			<p>Pet: {pet}</p>
		</div>
	)
}
