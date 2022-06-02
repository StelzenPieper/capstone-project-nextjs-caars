import StyledButton from '../../../styles/StyledButton';
import StyledFlex from '../../../styles/StyledFlex';
import Typography from '../../../styles/Typography';
import SVGIcons from '../../assets/SVGIcon/SVGIcons';
import useStore from '../../lib/hooks/useStore';
import _useStore from '../../lib/hooks/_useStore';
import ImageSlider from '../ImageSlider/ImageSlider';

export default function CarProfile() {
	const toggleCarProfile = _useStore(state => state.toggleCarProfile);
	const myVehicles = useStore(state => state.myVehicles);
	const id = useStore(state => state.id);
	const data = myVehicles.find(vehicle => vehicle.caarsId === id);
	const toggleAddCarImage = _useStore(state => state.toggleAddCarImage);
	const toggleAddDocument = _useStore(state => state.toggleAddDocument);

	const docuemntUrl = `https://res.cloudinary.com/caarsde/image/upload/v1654174773/`;

	return (
		<StyledFlex
			width="100%"
			height="100%"
			padding="0 8vw 12vh 8vw"
			justifyContent="flex-start"
			alignItems="flex-start"
			background="var(--secondary-background)"
			zIndex="100"
			overflow="scroll"
		>
			<StyledButton
				variant="favorite"
				position="absolute"
				top="5vh"
				right="2vw"
				zIndex="10"
				type="button"
				onClick={event => {
					event.preventDefault();
					toggleCarProfile();
				}}
			>
				<SVGIcons variant="xBox" size="20px" color="white" />
			</StyledButton>
			<StyledFlex
				width="100%"
				height="100%"
				padding="6vh 8vw 0 8vw"
				justifyContent="flex-start"
				alignItems="flex-start"
				background="var(--secondary-background)"
			>
				<Typography variant="h4" textDecoration="underline" color="white">
					{data.vehicleModelSeriesName}
				</Typography>
			</StyledFlex>
			{data.images.length > 0 && (
				<StyledFlex
					margin="2vh 0 0 0"
					height="100%"
					width="120%"
					borderRadius="none"
					objectFit="contain"
					overflow="hidden"
					cursor="pointer"
					alignSelf="center"
				>
					<ImageSlider data={data} />
				</StyledFlex>
			)}
			<StyledFlex
				margin="30px 0 30px 0"
				background="var(--transparent)"
				padding="2vh 0 0 0"
				position="absolute"
				top="6vh"
				right="2vw"
			>
				<StyledButton
					variant="outlined"
					color="var(--secondary-color)"
					border="none"
					type="button"
					onClick={event => {
						event.preventDefault();
						toggleAddCarImage();
					}}
				>
					<SVGIcons variant="imageUpload" />
				</StyledButton>
			</StyledFlex>
			<StyledFlex padding="0 2vw 0 8vw" background="var(--secondary-background)">
				<Typography variant="text" padding="3px" color="white" lineHeight="25px">
					VIN: {data.vinValue}
					<br />
					Hersteller: {data.mfrName}
					<br />
					Typ: {data.description}
					<br />
					Karosserieform: {data.bodyStyle}
					<br />
					Leistung: {data.kiloWattsTo} kW ({data.horsePowerFrom} PS)
					<br />
					Kraftstoff: {data.engineType}
					<br />
					Antriebsart: {data.driveType}
					<br />
					Zylinder: {data.cylinders}
				</Typography>
			</StyledFlex>
			<StyledFlex
				margin="30px 0 20px 0"
				padding="2vh 0 0 0"
				background="var(--transparent)"
				//alignSelf="center"
			>
				<StyledFlex
					background="var(--transparent)"
					flexDirection="row"
					gap="40px"
					alignItems="center"
				>
					<StyledButton
						variant="outlined"
						color="var(--primary-color)"
						background="var(--secondary-color)"
						type="button"
						onClick={event => {
							event.preventDefault();
							toggleAddDocument();
						}}
					>
						<SVGIcons variant="fileUpload" />
					</StyledButton>
					<Typography variant="h4" color="white">
						Meine Dokumente:
					</Typography>
				</StyledFlex>
			</StyledFlex>
			{data.documents.length > 0 && (
				<StyledFlex background="var(--transparent)" width="100%" alignItems="center">
					{data.documents.map(document => {
						return (
							<StyledButton
								key={document}
								variant="favorite"
								onClick={event => {
									event.preventDefault();
									window.open(docuemntUrl + document[1]);
								}}
							>
								<SVGIcons variant="viewDocument" color="white" />
								<Typography variant="text" color="white">
									{document[0]}
								</Typography>
							</StyledButton>
						);
					})}
				</StyledFlex>
			)}
		</StyledFlex>
	);
}
