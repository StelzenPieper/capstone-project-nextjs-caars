import { StyledCheckBoxLabel } from './/StyledCheckBoxLabel';
import { StyledCheckBox } from './StyledCheckBox';
// import StyledDiv from '../../../styles/StyledDiv';
import useStore from '../../lib/hooks/useStore';
import StyledDiv from '../../../styles/StyledDiv';

export default function CarFilter({ checkState }) {
	const toggleFilter = useStore(state => state.toggleFilter);

	return (
		<StyledDiv margin="2vh 0 0 0 ">
			<StyledDiv position="relative">
				<StyledCheckBox
					checked={checkState}
					id="checkbox"
					type="checkbox"
					onChange={() => {
						toggleFilter();
					}}
				/>
				<StyledCheckBoxLabel htmlFor="checkbox" />
			</StyledDiv>
		</StyledDiv>
	);
}
