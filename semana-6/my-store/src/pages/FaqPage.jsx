import React, { useContext } from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner/Banner';
import FaqComponent from '../components/Faq/FaqComponent';
import Footer from '../components/Footer';
import { BannerContext } from '../context/Context';

export default function FaqPage() {
    const {title, setTitle, subTitle, setSubtitle} = useContext(BannerContext)
	setTitle("DUVIDAS FREQUENTES")
	setSubtitle('Perguntas frequentes')

  return (
		<>
			<Header />
			<Banner title={title} subTitle={subTitle} />
			<FaqComponent />
			<Footer />
		</>
  );
}
