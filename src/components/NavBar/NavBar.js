import Link from 'next/link';
import StyledNavBar from './NavBar.styled';
import StyledButtons from '../../../styles/Buttons.styled';

export default function NavBarItem() {
	return (
		<StyledNavBar>
			<Link passHref href="/">
				<StyledButtons variant="navButton">HOME</StyledButtons>
			</Link>
		</StyledNavBar>
	);
}
