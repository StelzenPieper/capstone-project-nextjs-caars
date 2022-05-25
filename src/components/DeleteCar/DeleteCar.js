import useStore from '../../lib/hooks/useStore';
import SVGIcon from '../../assets/SVGIcon/SVGIcons';
import StyledButton from '../../../styles/StyledButton';

export default function DeleteCar({ caarsId }) {
	const deleteVehicle = useStore(state => state.deleteVehicle);

	return (
		<StyledButton
			variant="favorite"
			position="absolute"
			bottom="5px"
			left="5px"
			type="button"
			onClick={() => {
				deleteVehicle(caarsId);
			}}
		>
			<SVGIcon variant="trash" size="20px" color="red" />
		</StyledButton>
	);
}
