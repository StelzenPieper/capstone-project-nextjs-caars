import styled from 'styled-components';

const StyledFlex = styled.div`
	margin: ${({ margin = '0px' }) => margin};
	padding: ${({ padding = '0px' }) => padding};
	width: ${({ width = 'auto' }) => width};
	height: ${({ height = '100%' }) => height};
	border: ${({ border = 'none' }) => border};
	border-radius: ${({ borderRadius = '0px' }) => borderRadius};

	background: ${({ background = 'var(--primary-background)' }) => background};
	background-image: ${({ backgroundImage = '' }) => backgroundImage};
	background-size: ${({ backgroundSize = '' }) => backgroundSize};
	background-repeat: ${({ backgroundRepeat = '' }) => backgroundRepeat};
	background-position: ${({ backgroundPosition = '' }) => backgroundPosition};

	opacity: ${({ opacity = '' }) => opacity};
	box-shadow: ${({ boxShadow = 'none' }) => boxShadow};

	display: flex;
	flex-direction: ${({ flexDirection = 'column' }) => flexDirection};
	justify-content: ${({ justifyContent = 'flext-start' }) => justifyContent};
	align-items: ${({ alignItems = 'flext-start' }) => alignItems};
	align-self: ${({ alignSelf = '' }) => alignSelf};
	gap: ${({ gap = '0px' }) => gap};
	flex-wrap: ${({ flexWrap = 'nowrap' }) => flexWrap};
	flex: ${({ flex = '' }) => flex};

	position: ${({ position = 'relative' }) => position};

	left: ${({ left = '' }) => left};
	right: ${({ right = '' }) => right};
	top: ${({ top = '' }) => top};
	bottom: ${({ bottom = '' }) => bottom};

	z-index: ${({ zIndex = '' }) => zIndex};

	object-fit: ${({ objectFit = '' }) => objectFit};
	overflow: ${({ overflow = '' }) => overflow};

	cursor: ${({ cursor = '' }) => cursor};
`;

export default StyledFlex;
