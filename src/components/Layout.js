import Header from './Header/Header';
import NavBar from './NavBar/NavBar';

export default function Layout({ children }) {
	// styles the main html tag
	const styles = {
		margin: '9vh 0 0 0 ',
		display: 'flex',
		flexDirection: 'column',
	};

	return (
		<>
			<Header />
			<main style={styles}>{children}</main>
			<NavBar />
		</>
	);
}
