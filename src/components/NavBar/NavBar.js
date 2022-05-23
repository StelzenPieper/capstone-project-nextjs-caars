import Link from 'next/link';
import StyledNavBar from './NavBar.styled';
import StyledButton from '../../../styles/StyledButton';
import SVGIcon from '../../assets/SVGIcon/SVGIcons';
import useStore from '../../lib/hooks/useStore';

export default function NavBar() {
	const toggleModalState = useStore(state => state.toggleModalState);

	const handleClick = () => {
		toggleModalState();
	};

	return (
		<StyledNavBar>
			<Link passHref href="/">
				<StyledButton type="button" variant="text">
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
