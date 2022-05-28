import AddCarForm from '../AddCarForm/AddCarForm';
import Typography from '../../../styles/Typography';
import StyledButton from '../../../styles/StyledButton';
import StyledFlex from '../../../styles/StyledFlex';
import useStore from '../../lib/hooks/useStore';

function AddCarModal() {
	const toggleModalState = useStore(state => state.toggleModalState);
	const modalState = useStore(state => state.modalState);
	const toggleVinValidity = useStore(state => state.toggleVinValidity);
	const vinValidity = useStore(state => state.vinValidity);

	if (modalState) {
		return (
			<StyledFlex
				justifyContent="center"
				alignItems="center"
				position="fixed"
				top="0"
				right="0"
				bottom="0"
				left="0"
				background="var(--transparent)"
				zIndex="100"
				onClick={() => {
					toggleModalState();
					if (!vinValidity) {
						toggleVinValidity();
					}
				}}
			>
				<StyledFlex
					width="85%"
					height="auto"
					margin="20px"
					borderRadius="8px"
					boxShadow="var(--box-shadow)"
					justifyContent="center"
					alignItems="center"
					onClick={event => event.stopPropagation()}
				>
					<StyledFlex margin="40px 0 0 0">
						<Typography textAlign="center" variant="h4">
							Fahrzeug hinzufügen
						</Typography>
					</StyledFlex>
					<StyledFlex>
						<AddCarForm />
					</StyledFlex>
					<StyledFlex margin="0 0 40px 0">
						<StyledButton variant="text" type="button" onClick={toggleModalState}>
							abbrechen
						</StyledButton>
					</StyledFlex>
				</StyledFlex>
			</StyledFlex>
		);
	} else {
		return null;
	}
}

export default AddCarModal;