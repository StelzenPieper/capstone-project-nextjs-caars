import styled from 'styled-components';

const StyledHeader = styled.header`
	width: 100%;
	height: 8vh;
	padding: 0.5rem 0.5rem;
	background-color: white;
	/* offset-x | offset-y | blur-radius | spread-radius | color */
	box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
	display: flex;
	flex: 1;
	align-self: flex-start;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
`;

export default StyledHeader;
