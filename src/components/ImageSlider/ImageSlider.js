import Image from 'next/image';
import { useState } from 'react';
import StyledButton from '../../../styles/StyledButton';
import SVGIcons from '../../assets/SVGIcon/SVGIcons';
import StyledImageSliderWrapper from '../UI/ImageSlider/StyledImageSlyderWrapper';
import StyledImageSlider from '../UI/ImageSlider/StyledImageSlyder';
import StyledPreviewIamgeWrapper from '../UI/ImageSlider/StyledPreviewImageWrapper';

export default function ImageSlider({ data }) {
	const carImages = `https://res.cloudinary.com/caarsde/image/upload/v1654112534/`;
	const previewImage =
		"url('https://images.unsplash.com/photo-1564890379370-2cf3df59dfb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
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
		<StyledImageSliderWrapper>
			<StyledImageSlider>
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
				{imageArray < 1 ? (
					<StyledPreviewIamgeWrapper backgroundImage={previewImage} />
				) : (
					<Image
						src={imageArray[index]}
						layout="fill"
						objectFit="cover"
						alt={imageArray[index]}
					/>
				)}
			</StyledImageSlider>
		</StyledImageSliderWrapper>
	);
}
