import styled from 'styled-components';

const StyledCard = styled.a`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: relative;
	padding: ${({ padding = '0px' }) => padding};
	width: ${({ width = 'auto' }) => width};
	height: ${({ height = '100%' }) => height};
	border: none;
	border-radius: ${({ borderRadius = '0px' }) => borderRadius};
	box-shadow: ${({ boxShadow = 'none' }) => boxShadow};
	cursor: ${({ cursor = 'none' }) => cursor};
`;

export default StyledCard;
