import Image from 'next/image';
import { useState } from 'react';
import StyledFlex from '../../../styles/StyledFlex';
import StyledButton from '../../../styles/StyledButton';
import SVGIcons from '../../assets/SVGIcon/SVGIcons';

export default function ImageSlider({ data }) {
	const carImages = `https://res.cloudinary.com/caarsde/image/upload/v1654112534/`;

	const [index, setIndex] = useState(0);

	const imageArray = data.images.map(carImageKey => carImages + carImageKey);

	function loop(count) {
		if (count === imageArray.length) {
			return (count = 0);
		}
		if (count < 0) {
			return (count = imageArray.length - 1);
		}
		return count;
	}

	return (
		<StyledFlex height="40vh" width="100%" overflow="hidden" objectFit="cover">
			<StyledFlex flexDirection="row" justifyContent="space-between" alignContent="center">
				{imageArray.length > 1 && (
					<>
						<StyledButton
							type="button"
							variant="favorite"
							position="absolute"
							top="38%"
							left="5px"
							zIndex="10"
							onClick={() => setIndex(count => loop(count - 1))}
						>
							<SVGIcons variant="arrowLeft" color="white" />
						</StyledButton>

						<StyledButton
							type="button"
							variant="favorite"
							position="absolute"
							top="38%"
							right="5px"
							zIndex="10"
							onClick={() => setIndex(count => loop(count + 1))}
						>
							<SVGIcons variant="arrowRight" color="white" />
						</StyledButton>
					</>
				)}
				<Image
					src={imageArray[index]}
					layout="fill"
					objectFit="cover"
					alt={imageArray[index]}
				/>
			</StyledFlex>
		</StyledFlex>
	);
}
