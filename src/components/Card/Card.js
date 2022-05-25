import StyledDiv from '../../../styles/StyledDiv';
import Typography from '../../../styles/Typography';
import SVGIcons from '../../assets/SVGIcon/SVGIcons';
import useStore from '../../lib/hooks/useStore';
import FavoriteCar from '../FavoriteCar/FavoriteCar';
import StyledButton from '../../../styles/StyledButton';
import StyledFlex from '../../../styles/StyledFlex';

export default function Card() {
	const myVehicles = useStore(state => state.myVehicles);

	return (
		<>
			{myVehicles.map(vehicle => {
				return (
					<StyledButton
						key={vehicle.caarsId}
						variant="card"
						type="button"
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
						<StyledDiv
							height="10px"
							position="absolute"
							bottom="10px"
							left="10px"
							background="var(--transparent)"
						>
							<SVGIcons variant="trash" size="20px" color="red" />
						</StyledDiv>
						<StyledFlex background="var(--transparent)" alignItems="flex-start">
							<Typography variant="text" padding="3px">
								VIN: {vehicle.vinValue}
							</Typography>
							<Typography variant="text" padding="3px">
								Kraftstoff: {vehicle.engineType}
							</Typography>
							<Typography variant="text" padding="3px">
								Leistung: {vehicle.kiloWattsTo} kW ({vehicle.horsePowerFrom} PS)
							</Typography>
						</StyledFlex>
					</StyledButton>
				);
			})}
		</>
	);
}
