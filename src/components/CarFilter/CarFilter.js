import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from './StyledCarFilter';
import StyledDiv from '../../../styles/StyledDiv';
import useStore from '../../lib/hooks/useStore';

export default function CarFilter() {
	const toggleFilter = useStore(state => state.toggleFilter);
	// const filterState = useStore(state => state.filterState);
	const myVehicles = useStore(state => state.myVehicles);

	return (
		<StyledDiv margin="2vh 0 0 0 ">
			<CheckBoxWrapper>
				<CheckBox
					id="checkbox"
					type="checkbox"
					onClick={() => {
						toggleFilter(myVehicles);
						console.log(myVehicles);
					}}
				/>
				<CheckBoxLabel htmlFor="checkbox" />
			</CheckBoxWrapper>
		</StyledDiv>
	);
}
