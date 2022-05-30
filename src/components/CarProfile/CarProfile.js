import StyledButton from '../../../styles/StyledButton';
import StyledFlex from '../../../styles/StyledFlex';
import Typography from '../../../styles/Typography';
import SVGIcons from '../../assets/SVGIcon/SVGIcons';
import useStore from '../../lib/hooks/useStore';
import _useStore from '../../lib/hooks/_useStore';

export default function CarProfile() {
	const toggleCarProfile = _useStore(state => state.toggleCarProfile);
	const myVehicles = useStore(state => state.myVehicles);
	const id = useStore(state => state.id);
	const data = myVehicles.find(vehicle => vehicle.caarsId === id);
	const toggleAddCarImage = _useStore(state => state.toggleAddCarImage);

	return (
		<StyledFlex
			width="100%"
			height="100%"
			padding="11vh 8vw 11vh 8vw"
			justifyContent="flex-start"
			alignItems="flex-start"
			position="fixed"
			top="0"
			right="0"
			bottom="0"
			left="0"
			background="var(--secondary-background)"
			zIndex="100"
		>
			<StyledButton
				variant="favorite"
				position="absolute"
				top="10vh"
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
			<Typography variant="h4" textDecoration="underline" color="white">
				{data.vehicleModelSeriesName}
			</Typography>
			{/*
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
				<Image src={props.file.url} alt={props.file.url} layout="fill" objectFit="cover" />
			</StyledFlex>
			*/}
			<StyledFlex background="var(--transparent)" alignSelf="center" justifyContent="center">
				<StyledButton
					variant="outlined"
					color="var(--secondary-color)"
					border="2px solid var(--secondary-color)"
					type="button"
					onClick={event => {
						event.preventDefault();
						toggleAddCarImage();
					}}
				>
					Bild hinzufügen
				</StyledButton>
			</StyledFlex>
			<StyledFlex background="var(transparent)">
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
		</StyledFlex>
	);
}
