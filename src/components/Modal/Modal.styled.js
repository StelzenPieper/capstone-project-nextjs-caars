import styled from 'styled-components';

export const Modal = styled.div`
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

export const ModalContent = styled.div`
	width: 90%;
	background-color: white;
	border-radius: 8px;
	box-shadow: 0px 8px 15px rgba(108, 122, 137);
`;

export const ModalHeader = styled.div`
	margin: 40px 0 0 0;
	text-align: center;
`;

export const ModalFooter = styled.div`
	margin: 0 0 40px 0;
	display: flex;
	justify-content: center;
`;

export const ModalTitle = styled.h4`
	font-weight: 300;
`;

export const ModalBody = styled.div``;

export const ModalButton = styled.button`
	border: none;
	border-radius: 8px;
	padding: 5px;
`;
