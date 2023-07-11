export default function FormLoginComponent() {
	return (
		<form action="">
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
