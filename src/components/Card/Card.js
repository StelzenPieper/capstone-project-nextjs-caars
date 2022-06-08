import Typography from '../../../styles/Typography';
import SVGIcons from '../../assets/SVGIcon/SVGIcons';
import useStore from '../../lib/hooks/useStore';
import FavoriteCar from '../FavoriteCar/FavoriteCar';
import StyledButton from '../../../styles/StyledButton';
import StyledCard from '../UI/Card/StyledCard';
import _useStore from '../../lib/hooks/_useStore';
import ImageSlider from '../ImageSlider/ImageSlider';
import StyledCardWrapper from '../UI/Card/StyledCardWrapper';
import StyledCardHeaderWrapper from '../UI/Card/StyledCardHeaderWrapper';
import StyledCardContentWrapper from '../UI/Card/StyledCardContentWrapper';
import StyledImageWrapper from '../UI/Card/StyledImageWrapper';

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
					<StyledCardWrapper key={vehicle.caarsId}>
						<StyledCard
							onClick={event => {
								event.preventDefault();
								setID(vehicle.caarsId);
								toggleCarProfile(id);
							}}
						>
							<StyledCardHeaderWrapper>
								<Typography variant="h4" textDecoration="underline">
									{vehicle.vehicleModelSeriesName}
								</Typography>
							</StyledCardHeaderWrapper>
							<StyledCardContentWrapper>
								<Typography variant="text" padding="3px">
									VIN: {vehicle.vinValue}
								</Typography>
								<Typography variant="text" padding="3px">
									Kraftstoff: {vehicle.engineType}
								</Typography>
								<Typography variant="text" padding="3px">
									Leistung: {vehicle.kiloWattsTo} kW ({vehicle.horsePowerFrom} PS)
								</Typography>
							</StyledCardContentWrapper>
						</StyledCard>
						<StyledImageWrapper
							height="30vh"
							width="100%"
							borderRadius="0"
							objectFit="contain"
							overflow="hidden"
							cursor="pointer"
						>
							<ImageSlider data={vehicle} />
						</StyledImageWrapper>

						<FavoriteCar caarsId={vehicle.caarsId} />
						<StyledButton
							caarsId={vehicle.caarsId}
							variant="favorite"
							position="none"
							bottom="30vh"
							right="5px"
							zIndex="10"
							type="button"
							onClick={event => {
								event.preventDefault();
								setID(vehicle.caarsId);
								setVehicleName(vehicle.vehicleModelSeriesName);
								toggleDeleteState();
							}}
						>
							<SVGIcons variant="trash" size="20px" color="red" />
						</StyledButton>
					</StyledCardWrapper>
				);
			})}
		</>
	);
}
