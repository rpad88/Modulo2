import React, { useContext } from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import CardProduto from '../components/CardProduto';
import Footer from '../components/Footer';
import { BannerContext } from '../context/Context';

export default function ProdutosPage() {

	const {title, setTitle, subTitle, setSubtitle} = useContext(BannerContext)
	setTitle("ESCOLHA O MELHOR PRA VOCÊ")
	setSubtitle('nossos produtos')

  return (
		<>
			<Header />
			<Banner title={title} subTitle={subTitle} />
			<CardProduto />
			<Footer />
		</>
  );
}
