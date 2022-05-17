import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
	persist(
		set => ({
			myVehicles: [],
			fetchVehicleData: async vinValue => {
				const url = `https://vindecodervehicle.com/api/v1/?id=caarsde&key=v9c7ah5xvc18vlztcvaj7cu7bs3e&vin=${vinValue}&getMoreData`;
				try {
					const response = await fetch(url);
					const data = await response.json();
					set(state => {
						return { myVehicles: [...state.myVehicles, { ...data, vinValue }] };
					});
					console.log(data, `vinValue: ${vinValue}`);
				} catch (error) {
					console.error(`Ooops we had an error: ${error}`);
					alert(
						'Wir konnten zu deiner VIN leider keine Daten finden. Bitte überpürfe deine Eingabe und verusche dein Fahrzeug erneut hinzuzufügen.'
					);
				}
			},
		}),
		{ name: 'caars' }
	)
);

export default useStore;
