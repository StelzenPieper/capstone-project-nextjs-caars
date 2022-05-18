import Link from 'next/link';
import StyledNavBar from './NavBar.styled';
import StyledButton from '../../../styles/StyledButton';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import SVGIcon from '../../assets/SVGIcon/SVGIcon';

export default function NavBarItem() {
	const [show, setShow] = useState(false);

	return (
		<StyledNavBar>
			<Link passHref href="/">
				<StyledButton type="button" variant="text">
					<SVGIcon variant="home" size="35px" color="hsl(264, 100%, 50%)" />
				</StyledButton>
			</Link>
			<StyledButton type="button" variant="text" onClick={() => setShow(true)}>
				<SVGIcon variant="add" size="35px" color="hsl(264, 100%, 50%)" />
			</StyledButton>
			<Modal show={show} onClose={() => setShow(false)} />
		</StyledNavBar>
	);
}
