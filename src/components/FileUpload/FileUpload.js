import Image from 'next/image';
import { useState } from 'react';
import { StyledFileUpload, StyledInput } from '../UI/FileUpload/StyledFileUpload';
import StyledFlex from '../../../styles/StyledFlex';
import StyledButton from '../../../styles/StyledButton';
import _useStore from '../../lib/hooks/_useStore';
import SVGIcons from '../../assets/SVGIcon/SVGIcons';
import useStore from '../../lib/hooks/useStore';
import StyledFileUploadWrapper from '../UI/FileUpload/StyledFileUploadWrapper';
import StyledFileUploadPreviewWrapper from '../UI/FileUpload/StyledFileUploadPreviewWrapper';

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
		};
	};

	return (
		<>
			<StyledFileUploadWrapper>
				{previewDocument && (
					<StyledFileUploadPreviewWrapper>
						<Image
							src={previewDocument.url}
							alt={previewDocument.url}
							layout="fill"
							objectFit="cover"
						/>
					</StyledFileUploadPreviewWrapper>
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
						<StyledFlex>
							<input
								value={documentTitel}
								type="text"
								placeholder="Titel eingeben..."
								onChange={event => {
									setDocumentTitel(event.target.value);
								}}
							/>
						</StyledFlex>
						{previewDocument ? (
							<StyledButton
								variant="outlined"
								color="var(--primary-color)"
								border="2px solid var(--primary-color)"
								type="submit"
								onClick={event => {
									event.preventDefault();
									toggleAddDocument();
									addDocument(id, previewDocument, documentTitel);
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
			</StyledFileUploadWrapper>
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
