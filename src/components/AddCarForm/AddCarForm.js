import React, { useState } from 'react';
import StyledForm from './AddCarForm.styled';
import StyledButton from '../../../styles/StyledButton';
import useStore from '../../lib/hooks/useStore';

export default function AddCarForm() {
	const fetchVehicleData = useStore(state => state.fetchVehicleData);

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
				value={vinValue}
				id="vinEingabe"
				type="text"
				name="vin"
				placeholder="VIN eingeben..."
				data-testid="vin"
				minLength="17"
				onChange={event => {
					setVinValue(event.target.value);
				}}
			/>
			<StyledButton variant="outlined" type="submit">
				Fahrzeug hinzufügen
			</StyledButton>
		</StyledForm>
	);
}
