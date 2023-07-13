import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as Styled from './login.style'
import InputComponent from '../Form/Input/Input.component'

export default function FormLoginComponent() {
	const users = [
		{
			id: 1,
			email: 'admin@usercep.com',
			password: '12345678',
		},
		{
			id: 2,
			email: 'usuario@usercep.com',
			password: '12345678',
		},
		{
			id: 3,
			email: 'fulano@usercep.com',
			password: '12345678',
		},
		{
			id: 4,
			email: 'ciclano@usercep.com',
			password: '12345678',
		},
	]

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const submitForm = (data) => {
		const { email, password } = data

		const user = users.find((u) => u.email === email)

		if (!user) {
			alert('Usuário não cadastrado')
			reset()
			return
		}

		password === user.password
			? redirectToHome()
			: alert('Ops! Usuário e/ou senha invalidos')
	}

	// utilizado para redirecionar para uma página
	const navigate = useNavigate()

	const redirectToHome = () => {
		navigate('/home')
	}

	return (
		<Styled.Form onSubmit={handleSubmit(submitForm)}>
			<Styled.Header>
				<Styled.Title>Login</Styled.Title>
				<Styled.Subtitle>Para acessar o sistema digite seu email e sua senha</Styled.Subtitle>
			</Styled.Header>

			<Styled.InputGroup>
				<InputComponent
					id="email"
					type="email"
					label="E-mail"
					placeholder="Type your e-mail"
					register={{
						...register('email', {
							required: true,
							validate: {
								matchPath: (v) =>
									/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v),
							},
						}),
					}}
					error={errors.email}
				/>
				<InputComponent
					id="password"
					type="password"
					label="Password"
					placeholder="Type your password"
					register={{
						...register('password', { required: true, minLength: 8 }),
					}}
					error={errors.password}
				/>
			</Styled.InputGroup>

			<Styled.Button
				$active={!errors.email && !errors.password}
				type="submit"
				disabled={errors.email || errors.password}
			>
				Entrar
			</Styled.Button>

			<Styled.Action>
				<a href="#">Esqueci minha senha</a>
				<Styled.Button $outlined={true} type='button'>Criar conta</Styled.Button>
			</Styled.Action>
		</Styled.Form>
	)
}
