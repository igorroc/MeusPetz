import React from "react"

type Props = {
	params: {
		user: string
	}
}

export default function User(props: Props) {
	const user = props.params.user
	return <div>User: {user}</div>
}
