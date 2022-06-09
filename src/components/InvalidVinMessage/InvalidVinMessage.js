import StyledInvalidVinMessage from '../UI/InvalidVinMessage/StyledInvalidVinMessage';
import Typography from '../../../styles/Typography';
import useStore from '../../lib/hooks/useStore';

export default function InvalidVinMessage() {
	const vinValidity = useStore(state => state.vinValidity);
	if (!vinValidity) {
		return (
			<StyledInvalidVinMessage>
				<Typography variant="h4" color="white" textAlign="center">
					VIN Eingabe inkorrekt! Bitte überprüfe deine VIN und probiere es erneut.
				</Typography>
			</StyledInvalidVinMessage>
		);
	}
}
