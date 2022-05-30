import create from 'zustand';

const _useStore = create(set => ({
	CarProfileState: false,
	toggleCarProfile: () => set(state => ({ CarProfileState: !state.CarProfileState })),
}));

export default _useStore;
