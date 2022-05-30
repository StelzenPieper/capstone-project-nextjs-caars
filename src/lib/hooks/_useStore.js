import create from 'zustand';

const _useStore = create(set => ({
	CarProfileState: false,
	toggleCarProfile: () => set(state => ({ CarProfileState: !state.CarProfileState })),
	AddCarImageState: false,
	toggleAddCarImage: () => set(state => ({ AddCarImageState: !state.AddCarImageState })),
}));

export default _useStore;
