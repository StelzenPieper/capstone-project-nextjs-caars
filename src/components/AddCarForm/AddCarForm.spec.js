import { render, screen } from '@testing-library/jest-dom';
import AddCarForm from './AddCarForm';

describe('AddCarForm', () => {
	it("is renders an input form to add a new car to the user's profile", () => {
		render(<AddCarForm />);

		const input = screen.getByTestId('vin');

		expect(input).toHaveAttribute('placeholder', 'VIN eingeben...');
	});
});
