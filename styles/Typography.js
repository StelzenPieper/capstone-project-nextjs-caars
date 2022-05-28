import styled from 'styled-components';

export default function Typography({ children, variant, component, ...rest }) {
	switch (variant) {
		case 'h4':
			return (
				<StyledH4 {...rest} as={component}>
					{children}
				</StyledH4>
			);
		case 'text':
			return (
				<StyledText {...rest} as={component}>
					{children}
				</StyledText>
			);
		default:
			return (
				<StyledP {...rest} as={component}>
					{children}
				</StyledP>
			);
	}
}

const StyledH4 = styled.h4`
	margin: 0;
	font-size: 1.1rem;
	font-weight: 400;
	text-decoration: ${({ textDecoration = 'none' }) => textDecoration};
	color: ${({ color = 'black' }) => color};
	text-align: ${({ textAlign = '' }) => textAlign};
`;
const StyledText = styled.p`
	margin: ${({ margin = '0px' }) => margin};
	padding: ${({ padding = '0px' }) => padding};
	font-size: ${({ fontSize = '0.8rem' }) => fontSize};
	text-decoration: ${({ textDecoration = 'none' }) => textDecoration};
	color: ${({ color = 'black' }) => color};
	text-align: ${({ textAlign = '' }) => textAlign};
`;
const StyledP = styled.p`
	font-size: 1rem;
	font-weight: 300;
`;
