import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BannerProvider } from './context/Context.jsx'
import { ModalProvider } from './context/ModalContext.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ModalProvider>
			<BannerProvider>
				<App />
			</BannerProvider>
		</ModalProvider>
	</React.StrictMode>
);
