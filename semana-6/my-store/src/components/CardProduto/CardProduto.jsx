import React from 'react'
import './cardProduto.css'

export default function CardProduto() {

    const productsArray = [
        {
            imgUrl: "https://images.unsplash.com/photo-1568910748155-01ca989dbdd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            name: "Echo Dot 3º geração",
            description: "O Echo Dot é o nosso smart speaker de maior sucesso. Controlado por voz com Alexa, ele é perfeito para qualquer ambiente. Você pode pedir músicas, notícias, informações e muito mais. Além de ligar para amigos e familiares e controlar dispositivos compatíveis de casa inteligente com sua voz.",
            price: 399.90,
            features: ["Peça música por voz","Chamadas sem usar as mãos","Casa inteligente", "Conexão Bluetooth" ]
          },
          {
            imgUrl: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1028&q=80",
            name: "Mouse Logitec G305",
            description: "Mouse para jogos sem fio LIGHTSPEED projetado para um desempenho de ponta com as mais recentes inovações tecnológicas. Bateria com duração impressionante de 250 horas.",
            price: 229.00,
            features: ["Sem fio", "12.000 DPI", "1 ms", "6 botões"]
          }
    ]

  return (
    <div className='container'>
        {productsArray.map(produto => {
            return (
                    <div className="card mt-4">
					<div className="row g-0">
						<div className="col-md-5 img-wrapper">
							<img
								src={produto.imgUrl}
								alt=""
								className="img-fluid rounded-start"
							/>
							<span className="price">R$ {produto.price.toFixed(2)}</span>
						</div>
						<div className="col-md-7">
							<div className="card-body b-0">
								<h5 className="card-title">{produto.name}</h5>
								<p className="card-text">
									{produto.description}
								</p>
								<div className="row-wrapper">
									<div className="details-wrapper">
										<ul>{
                                        produto.features.map(feature => (<li>{feature}</li>))
                                            }</ul>
									</div>
									<div className="btn-wrapper"></div>
								</div>
							</div>
						</div>
					</div>
                    </div>
				);
        })}
        
    </div>
  )
}
