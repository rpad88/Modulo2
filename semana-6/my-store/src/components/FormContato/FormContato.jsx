import React, { useState } from 'react'
import './formContato.css'

export default function FormContato() {

    const [counter, setCounter] = useState(0)
    const handleInputCounter = (e) => {
        setCounter(e.target.value.length)
    }

  return (
		<>
			<form className="container mt-5">
				<legend className="text-secondary mb-3">Deixe o seu recado</legend>
				<div className="row mb-4">
					<div className="col">
						<label htmlFor="nome" className="form-label">
							Nome
						</label>
						<input
							type="text"
							name="nome"
							id="nome"
							className="form-control"
							placeholder="Digite seu nome..."
						/>
					</div>
					<div className="col">
						<label htmlFor="telefone" className="form-label">
							Telefone
						</label>
						<input
							type="text"
							name="telefone"
							id="telefone"
							className="form-control"
							placeholder="Digite seu telefone..."
						/>
					</div>
				</div>
				<div className="mb-4">
					<label htmlFor="email" className="form-label">
						E-mail
					</label>
					<input
						type="email"
						name="email"
						id="email"
						className="form-control"
						placeholder="Digite seu email..."
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="mensagem" className="form-label">
						Mensagem
					</label>
					<textarea
						name="mensagem"
						id="mensagem"
						style={{ height: "100px", width: "100%" }}
						className="form-control"
						placeholder="Digite sua mensagem..."
						maxLength={500}
						onChange={handleInputCounter}
					></textarea>
				</div>
				<div className="w-100 d-flex flex-column mb-5">
					<p className="text-secondary d-block align-self-end">{`${counter} de 500 caracteres`}</p>
					<button type="submit" className="btn btn-warning align-self-end">
						Enviar
					</button>
				</div>
			</form>
			<div className="container">
				<h3 className="text-secondary mb-4">
					Venha conhecer nossa loja<span className="mostarda">.</span>
				</h3>
				<div className="card p-0">
					<div className="map">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.9535107480765!2d-43.934401799999996!3d-19.9263638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e8a82760af%3A0xbeca5f6434a25898!2sAv.%20Afonso%20Pena%2C%201568%20-%20Centro%2C%20Belo%20Horizonte%20-%20MG%2C%2030180-000!5e0!3m2!1spt-BR!2sbr!4v1687827466972!5m2!1spt-BR!2sbr"
							width="100%"
							height="200"
							style={{ border: 0 }}
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
					<div className="p-4">
						<h5 className="mb-3">Matriz</h5>
						<div className="d-flex mb-3">
							<div className="border-start border-3 col">
								<p className="ms-3">Rua Afonso Pena, 1568, Centro</p>
								<p className="ms-3">Belo Horizonte, Minas Gerais</p>
							</div>
							<div className="border-start border-3 col">
								<p className="ms-3">contato@suaempresa.com.br</p>
								<p className="ms-3">+55 31 9 9430-3303</p>
							</div>
						</div>
						<small>Aberta de 08h as 18h de segunda à sexta</small>
					</div>
				</div>
			</div>
		</>
  );
}
