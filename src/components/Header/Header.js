import StyledHeader from './Header.styled';
import Image from 'next/image';
import Link from 'next/link';
import StyledButtons from '../../../styles/Buttons.styled';
import StyledDivs from '../../../styles/Divs.styled';

export default function HeaderItem() {
	const profileImgLoader = ({ randomizer }) => {
		return `https://source.unsplash.com/random/?${randomizer}`;
	};

	return (
		<StyledHeader>
			<Link passHref href="/">
				<StyledButtons variant="logo">caars</StyledButtons>
			</Link>
			<StyledDivs variant="userImgLogoSmall">
				<Image
					loader={profileImgLoader}
					src="profileImage"
					randomizer="person"
					alt="Picture of the author"
					layout="fill"
					objectFit="cover"
				/>
			</StyledDivs>
		</StyledHeader>
	);
}
