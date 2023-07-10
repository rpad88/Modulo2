import React from 'react'
import './footer.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<div className="container-fluid footer-wrapper bg-black">
			<div className="container">
				<div className="row px-3">
					<div className="logo col p-0">
						<h3 className="mostarda">My Store</h3>
					</div>
					<div className="contato col p-2 texto-cinza">
						<p>CONTATO</p>
						<a
							role="link"
							className="texto-cinza"
							href="tel: +5565999999999"
						>
							+55 65 99999-9999
						</a>
						<a
							role="link"
							className="texto-cinza"
							href="mailto: contato@suaempresa.com"
						>
							contato@suaempresa.com
						</a>
						<hr />
						<span>Minha rua, 00 - Centro</span>
						<span>Cuiabá-MT</span>
						<hr />
						<div className="socials p-0">
							<a href="#" role="link">
								<InstagramIcon
									style={{ color: '#fff' }}
									aria-label="Instagram link"
								/>
							</a>
							<a href="#" role="link">
								<FacebookOutlinedIcon
									style={{ color: '#fff' }}
									aria-label="Facebook link"
								/>
							</a>
							<a href="#" role="link">
								<YouTubeIcon
									style={{ color: '#fff' }}
									aria-label="Youtube link"
								/>
							</a>
						</div>
					</div>
					<div className="informacoes col p-2 texto-cinza">
						<p>INFORMAÇÕES</p>
						<div className="info-links">

							<Link to={'/produtos'} className='texto-cinza'>
								Produtos
							</Link>
							
							<Link to={'/contato'} className='texto-cinza'>
								Contato
							</Link>
							<Link to={'#'} className='texto-cinza'>
								Termos e condições
							</Link>
						</div>
					</div>
				</div>
				<div className="container copyright texto-cinza">
					<p>My Store Alguns direitos reservados</p>
				</div>
			</div>
		</div>
	)
}
