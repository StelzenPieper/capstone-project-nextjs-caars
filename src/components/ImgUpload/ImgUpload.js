import Image from 'next/image';
import { useState } from 'react';
import { StyledImgUpload } from './StyledImgUpload';
import StyledFlex from '../../../styles/StyledFlex';
import StyledButton from '../../../styles/StyledButton';
import _useStore from '../../lib/hooks/_useStore';
import SVGIcons from '../../assets/SVGIcon/SVGIcons';
import useStore from '../../lib/hooks/useStore';

export default function ImgUpload() {
	const CLOUD = process.env.CLOUDINARY_CLOUD;
	const PRESET = process.env.CLOUDINARY_PRESET;

	const toggleAddCarImage = _useStore(state => state.toggleAddCarImage);

	const addCarImage = useStore(state => state.addCarImage);
	const id = useStore(state => state.id);

	const [previewImage, setPreviewImage] = useState();

	const uploadImage = async event => {
		try {
			const url = `https://api.cloudinary.com/v1_1/${CLOUD}/image/upload`;
			const file = event.target.files[0];

			const data = new FormData();
			data.append('file', file);
			data.append('upload_preset', PRESET);

			const response = await fetch(url, {
				method: 'POST',
				body: data,
			});

			setPreviewImage(await response.json());
		} catch (error) {
			console.error(error.message);
		}
	};

	const onSubmit = data => {
		data.file = {
			url: previewImage.url,
			width: previewImage.width,
			height: previewImage.height,
		};
		console.log(data);
	};

	return (
		<>
			<StyledFlex
				height="65vh"
				background="var(--secondary-color)"
				justifyContent="center"
				alignSelf="center"
				borderRadius="8px"
				position="fixed"
				top="0"
				right="0"
				bottom="0"
				left="0"
				zIndex="110"
			>
				{previewImage && (
					<StyledFlex
						margin="8vh 0 0 0"
						height="200px"
						width="300px"
						borderRadius="8px"
						objectFit="cover"
						overflow="hidden"
						cursor="pointer"
						alignContent="center"
						justifyContent="center"
						alignSelf="center"
					>
						<Image
							src={previewImage.url}
							alt={previewImage.url}
							layout="fill"
							objectFit="cover"
						/>
					</StyledFlex>
				)}
				<StyledButton
					variant="favorite"
					position="absolute"
					top="10vh"
					right="2vw"
					zIndex="10"
					type="button"
					onClick={event => {
						event.preventDefault();
						toggleAddCarImage();
					}}
				>
					<SVGIcons variant="xBox" size="20px" color="var(--primary-color)" />
				</StyledButton>
				<StyledImgUpload onSubmit={onSubmit}>
					<input type="file" onChange={uploadImage} />
					<StyledFlex
						background="var(--transparent)"
						alignItems="center"
						justifyContent="center"
					>
						<StyledButton
							variant="outlined"
							color="var(--primary-color)"
							border="2px solid var(--primary-color)"
							type="submit"
							onClick={event => {
								event.preventDefault();
								toggleAddCarImage();
								addCarImage(id, previewImage);
							}}
						>
							Bild hochladen
						</StyledButton>
					</StyledFlex>
				</StyledImgUpload>
			</StyledFlex>
			<StyledFlex
				background="var(--transparent)"
				position="fixed"
				top="65vh"
				right="0"
				bottom="0"
				left="0"
				zIndex="101"
				onClick={event => {
					event.preventDefault();
					toggleAddCarImage();
				}}
			/>
		</>
	);
}