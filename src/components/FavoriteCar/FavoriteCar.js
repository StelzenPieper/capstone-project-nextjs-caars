import StyledButton from '../../../styles/StyledButton';
import SVGIcons from '../../assets/SVGIcon/SVGIcons';
import useStore from '../../hooks/useStore';

export default function FavoriteCar({ caarsId }) {
	const toggleFavoriteCar = useStore(state => state.toggleFavoriteCar);
	const myVehicles = useStore(state => state.myVehicles);
	const favoriteCar = myVehicles.find(element => element.caarsId === caarsId).favorite;

	return (
		<StyledButton
			variant="favorite"
			onClick={event => {
				event.preventDefault();
				toggleFavoriteCar(caarsId);
				console.log(favoriteCar);
			}}
		>
			{favoriteCar ? (
				<SVGIcons variant="favorite" size="20px" />
			) : (
				<SVGIcons variant="favorite" size="20px" color="lightgrey" />
			)}
		</StyledButton>
	);
}
