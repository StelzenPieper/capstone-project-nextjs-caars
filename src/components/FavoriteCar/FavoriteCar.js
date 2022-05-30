import StyledButton from '../../../styles/StyledButton';
import SVGIcons from '../../assets/SVGIcon/SVGIcons';
import useStore from '../../lib/hooks/useStore';

export default function FavoriteCar({ caarsId }) {
	const toggleFavoriteCar = useStore(state => state.toggleFavoriteCar);
	const myVehicles = useStore(state => state.myVehicles);
	const favoriteCar = myVehicles.find(element => element.caarsId === caarsId).favorite;

	return (
		<StyledButton
			variant="favorite"
			position="absolute"
			top="5px"
			right="5px"
			zIndex="10"
			onClick={event => {
				event.preventDefault();
				toggleFavoriteCar(caarsId);
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
