import styled from 'styled-components';

const StyledHeader = styled.div`
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

	h1 {
		border: 1px solid hsl(264, 100%, 50%);
		padding: 0 1rem;
		color: hsl(264, 100%, 50%);
	}

	div {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		border: 2px solid hsl(264, 100%, 50%);
		background-color: grey;
		margin-right: 2rem;
		display: flex;
		cursor: pointer;
		position: relative;
		object-fit: cover;
		overflow: hidden;
	}
`;

export default StyledHeader;
