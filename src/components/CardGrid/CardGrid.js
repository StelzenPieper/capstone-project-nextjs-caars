import StyledFlex from '../../../styles/StyledFlex';
import useStore from '../../lib/hooks/useStore';
import Card from '../Card/Card';
import CarFilter from '../CarFilter/CarFilter';

export default function CardGrid() {
	const filterState = useStore(state => state.filterState);
	const myVehicles = useStore(state => state.myVehicles);
	const myFavoriteVehicles = myVehicles.filter(vehicle => vehicle.favorite === true);

	return (
		<>
			{myVehicles.length > 0 && <CarFilter checkState={filterState} />}
			<StyledFlex margin="4vh 10px 12vh 10px" gap="40px" alignItems="center">
				{filterState ? <Card data={myFavoriteVehicles} /> : <Card data={myVehicles} />}
			</StyledFlex>
		</>
	);
}
