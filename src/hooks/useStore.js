import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
	persist(
		set => ({
			myVehicles: [],
			vinError: [],
			fetchVehicleData: async vinValue => {
				const url = `https://vindecodervehicle.com/api/v1/?id=caarsde&key=v9c7ah5xvc18vlztcvaj7cu7bs3e&vin=${vinValue}&getMoreData`;
				try {
					const response = await fetch(url);
					const data = await response.json();
					set(state => {
						return { myVehicles: [...state.myVehicles, { ...data, vinValue }] };
					});

					/* vin Erro currently does not reset and only toggles on and off */
					set(state => ({ vinError: state.vinError }));
					console.log(data, `vinValue: ${vinValue}`);
				} catch (error) {
					console.error(`Ooops we had an error: ${error}`);
					/* vin Erro currently does not reset and only toggles on and off */
					set(state => ({ vinError: !state.vinError }));
				}
			},
		}),
		{ name: 'caars' }
	)
);

export default useStore;
