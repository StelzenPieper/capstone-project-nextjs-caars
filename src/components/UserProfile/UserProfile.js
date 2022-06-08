import StyledFlex from '../../../styles/StyledFlex';
import Typography from '../../../styles/Typography';

export default function UserProfile() {
	return (
		<StyledFlex
			margin="2vh 0 2vh 0"
			width="100%"
			height="100%"
			padding="0 0 12vh 0"
			justifyContent="flex-start"
			alignItems="flex-start"
			zIndex="100"
			overflow="hidden"
		>
			<StyledFlex
				margin="8vh 8vw 8vh 8vw"
				padding="0 20px 0 20px"
				justifyContent="space-evenly"
				alignItems="center"
			>
				<Typography variant="h4">Mein Profil:</Typography>
				<Typography variant="text">Vorname: Sebastian</Typography>
				<Typography variant="text">Nachname: Ottow</Typography>
				<Typography variant="text">Username: SebOne</Typography>
				<Typography variant="text">Gebudrtsdatum: 25.05.1985</Typography>
				<Typography variant="h4">Adresse:</Typography>
				<Typography variant="text">Bundesland: Bayern</Typography>
				<Typography variant="text">Straße & Hausnummer: Grainwinkel 8a</Typography>
				<Typography variant="text">Stadt: Icking</Typography>
				<Typography variant="text">Postleitzahl: 82057 </Typography>
			</StyledFlex>
		</StyledFlex>
	);
}
