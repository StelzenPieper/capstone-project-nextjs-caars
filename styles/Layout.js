import Header from '../src/components/Header/Header';
import NavBar from '../src/components/NavBar/NavBar';
import StyledMain from './StyledMain';

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<StyledMain>{children}</StyledMain>
			<NavBar />
		</>
	);
}
