import StyledForm from './AddCarForm.styled';

export default function AddCarForm() {
	return (
		<StyledForm>
			<input
				required
				type="text"
				name="vin"
				placeholder="VIN eingeben..."
				data-testid="vin"
			/>
			<input type="text" name="kennzeichen" placeholder="Kennzeichen eingeben..." />
			<input required type="date" name="zulassungsdatum" placeholder="Z" />
			<button type="submit">Fahrzeug hinzufügen</button>
		</StyledForm>
	);
}
