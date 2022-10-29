import { Checkbox } from '@mui/material'
import React from 'react'
import { useState } from 'react'

interface Props {
	id: number
	value: string
	onChange: (e:any) => void
	onClick: (e: any) => void
}

const TodoList = (props: Props) => {
	const { id, value, onChange, onClick } = props
	const [checked, setChecked] = useState(false)

	function boxHandler() {
		setChecked(!checked)
	}

	return (
		<div>
			<input value={value} onChange={(e) => onChange(e)} disabled={checked}></input>
			<Checkbox onClick={boxHandler}></Checkbox>
			<button onClick={() => onClick(id)}>X</button>
			<div> by 2021 3 13</div>
		</div>
	)
}

export default TodoList
