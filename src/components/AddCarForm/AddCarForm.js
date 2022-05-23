import React, { useEffect, useState } from 'react';
import StyledForm from './AddCarForm.styled';
import StyledButton from '../../../styles/StyledButton';
import useStore from '../../lib/hooks/useStore';

export default function AddCarForm() {
	const fetchVehicleData = useStore(state => state.fetchVehicleData);
	const toggleModalState = useStore(state => state.toggleModalState);
	const vinValidity = useStore(state => state.vinValidity);
	const toggleVinValidity = useStore(state => state.toggleVinValidity);

	const [vinValue, setVinValue] = useState();

	useEffect(() => {
		if (vinValidity) {
			toggleModalState();
			toggleVinValidity();
		}
	});

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
