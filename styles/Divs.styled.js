import styled from 'styled-components';

export default function StyledDivs({ children, variant, component, ...rest }) {
	switch (variant) {
		case 'userImgLogoSmall':
			return (
				<UserImgLogo {...rest} as={component}>
					{children}
				</UserImgLogo>
			);
		case 'modal':
			return (
				<Modal {...rest} as={component}>
					{children}
				</Modal>
			);
		case 'modalContent':
			return (
				<ModalContent {...rest} as={component}>
					{children}
				</ModalContent>
			);
		case 'modalHeader':
			return (
				<ModalHeader {...rest} as={component}>
					{children}
				</ModalHeader>
			);
		case 'modalFooter':
			return (
				<ModalFooter {...rest} as={component}>
					{children}
				</ModalFooter>
			);
		case 'modalBody':
			return (
				<ModalBody {...rest} as={component}>
					{children}
				</ModalBody>
			);
	}
}

const UserImgLogo = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	border: 2px solid hsl(264, 100%, 50%);
	background-color: grey;
	margin-right: 2rem;
	display: flex;
	cursor: pointer;
	position: relative;
	object-fit: cover;
	overflow: hidden;
`;
const Modal = styled.div`
	margin: 20px;
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const ModalContent = styled.div`
	width: 90%;
	background-color: white;
	border-radius: 8px;
	box-shadow: 0px 8px 15px rgba(108, 122, 137);
`;
const ModalHeader = styled.div`
	margin: 40px 0 0 0;
	text-align: center;
`;
const ModalFooter = styled.div`
	margin: 0 0 40px 0;
	display: flex;
	justify-content: center;
`;
const ModalBody = styled.div``;
