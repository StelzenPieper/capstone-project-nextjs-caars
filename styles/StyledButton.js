import styled, { css } from 'styled-components';

const StyledButton = styled.button`
	min-width: 60px;
	min-height: 30px;
	padding: 10px;
	border-radius: 8px;
	cursor: pointer;

	${({ variant = 'text' }) =>
		variant === 'text' &&
		css`
			color: var(--primary-color);
			background: var(--transparent);
			border: none;
		`}

	${({ variant }) =>
		variant === 'outlined' &&
		css`
			color: var(--primary-color);
			background: var(--transparent);
			border: 2px solid var(--primary-color);
			&:hover {
				color: var(--secondary-color);
				background: var(--primary-color);
				border-color: var(--secondary-color);
			}
		`}

    ${({ variant }) =>
		variant === 'contained' &&
		css`
			color: var(--secondary-color);
			background: var(--primary-color);
			border: 2px solid var(--secondary-color);
			&:hover {
				color: var(--primary-color);
				background: var(--transparent);
				border: 2px solid var(--primary-color);
			}
		`}

		${({ variant }) =>
		variant === 'logo' &&
		css`
			color: var(--primary-color);
			background: var(--transparent);
			border: none;
		`}

		${({ variant }) =>
		variant === 'favorite' &&
		css`
			color: var(--primary-color);
			background: var(--transparent);
			border: none;
			position: absolute;
			top: 5px;
			right: 5px;
		`}

  &:disabled {
		color: var(--tertiary-background);
		background: var(--secondary-background);
		cursor: not-allowed;
	}
`;

export default StyledButton;
