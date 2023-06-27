import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import FormContato from '../components/FormContato/FormContato';

export default function ContatoPage() {
  return (
		<>
			<Header />
			<Banner txt1="ENTRE EM CONTATO CONOSCO" txt2="Contato" />
            <FormContato />
			<Footer />
		</>
  );
}
