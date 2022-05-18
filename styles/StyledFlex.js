import styled from 'styled-components';

const StyledFlex = styled.div`
	margin: ${({ margin = '0px' }) => margin};
	padding: ${({ padding = '0px' }) => padding};
	width: ${({ width = 'auto' }) => width};
	height: ${({ height = '100%' }) => height};
	border: ${({ border = 'none' }) => border};
	border-radius: ${({ borderRadius = '0px' }) => borderRadius};
	background: ${({ background = 'var(--primary-background)' }) => background};
	box-shadow: ${({ boxShadow = 'none' }) => boxShadow};

	display: flex;
	flex-direction: ${({ flexDirection = 'column' }) => flexDirection};
	justify-content: ${({ justifyContent = 'flext-start' }) => justifyContent};
	align-items: ${({ alignItems = 'flext-start' }) => alignItems};
	gap: ${({ gap = '0px' }) => gap};

	position: ${({ position = 'relative' }) => position};

	left: ${({ left = '' }) => left};
	right: ${({ right = '' }) => right};
	top: ${({ top = '' }) => top};
	bottom: ${({ bottom = '' }) => bottom};

	object-fit: ${({ objectFit = '' }) => objectFit};
	overflow: ${({ overflow = '' }) => overflow};

	cursor: ${({ cursor = '' }) => cursor};
`;

export default StyledFlex;
