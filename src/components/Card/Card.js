import Typography from '../../../styles/Typography';
import SVGIcons from '../../assets/SVGIcon/SVGIcons';
import useStore from '../../lib/hooks/useStore';
import FavoriteCar from '../FavoriteCar/FavoriteCar';
import StyledButton from '../../../styles/StyledButton';
import StyledFlex from '../../../styles/StyledFlex';
import StyledCard from './StyledCard';
import _useStore from '../../lib/hooks/_useStore';

export default function Card({ data }) {
	const toggleDeleteState = useStore(state => state.toggleDeleteState);
	const setID = useStore(state => state.setID);
	const id = useStore(state => state.id);
	const setVehicleName = useStore(state => state.setVehicleName);
	const toggleCarProfile = _useStore(state => state.toggleCarProfile);
	const sortedVehicles = data.sort((a, b) => b.favorite - a.favorite);

	return (
		<>
			{sortedVehicles.map(vehicle => {
				return (
					<StyledFlex
						key={vehicle.caarsId}
						width="80%"
						height="200px"
						borderRadius="8px"
						boxShadow="var(--box-shadow)"
						gap="5px"
						cursor="pointer"
					>
						<StyledCard
							padding="10px"
							cursor="pointer"
							onClick={event => {
								event.preventDefault();
								setID(vehicle.caarsId);
								toggleCarProfile(id);
								console.log(id);
							}}
						>
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
						</StyledCard>
						<FavoriteCar caarsId={vehicle.caarsId} />
						<StyledButton
							caarsId={vehicle.caarsId}
							variant="favorite"
							position="absolute"
							bottom="0px"
							left="0px"
							zIndex="10"
							type="button"
							onClick={event => {
								event.preventDefault();
								setID(vehicle.caarsId);
								setVehicleName(vehicle.vehicleModelSeriesName);
								toggleDeleteState();
								console.log(vehicle.caarsId);
							}}
						>
							<SVGIcons variant="trash" size="20px" color="red" />
						</StyledButton>
					</StyledFlex>
				);
			})}
		</>
	);
}
