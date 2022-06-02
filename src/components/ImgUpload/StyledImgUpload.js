import styled from 'styled-components';

const StyledImgUpload = styled.form`
	margin-top: 15px;
	text-align: center;
	color: var(--primary-color);
	z-index: 101;
`;

export { StyledImgUpload };

const StyledInput = styled.input`
	display: none;
	position: fixed;
	top: -100%;
	left: -100vw;
`;

export { StyledInput };
