import {
	Modal,
	ModalBody,
	ModalButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from './Modal.styled';
import AddCarForm from '../AddCarForm/AddCarForm';

function AddCarModal(props) {
	if (!props.show) {
		return null;
	}
	return (
		<Modal onClick={props.onClose}>
			<ModalContent onClick={event => event.stopPropagation()}>
				<ModalHeader>
					<ModalTitle>Fahrzeug hinzufügen</ModalTitle>
				</ModalHeader>
				<ModalBody>
					<AddCarForm />
				</ModalBody>
				<ModalFooter>
					<ModalButton type="button" onClick={props.onClose}>
						abbrechen
					</ModalButton>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}

export default AddCarModal;
