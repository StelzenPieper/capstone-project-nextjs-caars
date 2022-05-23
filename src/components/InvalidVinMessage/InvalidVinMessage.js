import InvalidVinMessage from './StyledInvalidVinMessage';
import Typography from '../../../styles/Typography';
import useStore from '../../lib/hooks/useStore';

export default function DisplayInvalidVinMessage() {
	const displayVinError = useStore(state => state.displayVinError);

	if (displayVinError) {
		return (
			<InvalidVinMessage>
				<Typography variant="h4" color="white" textAlign="center">
					VIN Eingabe inkorrekt! Bitte überprüfe deine VIN und probiere es erneut.
				</Typography>
			</InvalidVinMessage>
		);
	} else {
		return null;
	}
}
