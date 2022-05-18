import create from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

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
						return {
							myVehicles: [
								...state.myVehicles,
								{ ...data, vinValue, caarsId: nanoid() },
							],
						};
					});
					console.log(data);
				} catch (error) {
					console.error('Something went wrong: ${error}');
				}
			},
		}),
		{ name: 'caars' }
	)
);

export default useStore;
