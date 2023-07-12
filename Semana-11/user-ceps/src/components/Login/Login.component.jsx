import { useNavigate } from 'react-router-dom'
import * as Styled from './login.style'
import { useState } from 'react'
import InputComponent from '../Form/Input/Input.component'

export default function FormLoginComponent() {
	const [data, setData] = useState({
		email: '',
		password: '',
	})

	const isDisabled = () => {
		return (
			!data.email ||
			!data.password ||
			!data.email.includes('@') ||
			data.password.length < 8
		)
	}

	const handleInput = (event) => {
		event.preventDefault()
		const { value, id } = event.target

		setData({ ...data, [id]: value })
	}

	// utilizado para redirecionar para uma página
	const navigate = useNavigate()

	const redirectToLogin = () => {
		navigate('/home')
	}

	return (
		<Styled.Form onSubmit={redirectToLogin}>
			<Styled.Header>
				<Styled.Title>Login</Styled.Title>
				<Styled.Subtitle>texto</Styled.Subtitle>
			</Styled.Header>

			<Styled.InputGroup>
				<InputComponent
					id="email"
					type="email"
					label="E-mail"
					placeholder="Type your e-mail"
				/>
				<InputComponent
					id="password"
					type="password"
					label="Password"
					placeholder="Type your password"
				/>
			</Styled.InputGroup>

			<Styled.Button type="submit" disabled={isDisabled()}>
				Entrar
			</Styled.Button>

			<Styled.Action>
				<a href="#">Esqueci minha senha</a>
				<Styled.Button $outlined={true}>Criar conta</Styled.Button>
			</Styled.Action>
		</Styled.Form>
	)
}
