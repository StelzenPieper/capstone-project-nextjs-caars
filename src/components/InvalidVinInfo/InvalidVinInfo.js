import InvalidVinInfo from './StyledInvalidVinInfo';
import Typography from '../../../styles/Typography';
import useStore from '../../hooks/useStore';

export default function InvalidVinMessage() {
	const vinFound = useStore(state => state.vinFound);

	if (vinFound === false) {
		return (
			<InvalidVinInfo>
				<Typography variant="h4" color="white" textAlign="center">
					VIN Eingabe inkorrekt! Bitte überprüfe deine VIN und probiere es erneut.
				</Typography>
			</InvalidVinInfo>
		);
	} else {
		return null;
	}
}
