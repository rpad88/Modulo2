import React, { useContext, useState } from 'react'
// import './cardProduto.css'
import { ModalContext } from '../../context/ModalContext'
import { Button, Card } from 'react-bootstrap'
import { CardStyled, ProductDetails } from './Card.style'

export default function CardProduto({produto}) {

	const {setShowModal, setData} = useContext(ModalContext)

	function showModal(produto) {
		// console.table(produto)
		setData(produto)
		setShowModal(true)
	}

  return (
    <>
      <CardStyled className="mb-3">
        <div className="img-div">
          <Card.Img className="img-fluid" variant="top" src={produto?.imgUrl} />
          <span className="price">R$ {produto.price.toFixed(2)}</span>
        </div>
        <Card.Body>
          <Card.Title>{produto.name}</Card.Title>
          {produto.description}

          <div className="row">
            <div className="details-wrapper">
              <ul>
                {produto.features.map((feature, i) => {
                  return <ProductDetails key={i}>{feature}</ProductDetails>;
                })}
              </ul>
            </div>
            <div className="btn-wrapper">
              <Button variant="outline-warning" onClick={() => showModal(produto)}>MAIS SOBRE</Button>
            </div>
          </div>
        </Card.Body>
      </CardStyled>
    </>
  );
}