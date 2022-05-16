import styled from 'styled-components';

export default function Button({ children, variant, component, ...rest }) {
	switch (variant) {
		case 'standardButton':
			return (
				<StandardButton {...rest} as={component}>
					{children}
				</StandardButton>
			);
		case 'logo':
			return (
				<StyledLogo {...rest} as={component}>
					{children}
				</StyledLogo>
			);
		case 'addCarButton':
			return (
				<AddCarButton {...rest} as={component}>
					{children}
				</AddCarButton>
			);
		case 'modalButton':
			return (
				<ModalButton {...rest} as={component}>
					{children}
				</ModalButton>
			);
		case 'navButton':
			return (
				<NavButton {...rest} as={component}>
					{children}
				</NavButton>
			);
	}
}
const StandardButton = styled.button`
	border: none;
	border-radius: 8px;
	padding: 5px;
`;
const StyledLogo = styled.a`
	font-size: 2rem;
	color: hsl(264, 100%, 50%);
	border: 1px solid hsl(264, 100%, 50%);
	padding: 0 1rem;
	background: ${({ background }) => background};
	cursor: pointer;
`;
const AddCarButton = styled.a`
	display: inline-block;
	width: 50px;
	height: 50px;
	border: 2px solid black;
	border-radius: 50%;
	font-size: 2rem;
	text-align: center;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	cursor: pointer;
`;
const ModalButton = styled.button`
	border: none;
	border-radius: 8px;
	padding: 5px;
`;
const NavButton = styled.a`
	align-self: center;
	color: hsl(264, 100%, 50%);
	text-decoration: none;
`;
