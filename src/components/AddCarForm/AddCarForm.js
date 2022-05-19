import React, { useState } from 'react';
import StyledForm from './AddCarForm.styled';
import StyledButton from '../../../styles/StyledButton';
import useStore from '../../hooks/useStore';

export default function AddCarForm() {
	const fetchVehicleData = useStore(state => state.fetchVehicleData);
	const vinFound = useStore(state => state.vinFound);

	const [vinValue, setVinValue] = useState();

	return (
		<StyledForm
			onSubmit={event => {
				event.preventDefault();
				fetchVehicleData(vinValue);
			}}
		>
			<input
				required
				autoFocus
				type="text"
				name="vin"
				placeholder="VIN eingeben..."
				data-testid="vin"
				minLength="17"
				onChange={event => {
					setVinValue(event.target.value);
				}}
			/>
			{!vinFound && <p>check deine Eingabe!</p>}
			<StyledButton variant="standardButton" type="submit">
				Fahrzeug hinzufügen
			</StyledButton>
		</StyledForm>
	);
}
