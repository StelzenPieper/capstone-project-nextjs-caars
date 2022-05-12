import React from 'react';
import { render, screen } from '@testing-library/react';
import AddCarForm from './AddCarForm';

describe('AddCarForm', () => {
	it("renders an input form to add a new car to the user's profile", () => {
		render(<AddCarForm />);

		const input = screen.getByTestId('vin');

		expect(input).toHaveAttribute('placeholder', 'VIN eingeben...');
		expect(input).toHaveAttribute('required');
	});
});
