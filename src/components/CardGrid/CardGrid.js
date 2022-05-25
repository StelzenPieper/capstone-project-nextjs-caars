import StyledButton from '../../../styles/StyledButton';
import StyledFlex from '../../../styles/StyledFlex';
import Typography from '../../../styles/Typography';
import SVGIcons from '../../assets/SVGIcon/SVGIcons';
import useStore from '../../lib/hooks/useStore';
import FavoriteCar from '../FavoriteCar/FavoriteCar';

export default function CardGrid() {
	const myVehicles = useStore(state => state.myVehicles);
	const toggleDeleteState = useStore(state => state.toggleDeleteState);
	const setID = useStore(state => state.setID);

	return (
		<StyledFlex margin="4vh 10px 12vh 10px" gap="40px" alignItems="center">
			{myVehicles.map(vehicle => {
				return (
					<StyledFlex
						key={vehicle.caarsId}
						width="80%"
						height="200px"
						padding="10px"
						borderRadius="8px"
						boxShadow="var(--box-shadow)"
						gap="5px"
					>
						<FavoriteCar caarsId={vehicle.caarsId} />
						<StyledButton
							caarsId={vehicle.caarsId}
							variant="favorite"
							position="absolute"
							bottom="5px"
							left="5px"
							type="button"
							onClick={event => {
								event.preventDefault;
								setID(vehicle.caarsId);
								toggleDeleteState();
								console.log(vehicle.caarsId);
							}}
						>
							<SVGIcons variant="trash" size="20px" color="red" />
						</StyledButton>
						<Typography variant="h4" textDecoration="underline">
							{vehicle.vehicleModelSeriesName}
						</Typography>
						<div>
							<Typography variant="default">VIN: {vehicle.vinValue}</Typography>
							<Typography variant="default">
								Kraftstoff: {vehicle.engineType}
							</Typography>
							<Typography variant="default">
								Leistung: {vehicle.kiloWattsTo} kW ({vehicle.horsePowerFrom} PS)
							</Typography>
						</div>
					</StyledFlex>
				);
			})}
		</StyledFlex>
	);
}
