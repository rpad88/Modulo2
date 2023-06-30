import React, { useContext } from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { BannerContext } from '../context/Context';

export default function NotFoundPage() {

	const { title, setTitle, subTitle, setSubtitle } = useContext(BannerContext)
	setTitle("Parece que você errou a página")
	setSubtitle("vá para a nossa home page")

  return (
		<>
			<Header />
			<Banner
				title={title}
				subTitle={subTitle}
			/>
			<div className="container d-flex justify-content-center mt-5 mb-5">
				<h1 className="align-self-center">404 Not found</h1>
			</div>
			<Footer />
		</>
  );
}
