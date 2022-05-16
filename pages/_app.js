import { StrictMode } from 'react';
import Layout from '../src/components/Layout';
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
	return (
		<StrictMode>
			<GlobalStyle />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</StrictMode>
	);
}

export default MyApp;
