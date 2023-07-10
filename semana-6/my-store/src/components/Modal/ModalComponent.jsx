import React, { useContext, useEffect } from 'react'
import { Button, CardImg, Modal } from 'react-bootstrap'
import { ModalContext } from '../../context/ModalContext'
import { BuyButton, SpanFeature } from './Modal.style'

export default function ModalComponent() {
	const { showModal, setShowModal, data, setData } = useContext(ModalContext)

	const handleClose = () => {
		setShowModal(false)
		setData({})
	}

	return (
		<>
			<Modal
				show={showModal}
				fullscreen="xl-down"
				backdrop="static"
				centered
				onEscapeKeyDown={handleClose}
			>
				<Modal.Header>
					<Modal.Title className="text-warning mx-auto">
						Detalhes do Produto
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="d-flex">
						<h5 className="text-center">{data.name}</h5>
						<span className="ms-auto">R$ {data.price.toFixed(2)}</span>
					</div>
					<CardImg src={data.imgUrl} />
					<p>{data.description}</p>
					<div className="info">
						<h6>Informações</h6>
						<div className="features d-flex">
							{data.features.map((feature) => {
								return <SpanFeature>{feature}</SpanFeature>
							})}
						</div>
					</div>
					<div className="tech-info mt-3">
						<h6>Ficha Técnica</h6>
						<div className="features d-flex">
							{data.features.map((feature) => {
								return <SpanFeature>{feature}</SpanFeature>
							})}
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer className="d-flex">
					<Button
						variant="danger"
						size="lg"
						style={{ flexGrow: 1 }}
						onClick={handleClose}
					>
						Fechar
					</Button>
					<BuyButton
						variant="warning"
						size="lg"
						style={{ flexGrow: 1 }}
						onClick={() => alert('Item adicionado ao carrinho')}
					>
						Comprar
					</BuyButton>
				</Modal.Footer>
			</Modal>
		</>
	)
}
