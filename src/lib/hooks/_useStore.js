import create from 'zustand';

const _useStore = create(set => ({
	CarProfileState: false,
	toggleCarProfile: () => set(state => ({ CarProfileState: !state.CarProfileState })),
	AddCarImageState: false,
	toggleAddCarImage: () => set(state => ({ AddCarImageState: !state.AddCarImageState })),
	AddDocumentState: false,
	toggleAddDocument: () => set(state => ({ AddDocumentState: !state.AddDocumentState })),
	userProfileState: false,
	toggleUserProfileState: () => set(state => ({ userProfileState: !state.userProfileState })),
}));

export default _useStore;
