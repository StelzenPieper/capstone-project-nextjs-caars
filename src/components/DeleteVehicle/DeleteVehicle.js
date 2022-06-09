import StyledDeleteVehicle from '../UI/DeleteVehicle/StyledDeleteVehicle';
import useStore from '../../lib/hooks/useStore';
import SVGIcon from '../../assets/SVGIcon/SVGIcons';
import StyledButton from '../../../styles/StyledButton';
import Typography from '../../../styles/Typography';
import StyledDeleteVehicleButtonRow from '../UI/DeleteVehicle/StyledDeleteVehicleButtonRow';

export default function DeleteVehicle() {
	const deleteVehicle = useStore(state => state.deleteVehicle);
	const id = useStore(state => state.id);
	const vehicleName = useStore(state => state.vehicleName);
	const toggleDeleteState = useStore(state => state.toggleDeleteState);

	return (
		<StyledDeleteVehicle>
			<Typography variant="h4" textAlign="center">
				Willst du dein Fahrzeug{' '}
				<Typography variant="h4" textAlign="center" color="red">
					{vehicleName}
				</Typography>{' '}
				wirklich löschen?
			</Typography>
			<StyledDeleteVehicleButtonRow>
				<StyledButton
					variant="favorite"
					type="button"
					onClick={event => {
						event.preventDefault();
						deleteVehicle(id);
						toggleDeleteState();
					}}
				>
					<SVGIcon variant="trash" size="20px" color="red" />
				</StyledButton>
				<StyledButton variant="favorite" type="button" onClick={() => toggleDeleteState()}>
					<SVGIcon variant="xBox" size="20px" />
				</StyledButton>
			</StyledDeleteVehicleButtonRow>
		</StyledDeleteVehicle>
	);
}
