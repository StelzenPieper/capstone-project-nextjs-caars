import StyledHeader from './Header.styled';
import Image from 'next/image';

export default function HeaderItem() {
	const profileImgLoader = ({ width, height, randomizer }) => {
		return `https://source.unsplash.com/random/${width}x${height}/?${randomizer}`;
	};

	return (
		<StyledHeader>
			<h1>caars</h1>
			<div>
				<Image
					loader={profileImgLoader}
					src="me.png"
					randomizer="face"
					alt="Picture of the author"
					width={60}
					height={60}
					layout="fill"
					objectFit="cover"
				/>
			</div>
		</StyledHeader>
	);
}
