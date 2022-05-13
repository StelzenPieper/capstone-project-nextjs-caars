import React from 'react';
import { Button, AddButton } from './Buttons.styled';

const config = {
	title: 'Components/Buttons',
	component: Button,
};

export default config;

export function Primary() {
	return <Button>Click Me</Button>;
}

export function Secondary() {
	return <AddButton>+</AddButton>;
}
