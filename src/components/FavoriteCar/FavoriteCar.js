import StyledButton from '../../../styles/StyledButton';
import SVGIcons from '../../assets/SVGIcon/SVGIcons';

export default function FavoriteCar(vehicle) {
	return (
		<StyledButton
			variant="favorite"
			onClick={event => {
				event.preventDefault();
				console.log(vehicle.caarsId);
			}}
		>
			<SVGIcons variant="favorite" size="20px" />
		</StyledButton>
	);
}
