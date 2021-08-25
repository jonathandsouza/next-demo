import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React from 'react'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
	console.log('nice')

	return (
		<>
			<Component {...pageProps} />

			<Script src="https://www.googletagmanager.com/gtm.js?id=GTM-55NRC96" />
		</>
	)
}
export default MyApp
