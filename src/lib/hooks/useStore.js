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
								{
									...data,
									vinValue,
									caarsId: nanoid(),
									favorite: false,
									images: [],
								},
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
			deleteVehicle: caarsId => {
				set(state => {
					return {
						myVehicles: state.myVehicles.filter(vehicle => vehicle.caarsId !== caarsId),
					};
				});
			},
			filterState: false,
			toggleFilter: () => {
				set(state => ({ filterState: !state.filterState }));
			},

			addCarImage: (caarsId, previewImage) => {
				set(state => ({
					myVehicles: state.myVehicles.map(vehicle =>
						vehicle.caarsId === caarsId
							? { ...vehicle, images: [...vehicle.images, previewImage.public_id] }
							: vehicle
					),
				}));
			},

			/*
			addCarImage: (caarsId, previewImage) => {
				set(state => ({
					myVehicles: state.myVehicles.map(vehicle =>
						vehicle.caarsId === caarsId
							? { ...vehicle, images: [...[images], previewImage.public_id] }
							: vehicle
					),
				}));
			},
			*/
		}),
		{ name: 'caars' }
	)
);

export default useStore;
