import StyledFlex from '../../../styles/StyledFlex';
import Typography from '../../../styles/Typography';
import useStore from '../../lib/hooks/useStore';
import FavoriteCar from '../FavoriteCar/FavoriteCar';
import DeleteCar from '../DeleteCar/DeleteCar';

export default function CardGrid() {
	const myVehicles = useStore(state => state.myVehicles);

	return (
		<StyledFlex margin="4vh 10px 12vh 10px" gap="40px" alignItems="center">
			{myVehicles.map(vehicle => {
				return (
					<StyledFlex
						key={vehicle.carId}
						width="80%"
						height="200px"
						padding="10px"
						borderRadius="8px"
						boxShadow="var(--box-shadow)"
						gap="5px"
					>
						<FavoriteCar caarsId={vehicle.caarsId} />
						<DeleteCar caarsId={vehicle.caarsId} />
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
