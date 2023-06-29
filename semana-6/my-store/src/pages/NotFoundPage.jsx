import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

export default function NotFoundPage() {
  return (
		<>
			<Header />
			<Banner
				txt1="Parece que você errou a página"
				txt2="vá para a nossa home page"
			/>
			<div className="container d-flex justify-content-center mt-5 mb-5">
				<h1 className="align-self-center">404 Not found</h1>
			</div>
			<Footer />
		</>
  );
}
