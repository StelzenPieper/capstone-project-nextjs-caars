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
			color: ${({ color = 'var(--primary-color)' }) => color};
			background: ${({ background = 'var(--transparent)' }) => background};
			border: ${({ border = '2px solid var(--primary-color)' }) => border};
			&:hover {
				color: ${({ color = 'var(--secondary-color)' }) => color};
				background: ${({ background = 'var(--transparent)' }) => background};
				border-color: ${({ borderColor = 'var(--secondary-color)' }) => borderColor};
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
			margin: ${({ margin = '0px' }) => margin};
			color: var(--primary-color);
			background: var(--transparent);
			border: none;

			position: ${({ position = 'relative' }) => position};
			left: ${({ left = '' }) => left};
			right: ${({ right = '' }) => right};
			top: ${({ top = '' }) => top};
			bottom: ${({ bottom = '' }) => bottom};

			z-index: ${({ zIndex = '' }) => zIndex};
		`}

		${({ variant }) =>
		variant === 'card' &&
		css`
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
		`}

  &:disabled {
		color: ${({ color = 'var(--secondary-color)' }) => color};
		background: ${({ background = 'var(--transparent)' }) => background};
		border-color: ${({ borderColor = 'var(--secondary-color)' }) => borderColor};
		cursor: not-allowed;
	}
`;

export default StyledButton;
