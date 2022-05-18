import styled from 'styled-components';

const StyledFlex = styled.div`
	margin: ${({ margin = '0px' }) => margin};
	padding: ${({ padding = '0px' }) => padding};
	width: ${({ width = 'auto' }) => width};
	height: ${({ height = '100%' }) => height};
	border-radius: ${({ borderRadius = '0px' }) => borderRadius};
	background: ${({ background = 'var(--primary-background)' }) => background};
	box-shadow: ${({ boxShadow = 'none' }) => boxShadow};

	position: ${({ position = 'relative' }) => position};
	left: ${({ left = '' }) => left};
	right: ${({ right = '' }) => right};
	top: ${({ top = '' }) => top};
	bottom: ${({ bottom = '' }) => bottom};
`;

export default StyledFlex;
