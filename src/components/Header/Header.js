import StyledHeader from './Header.styled';
import Image from 'next/image';
import Link from 'next/link';
import StyledButton from '../../../styles/StyledButton';
import StyledFlex from '../../../styles/StyledFlex';

export default function HeaderItem() {
	const profileImgLoader = ({ randomizer }) => {
		return `https://source.unsplash.com/random/?${randomizer}`;
	};

	return (
		<StyledHeader>
			<Link passHref href="/">
				<StyledButton type="button" variant="logo">
					caars
				</StyledButton>
			</Link>
			<StyledFlex
				width="60px"
				height="60px"
				borderRadius="60px"
				margin="0 1rem 0 0"
				border="2px solid hsl(264, 100%, 50%)"
				objectFit="cover"
				overflow="hidden"
				cursor="pointer"
			>
				<Image
					loader={profileImgLoader}
					src="profileImage"
					randomizer="person"
					alt="Picture of the author"
					layout="fill"
					objectFit="cover"
				/>
			</StyledFlex>
		</StyledHeader>
	);
}
