import StyledInvalidVinMessage from '../InvalidVinMessage/StyledInvalidVinMessage';
import Typography from '../../../styles/Typography';

export default function InvalidVinMessage() {
	return (
		<StyledInvalidVinMessage>
			<Typography variant="h4" color="white" textAlign="center">
				VIN Eingabe inkorrekt! Bitte überprüfe deine VIN und probiere es erneut.
			</Typography>
		</StyledInvalidVinMessage>
	);
}
