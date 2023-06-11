import React from 'react'
import './footer.css'
import logoInstagram from '../../assets/img/instagram.png'
import logoFacebook from '../../assets/img/facebook.png'
import logoYoutube from '../../assets/img/youtube.png'

export default function Footer() {
  return (
		<div className="container-fluid footer-wrapper bg-black">
			<div className="container d-flex">
				<div className="logo col p-1">
					<h3 className="mostarda">My Store</h3>
				</div>
				<div className="contato col p-2 texto-cinza">
					<p>CONTATO</p>
					<a role='link' className='texto-cinza' href='tel: +5565999999999'>+55 65 99999-9999</a>
					<a role='link' className='texto-cinza' href='mailto: contato@suaempresa.com'>contato@suaempresa.com</a>
					<hr />
					<span>Minha rua, 00 - Centro</span>
					<span>Cuiabá-MT</span>
					<hr />
					<div className="socials p-0">
            <a href="#" role='link'><img src={logoInstagram} alt="instagram"/></a>
            <a href="#" role='link'><img src={logoFacebook} alt="facebook"/></a>
            <a href="#" role='link'><img src={logoYoutube} alt="youtube"/></a>
          </div>
				</div>
				<div className="informacoes col p-2 texto-cinza">
					<p>INFORMAÇÕES</p>
					<div className="info-links">
						<a href="#" className="texto-cinza">
							Produtos
						</a>
						<a href="#" className="texto-cinza">
							Contato
						</a>
						<a href="#" className="texto-cinza">
							Termos e condições
						</a>
					</div>
				</div>
			</div>
			<div className="container copyright texto-cinza">
				<p>My Store Alguns direitos reservados</p>
			</div>
		</div>
  );
}
