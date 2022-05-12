import React, { useEffect } from 'react';
import StyledForm from './AddCarForm.styled';
import { Button } from '../Button.styled';
import useStore from '../useStore';

export default function AddCarForm() {
	const fetchVehicleData = useStore(state => state.fetchVehicleData);

	useEffect(() => {
		fetchVehicleData(
			'https://vindecodervehicle.com/api/v1/?id=caarsde&key=v9c7ah5xvc18vlztcvaj7cu7bs3e&vin=TMBJJ7NEOGO112922&getMoreData'
		);
	}, [fetchVehicleData]);

	return (
		<StyledForm>
			<input
				required
				type="text"
				name="vin"
				placeholder="VIN eingeben..."
				data-testid="vin"
			/>
			<input
				type="text"
				name="licensplate"
				placeholder="Kennzeichen eingeben..."
				data-testid="licensplate"
			/>
			<input required type="date" name="registerdate" data-testid="registerdate" />
			<Button type="submit">Fahrzeug hinzufügen</Button>
		</StyledForm>
	);
}
