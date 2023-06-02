import React from 'react'
import './header.css'
import Btn from '../Btn'
import AppImg from '../../img/apps_icon.svg'
import BrFlag from '../../img/icons8-brasil-48.png'
import UsaFlag from '../../img/icons8-eua-48.png'

export default function Header({setLang}) {
  return (
		<div className="bg-blue flex">
			<Btn txt="Gmail" />
			<Btn txt="Drive" />
			<img 
				className="flag" 
				src={BrFlag} 
				alt="Portugês" 
				onClick={() => setLang('br')} 
			/>
			<img 
				className="flag" 
				src={UsaFlag} 
				alt="Inglês" 
				onClick={() => setLang('us')} 
			/>
			<img 
				src={AppImg} 
				alt="apps" 
				className="apps-icon" 
			/>
			<img
				src="https://img.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?w=2000"
				width={28}
				alt="avatar"
				className="avatar-img horizontal-shake"
			/>
		</div>
  );
}
