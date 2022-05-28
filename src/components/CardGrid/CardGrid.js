import StyledFlex from '../../../styles/StyledFlex';
import Card from '../Card/Card';

export default function CardGrid() {
	return (
		<StyledFlex margin="4vh 10px 12vh 10px" gap="40px" alignItems="center">
			<Card />
		</StyledFlex>
	);
}
