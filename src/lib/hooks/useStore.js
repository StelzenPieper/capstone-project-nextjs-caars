import create from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useStore = create(
	persist(
		set => ({
			myVehicles: [],
			vinValidity: true,
			toggleVinValidity: () => {
				set(state => ({ vinValidity: !state.vinValidity }));
			},
			modalState: false,
			toggleModalState: () => {
				set(state => ({ modalState: !state.modalState }));
			},
			toggleFavoriteCar: caarsId => {
				set(state => ({
					myVehicles: state.myVehicles.map(vehicle =>
						vehicle.caarsId === caarsId
							? { ...vehicle, favorite: !vehicle.favorite }
							: vehicle
					),
				}));
			},
			fetchVehicleData: async vinValue => {
				const url = `https://vindecodervehicle.com/api/v1/?id=${process.env.VIN_API_ID}&key=${process.env.VIN_API_KEY}&vin=${vinValue}&getMoreData`;
				try {
					const response = await fetch(url);
					const data = await response.json();
					set(state => {
						return {
							myVehicles: [
								...state.myVehicles,
								{ ...data, vinValue, caarsId: nanoid(), favorite: false },
							],
						};
					});
					set({ vinValidity: true, modalState: false });
				} catch (error) {
					console.error(`Ooops we had an error: ${error}`);
					set({ vinValidity: false });
				}
			},
			id: [],
			setID: id => {
				set(() => {
					return { id: id };
				});
			},
			vehicleName: [],
			setVehicleName: vehicleName => {
				set(() => {
					return { vehicleName: vehicleName };
				});
			},
			toggleDeleteState: () => {
				set(state => ({ deleteState: !state.deleteState }));
			},
			//Delete Function für die Fahrzeugdaten
			deleteVehicle: caarsId => {
				set(state => {
					return {
						myVehicles: state.myVehicles.filter(vehicle => vehicle.caarsId !== caarsId),
					};
				});
			},
			// filterState: [],
			/* toggleFilter: () => {
				set(state => ({ filterState: !state.filterState }));
			}, */
			toggleFilter: favorite => {
				set(state => {
					return {
						myVehicles: state.myVehicles.map(vehicle => vehicle.favorite !== favorite),
					};
				});
			},

			/* caarsId => {
				set(state => ({
					myVehicles: state.myVehicles.filter(vehicle =>
						vehicle.caarsId === caarsId
							? { ...vehicle, favorite: !vehicle.favorite }
							: vehicle
					),
				}));
			},*/
		}),
		{ name: 'caars' }
	)
);

export default useStore;
