import AddCarForm from '../AddCarForm/AddCarForm';
import StyledDivs from '../../../styles/Divs.styled';
import Typography from '../../../styles/Typography';
import StyledButtons from '../../../styles/Buttons.styled';

function AddCarModal(props) {
	if (!props.show) {
		return null;
	}
	return (
		<StyledDivs variant="modal" onClick={props.onClose}>
			<StyledDivs variant="modalContent" onClick={event => event.stopPropagation()}>
				<StyledDivs variant="modalHeader">
					<Typography variant="h4">Fahrzeug hinzufügen</Typography>
				</StyledDivs>
				<StyledDivs variant="modalBody">
					<AddCarForm />
				</StyledDivs>
				<StyledDivs variant="modalFooter">
					<StyledButtons variant="modalButton" type="button" onClick={props.onClose}>
						abbrechen
					</StyledButtons>
				</StyledDivs>
			</StyledDivs>
		</StyledDivs>
	);
}

export default AddCarModal;
