import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Main from '../../styles/Main.styled';

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<NavBar />
		</>
	);
}
