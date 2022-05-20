import styled from 'styled-components';

const InvalidVinInfo = styled.div`
	margin: 10px 20px 0 20px;
	height: 100px;
	position: fixed;
	top: 50px;
	z-index: 102;
	background: red;
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

export default InvalidVinInfo;
