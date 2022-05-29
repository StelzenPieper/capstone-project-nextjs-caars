import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from './StyledCarFilter';
import StyledDiv from '../../../styles/StyledDiv';
import useStore from '../../lib/hooks/useStore';

export default function CarFilter({ checkState }) {
	const toggleFilter = useStore(state => state.toggleFilter);

	return (
		<StyledDiv margin="2vh 0 0 0 ">
			<CheckBoxWrapper>
				<CheckBox
					checked={checkState}
					id="checkbox"
					type="checkbox"
					onClick={() => {
						toggleFilter();
					}}
				/>
				<CheckBoxLabel htmlFor="checkbox" />
			</CheckBoxWrapper>
		</StyledDiv>
	);
}
