import useStore from '../../lib/hooks/useStore';
import Card from '../Card/Card';
import CarFilter from '../CarFilter/CarFilter';
import StyledCardGrid from '../UI/CardGrid/StyledCardGrid';

export default function CardGrid() {
	const filterState = useStore(state => state.filterState);
	const myVehicles = useStore(state => state.myVehicles);
	const myFavoriteVehicles = myVehicles.filter(vehicle => vehicle.favorite === true);

	return (
		<>
			{myVehicles.length > 0 && <CarFilter checkState={filterState} />}
			<StyledCardGrid
				margin="4vh 10px 12vh 10px"
				gap="40px"
				alignItems="center"
				background="transprent"
			>
				{filterState ? <Card data={myFavoriteVehicles} /> : <Card data={myVehicles} />}
			</StyledCardGrid>
		</>
	);
}
