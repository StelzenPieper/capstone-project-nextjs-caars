import styled from 'styled-components';

const StyledInvalidVinMessage = styled.div`
	margin: 10px 20% 0 20%;
	align-self: center;
	height: auto;
	position: fixed;
	top: 6.4vh;
	z-index: 102;
	background: var(--warning-background);
	padding: 15px 20px 10px 20px;
	border-radius: var(--border-radius);
	animation-name: slidein;
	animation-duration: 1.5s;
	transition: 0.5s ease-in-out;

	@keyframes slidein {
		0% {
			transform: translateY(-100px);
		}
		100% {
			transform: translateY(0px);
		}
	}
`;

export default StyledInvalidVinMessage;
