import create from 'zustand';

const useStore = create(set => ({
	vehicleData: {},
	fetchVehicleData: async url => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			set({ vehicleData: data });
		} catch (error) {
			console.error('Something went wrong: ${error');
		}
	},
}));

export default useStore;
