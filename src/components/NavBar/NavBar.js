import Link from 'next/link';
import StyledNavBar from './NavBar.styled';
import StyledButton from '../../../styles/StyledButton';
import SVGIcon from '../../assets/SVGIcon/SVGIcons';
import useStore from '../../lib/hooks/useStore';
import _useStore from '../../lib/hooks/_useStore';

export default function NavBar() {
	const toggleModalState = useStore(state => state.toggleModalState);
	const CarProfileState = _useStore(state => state.CarProfileState);
	const toggleCarProfile = _useStore(state => state.toggleCarProfile);

	const handleClick = () => {
		toggleModalState();
		if (CarProfileState) toggleCarProfile();
	};

	const handleHomeClick = () => {
		if (CarProfileState) toggleCarProfile();
	};

	return (
		<StyledNavBar>
			<Link passHref href="/">
				<StyledButton type="button" variant="text" onClick={handleHomeClick}>
					<SVGIcon variant="home" size="35px" color="hsl(264, 100%, 50%)" />
				</StyledButton>
			</Link>
			<StyledButton
				type="button"
				variant="text"
				aria-label="open add new car form"
				onClick={handleClick}
			>
				<SVGIcon variant="add" size="35px" color="hsl(264, 100%, 50%)" />
			</StyledButton>
		</StyledNavBar>
	);
}
