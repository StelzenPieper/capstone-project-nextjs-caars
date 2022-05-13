import styled from 'styled-components';

const StyledNavBar = styled.nav`
	height: 8vh;
	width: 100%;
	background-color: white;
	/* offset-x | offset-y | blur-radius | spread-radius | color */
	box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-evenly;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 1000;
`;

export default StyledNavBar;
