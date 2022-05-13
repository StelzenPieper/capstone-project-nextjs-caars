import React from 'react';
import { render, screen } from '@testing-library/react';
import AddCarForm from './AddCarForm';

describe('AddCarForm', () => {
	it("renders an input form to add a new car to the user's profile", () => {
		render(<AddCarForm />);

		const inputVin = screen.getByTestId('vin');
		const inputLicensplate = screen.getByTestId('licensplate');
		const inputRegisterdate = screen.getByTestId('registerdate');

		expect(inputVin).toHaveAttribute('placeholder', 'VIN eingeben...');
		expect(inputVin).toHaveAttribute('required');

		expect(inputLicensplate).toHaveAttribute('placeholder', 'Kennzeichen eingeben...');

		expect(inputRegisterdate).toHaveAttribute('required');
	});
});
