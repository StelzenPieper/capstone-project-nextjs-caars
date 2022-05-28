import Typography from '../../../styles/Typography';
import SVGIcons from '../../assets/SVGIcon/SVGIcons';
import useStore from '../../lib/hooks/useStore';
import FavoriteCar from '../FavoriteCar/FavoriteCar';
import StyledButton from '../../../styles/StyledButton';
import StyledFlex from '../../../styles/StyledFlex';
import StyledCard from './StyledCard';

export default function Card() {
	const myVehicles = useStore(state => state.myVehicles);
	const toggleDeleteState = useStore(state => state.toggleDeleteState);
	const setID = useStore(state => state.setID);
	const setVehicleName = useStore(state => state.setVehicleName);

	return (
		<>
			{myVehicles.map(vehicle => {
				return (
					<StyledCard
						key={vehicle.caarsId}
						width="80%"
						height="200px"
						padding="10px"
						borderRadius="8px"
						boxShadow="var(--box-shadow)"
						gap="5px"
						cursor="pointer"
					>
						<FavoriteCar caarsId={vehicle.caarsId} />
						<StyledFlex flexDirection="row" flexWrap="wrap" width="80%">
							<Typography variant="h4" textDecoration="underline">
								{vehicle.vehicleModelSeriesName}
							</Typography>
						</StyledFlex>
						<StyledFlex background="var(--transparent)" alignItems="flex-start">
							<Typography variant="text" padding="3px">
								VIN: {vehicle.vinValue}
							</Typography>
							<Typography variant="text" padding="3px">
								Kraftstoff: {vehicle.engineType}
							</Typography>
							<Typography variant="text" padding="3px" margin="0 0 30px 0">
								Leistung: {vehicle.kiloWattsTo} kW ({vehicle.horsePowerFrom} PS)
							</Typography>
						</StyledFlex>
						<StyledButton
							caarsId={vehicle.caarsId}
							variant="favorite"
							position="absolute"
							bottom="0px"
							left="0px"
							zIndex="10"
							type="button"
							onClick={event => {
								event.preventDefault;
								setID(vehicle.caarsId);
								setVehicleName(vehicle.vehicleModelSeriesName);
								toggleDeleteState();
								console.log(vehicle.caarsId);
							}}
						>
							<SVGIcons variant="trash" size="20px" color="red" />
						</StyledButton>
					</StyledCard>
				);
			})}
		</>
	);
}