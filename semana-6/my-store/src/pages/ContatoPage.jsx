import React, { useContext } from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import FormContato from '../components/FormContato/FormContato';
import { BannerContext } from '../context/Context';

export default function ContatoPage() {
	const {title, setTitle, subTitle, setSubtitle} = useContext(BannerContext)
	setTitle("ENTRE EM CONTATO CONOSCO")
	setSubtitle('Contato')
  return (
		<>
			<Header />
			<Banner title={title} subTitle={subTitle} />
            <FormContato />
			<Footer />
		</>
  );
}
