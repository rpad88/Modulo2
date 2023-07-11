import { useNavigate } from 'react-router-dom'

export default function FormLoginComponent() {
    // utilizado para redirecionar para uma página
    const navigate = useNavigate()

    const redirectToLogin = () => {
        navigate('/home')
    }

	return (
		<form action="" onSubmit={redirectToLogin}>
            <legend>Login</legend>
			<div className="input-group">
				<label htmlFor="email">E-mail</label>
				<input id="email" type="text" placeholder="Digite seu email" />
			</div>
			<div className="input-group">
				<label htmlFor="password">Password</label>
				<input id="password" type="text" placeholder="Digite sua senha" />
			</div>

            <button type="submit">Logar</button>
		</form>
	)
}
