import StyledButton from '../../../styles/StyledButton';
import StyledFlex from '../../../styles/StyledFlex';
import Typography from '../../../styles/Typography';
import SVGIcons from '../../assets/SVGIcon/SVGIcons';
import useStore from '../../lib/hooks/useStore';
import _useStore from '../../lib/hooks/_useStore';

export default function CarProfile() {
	const toggleCarProfile = _useStore(state => state.toggleCarProfile);
	const CarProfileState = _useStore(state => state.CarProfileState);
	const id = useStore(state => state.id);

	return (
		<StyledFlex
			width="100%"
			height="100%"
			justifyContent="center"
			alignItems="center"
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
					console.log(CarProfileState);
				}}
			>
				<SVGIcons variant="xBox" size="20px" color="white" />
			</StyledButton>
			<Typography variant="h4" textDecoration="underline" color="white">
				{id.vehicleModelSeriesName}
			</Typography>
			<Typography variant="text" padding="3px">
				VIN: {id.vinValue}
			</Typography>
			<Typography variant="text" padding="3px">
				Kraftstoff: {id.engineType}
			</Typography>
			<Typography variant="text" padding="3px" margin="0 0 30px 0">
				Leistung: {id.kiloWattsTo} kW ({id.horsePowerFrom} PS)
			</Typography>
		</StyledFlex>
	);
}
