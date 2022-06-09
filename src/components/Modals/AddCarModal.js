import AddCarForm from '../AddCarForm/AddCarForm';
import Typography from '../../../styles/Typography';
import StyledButton from '../../../styles/StyledButton';
import useStore from '../../lib/hooks/useStore';
import StyledAddCarModalWrapper from '../UI/Modals/StyledAddCarModalWrapper';
import StyledAddCarModalBox from '../UI/Modals/StyledAddCarModalBox';
import StyledAddCarModalHeader from '../UI/Modals/StyledAddCarModalHeader';
import StyledAddCarModalFormBox from '../UI/Modals/StyledAddCarModalFormBox';
import StyledAddCarModalFooter from '../UI/Modals/StyledAddCarModalFooter';

function AddCarModal() {
	const toggleModalState = useStore(state => state.toggleModalState);
	const modalState = useStore(state => state.modalState);
	const toggleVinValidity = useStore(state => state.toggleVinValidity);
	const vinValidity = useStore(state => state.vinValidity);

	if (modalState) {
		return (
			<StyledAddCarModalWrapper
				onClick={() => {
					toggleModalState();
					if (!vinValidity) {
						toggleVinValidity();
					}
				}}
			>
				<StyledAddCarModalBox onClick={event => event.stopPropagation()}>
					<StyledAddCarModalHeader>
						<Typography textAlign="center" variant="h4">
							Fahrzeug hinzufügen
						</Typography>
					</StyledAddCarModalHeader>
					<StyledAddCarModalFormBox>
						<AddCarForm />
					</StyledAddCarModalFormBox>
					<StyledAddCarModalFooter>
						<StyledButton variant="text" type="button" onClick={toggleModalState}>
							abbrechen
						</StyledButton>
					</StyledAddCarModalFooter>
				</StyledAddCarModalBox>
			</StyledAddCarModalWrapper>
		);
	} else {
		return null;
	}
}

export default AddCarModal;
