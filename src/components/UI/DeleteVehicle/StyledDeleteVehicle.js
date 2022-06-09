import styled from 'styled-components';

const StyledDeleteVehicle = styled.div`
	margin: 0 20% 10vh 20%;
	align-self: center;
	height: auto;
	position: fixed;
	bottom: 6.4vh;
	z-index: 102;
	background: var(--primary-background);
	padding: 15px 20px 10px 20px;
	border-radius: var(--border-radius);
	border: 5px solid red;
	animation-name: slidein;
	animation-duration: 0.5s;
	transition: 0.5s ease-in-out;

	@keyframes slidein {
		0% {
			transform: translateX(250px);
		}
		100% {
			transform: translateX(0px);
		}
	}
`;

export default StyledDeleteVehicle;
