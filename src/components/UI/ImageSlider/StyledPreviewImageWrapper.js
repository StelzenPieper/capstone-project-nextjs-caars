import styled from 'styled-components';

const StyledPreviewIamgeWrapper = styled.div`
	height: 40vh;
	width: 100%;
	background-image: ${({ backgroundImage = '' }) => backgroundImage};
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
`;

export default StyledPreviewIamgeWrapper;
