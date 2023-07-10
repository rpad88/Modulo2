import React, { useRef } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search'

export default function SearchFaqComponent({ setInputFindFaq }) {
	const findRef = useRef()

	const handleFindFaq = (e) => {
		e.preventDefault()
		const value = findRef.current.value
		setInputFindFaq(value)
	}

	return (
		<>
			<Form className="mb-4" onSubmit={handleFindFaq}>
				<InputGroup>
					<Form.Control
						placeholder="Descreva brevemente sua dúvida"
						className="focus-ring focus-ring-warning"
						ref={findRef}
						onInput={handleFindFaq}
					/>
					<Button type="submit" variant="warning">
						<SearchIcon style={{ color: '#fff' }} />
					</Button>
				</InputGroup>
			</Form>
		</>
	)
}
