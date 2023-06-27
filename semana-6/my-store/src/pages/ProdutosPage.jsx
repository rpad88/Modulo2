import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import CardProduto from '../components/CardProduto';
import Footer from '../components/Footer';

export default function ProdutosPage() {
  return (
		<>
			<Header />
			<Banner txt1="ESCOLHA O MELHOR PRA VOCÊ" txt2="nossos produtos" />
			<CardProduto />
			<Footer />
		</>
  );
}
