import React, { useState } from 'react';
import StyledForm from './AddCarForm.styled';
import { Button } from '../Button.styled';
import useStore from '../../hooks/useStore';

export default function AddCarForm() {
	const fetchVehicleData = useStore(state => state.fetchVehicleData);
	const [vinValue, setVinValue] = useState();

	return (
		<StyledForm
			onSubmit={event => {
				event.preventDefault();
				fetchVehicleData(
					`https://vindecodervehicle.com/api/v1/?id=caarsde&key=v9c7ah5xvc18vlztcvaj7cu7bs3e&vin=${vinValue}&getMoreData`
				);
			}}
		>
			<input
				required
				type="text"
				name="vin"
				placeholder="VIN eingeben..."
				data-testid="vin"
				minLength="17"
				onChange={event => {
					setVinValue(event.target.value);
				}}
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
