import React, { useState } from 'react';
import StyledForm from './AddCarForm.styled';
import StyledButtons from '../../../styles/Buttons.styled';
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
				id="vinInput"
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
			<StyledButtons variant="standardButton" type="submit">
				Fahrzeug hinzufügen
			</StyledButtons>
		</StyledForm>
	);
}
