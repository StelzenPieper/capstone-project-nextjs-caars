import StyledHeader from '../UI/Header/StyledHeader';
import Image from 'next/image';
import Link from 'next/link';
import StyledButton from '../../../styles/StyledButton';
import StyledFlex from '../../../styles/StyledFlex';
import _useStore from '../../lib/hooks/_useStore';

export default function HeaderItem() {
	const profileImgLoader = ({ randomizer }) => {
		return `https://source.unsplash.com/random/?${randomizer}`;
	};

	const CarProfileState = _useStore(state => state.CarProfileState);
	const toggleCarProfile = _useStore(state => state.toggleCarProfile);

	const handleHomeClick = () => {
		if (CarProfileState) toggleCarProfile();
	};

	return (
		<StyledHeader>
			<Link passHref href="/">
				<StyledButton type="button" variant="logo" onClick={handleHomeClick}>
					caars
				</StyledButton>
			</Link>
			<StyledFlex
				width="6vh"
				height="6vh"
				borderRadius="60px"
				margin="0 1rem 0 0"
				border="2px solid hsl(264, 100%, 50%)"
				objectFit="cover"
				overflow="hidden"
				cursor="pointer"
			>
				<Link passHref href="/userProfile">
					<Image
						loader={profileImgLoader}
						src="profileImage"
						randomizer="person"
						alt="Picture of the author"
						layout="fill"
						objectFit="cover"
					/>
				</Link>
			</StyledFlex>
		</StyledHeader>
	);
}
