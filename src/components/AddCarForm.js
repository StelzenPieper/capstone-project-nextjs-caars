import Form from './AddCarForm.styled';

export default function AddCarForm() {
	return (
		<Form>
			<input required type="text" name="vin" placeholder="VIN eingeben..." />
			<input type="text" name="kennzeichen" placeholder="Kennzeichen eingeben..." />
			<input required type="date" name="" placeholder="Datum der Erstzulassung" />
			<button type="submit">Fahrzeug hinzufügen</button>
		</Form>
	);
}
