import Image from 'next/image';
import { useState } from 'react';
import { StyledFileUpload, StyledInput } from './StyledFileUpload';
import StyledFlex from '../../../styles/StyledFlex';
import StyledButton from '../../../styles/StyledButton';
import _useStore from '../../lib/hooks/_useStore';
import SVGIcons from '../../assets/SVGIcon/SVGIcons';
import useStore from '../../lib/hooks/useStore';

export default function FileUpload() {
	const CLOUD = process.env.CLOUDINARY_CLOUD;
	const PRESET = process.env.CLOUDINARY_PRESET_DOCUMENTS;

	const toggleAddDocument = _useStore(state => state.toggleAddDocument);

	const addDocument = useStore(state => state.addDocument);
	const id = useStore(state => state.id);

	const [previewDocument, setPreviewDocument] = useState();
	const [documentTitel, setDocumentTitel] = useState('');

	const uploadDocument = async event => {
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

			setPreviewDocument(await response.json());
		} catch (error) {
			console.error(error.message);
		}
	};

	const onSubmit = data => {
		data.file = {
			url: previewDocument.url,
			width: previewDocument.width,
			height: previewDocument.height,
			titel: documentTitel,
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
				{previewDocument && (
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
							src={previewDocument.url}
							alt={previewDocument.url}
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
						toggleAddDocument();
					}}
				>
					<SVGIcons variant="xBox" size="20px" color="var(--primary-color)" />
				</StyledButton>

				<StyledFileUpload onSubmit={onSubmit}>
					{!previewDocument && (
						<label htmlFor="documentUpload">
							<StyledFlex alignItems="center" cursor="pointer">
								<SVGIcons
									variant="fileUpload"
									size="50px"
									color="var(--primary-color)"
								/>
							</StyledFlex>
						</label>
					)}
					<StyledInput id="documentUpload" type="file" onChange={uploadDocument} />
					<StyledFlex
						background="var(--transparent)"
						alignItems="center"
						justifyContent="center"
					>
						<input
							type="text"
							placeholder="Titel eintragen..."
							onInput={event => {
								event.preventDefault();
								setDocumentTitel(event.target.value);
							}}
						/>
						{previewDocument ? (
							<StyledButton
								variant="outlined"
								color="var(--primary-color)"
								border="2px solid var(--primary-color)"
								type="submit"
								onClick={event => {
									event.preventDefault();
									toggleAddDocument();
									addDocument(id, previewDocument);
									console.log(previewDocument);
								}}
							>
								Dokument hochladen
							</StyledButton>
						) : (
							<StyledButton
								disabled
								variant="outlined"
								color="grey"
								background="var(--transparent)"
								borderColor="grey"
								type="submit"
							>
								Dokument hochladen
							</StyledButton>
						)}
					</StyledFlex>
				</StyledFileUpload>
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
					toggleAddDocument();
				}}
			/>
		</>
	);
}
