import React, { useState } from 'react'

export default function Header() {
	const [nome, setNome] = useState('Anônimo')
    
    function handleName(e) {
		e.preventDefault()
		const nomeInput = document.querySelector("#nomeInput")
        setNome(nomeInput.value)
		const dialog = document.querySelector("[data-dialog]")
		nomeInput.value = ''
        dialog.close()
    }
    
    function handleDialog() {
			const dialog = document.querySelector("[data-dialog]");
			dialog.showModal();
		}
	
	return (
		<nav className="container-fluid bg-light p-2" role="navigation">
			<div className="container">
				<span className='me-2'>Olá {nome}</span>
				<button onClick={handleDialog} className='btn btn-secondary'>Mudar nome?</button>
			</div>
			<dialog data-dialog>
				<form action="" onSubmit={handleName}>
					<input
						id="nomeInput"
						type="text"
						placeholder="Digite seu nome"
					/>
					<input type="submit" hidden />
				</form>
			</dialog>
		</nav>
  )
}
