import StyledFlex from '../../../styles/StyledFlex';
import StyledDiv from '../../../styles/StyledDiv';
import Typography from '../../../styles/Typography';
import SVGIcon from '../../assets/SVGIcon/SVGIcons';
import useStore from '../../lib/hooks/useStore';
import FavoriteCar from '../FavoriteCar/FavoriteCar';
import StyledButton from '../../../styles/StyledButton';

export default function CardGrid() {
	const myVehicles = useStore(state => state.myVehicles);
	return (
		<StyledFlex margin="4vh 10px 12vh 10px" gap="40px" alignItems="center">
			{myVehicles.map(vehicle => {
				return (
					<StyledButton key={vehicle.carId} type="button" variant="card">
						<StyledFlex
							width="80%"
							height="200px"
							padding="10px"
							borderRadius="8px"
							boxShadow="var(--box-shadow)"
							gap="5px"
						>
							<FavoriteCar caarsId={vehicle.caarsId} />
							<Typography variant="h4" textDecoration="underline">
								{vehicle.vehicleModelSeriesName}
							</Typography>
							<StyledDiv height="10px" position="absolute" bottom="10px" left="10px">
								<SVGIcon variant="trash" size="20px" color="red" />
							</StyledDiv>
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
					</StyledButton>
				);
			})}
		</StyledFlex>
	);
}
