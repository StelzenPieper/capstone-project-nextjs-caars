import styled from 'styled-components';

const StyledCardWrapper = styled.div`
	width: 80%;
	height: auto;
	background: var(--primary-backround);
	border-radius: 8px;
	box-shadow: var(--box-shadow);
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	flex-wrap: nowrap;
	gap: 5px;
	position: relative;
	cursor: pointer;
`;

export default StyledCardWrapper;
