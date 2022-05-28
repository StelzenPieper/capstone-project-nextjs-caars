import StyledFlex from '../../../styles/StyledFlex';
import Card from '../Card/Card';
import CarFilter from '../CarFilter/CarFilter';

export default function CardGrid() {
	return (
		<>
			<CarFilter />
			<StyledFlex margin="4vh 10px 12vh 10px" gap="40px" alignItems="center">
				<Card />
			</StyledFlex>
		</>
	);
}
