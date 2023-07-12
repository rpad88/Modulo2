import { useNavigate } from 'react-router-dom'
import * as Styled from './login.style'
import { useState } from 'react'

export default function FormLoginComponent() {
	const [data, setData] = useState({
		email: '',
		password: ''
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
		const {value, id} = event.target

		setData({...data, [id]: value})
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
				<div className="input-group">
					<label htmlFor="email">E-mail</label>
					<Styled.Input id="email" type="text" placeholder="Digite seu email" />
				</div>

				<div className="input-group">
					<label htmlFor="password">Password</label>
					<Styled.Input
						id="password"
						type="password"
						placeholder="Digite sua senha"
					/>
				</div>
			</Styled.InputGroup>

			<Styled.Button type="submit" disabled={isDisabled()}>Entrar</Styled.Button>

			<Styled.Action>
				<a href="#">Esqueci minha senha</a>
				<Styled.Button $outlined={true}>Criar conta</Styled.Button>
			</Styled.Action>
		</Styled.Form>
	)
}
