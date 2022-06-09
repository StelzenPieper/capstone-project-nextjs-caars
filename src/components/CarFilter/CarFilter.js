import { StyledCheckBoxLabel } from '../UI/CarFilter/StyledCheckBoxLabel';
import { StyledCheckBox } from '../UI/CarFilter/StyledCheckBox';
// import StyledDiv from '../../../styles/StyledDiv';
import useStore from '../../lib/hooks/useStore';
import StyledFilterWrapper from '../UI/CarFilter/StyledFilterWrapper';

export default function CarFilter({ checkState }) {
	const toggleFilter = useStore(state => state.toggleFilter);

	return (
		<StyledFilterWrapper>
			<StyledCheckBox
				checked={checkState}
				id="checkbox"
				type="checkbox"
				onChange={() => {
					toggleFilter();
				}}
			/>
			<StyledCheckBoxLabel htmlFor="checkbox" />
		</StyledFilterWrapper>
	);
}
