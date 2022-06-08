import dynamic from 'next/dynamic';
import useStore from '../src/lib/hooks/useStore';
import _useStore from '../src/lib/hooks/_useStore';

export default function Home() {
	//delete on mongoDB integration, only used for persist/localStorage (dynamic import with NO SSR form next.js docu --> https://nextjs.org/docs/advanced-features/dynamic-import)
	const CardGrid = dynamic(() => import('../src/components/CardGrid/CardGrid'), {
		ssr: false, // This line important.
	});
	const AddCarModal = dynamic(() => import('../src/components/Modals/AddCarModal'), {
		ssr: false, // This line important.
	});
	const InvalidVinMessage = dynamic(
		() => import('../src/components/InvalidVinMessage/InvalidVinMessage'),
		{
			ssr: false, // This line important.
		}
	);

	const CarProfile = dynamic(() => import('../src/components/CarProfile/CarProfile'), {
		ssr: false, // This line important.
	});

	const CarProfileState = _useStore(state => state.CarProfileState);

	const DeleteVehicle = dynamic(() => import('../src/components/DeleteVehicle/DeleteVehicle'), {
		ssr: false, // This line important.
	});

	const deleteState = useStore(state => state.deleteState);

	const ImgUpload = dynamic(() => import('../src/components/ImgUpload/ImgUpload'), {
		ssr: false, // This line important.
	});
	const AddCarImageState = _useStore(state => state.AddCarImageState);

	const FileUpload = dynamic(() => import('../src/components/FileUpload/FileUpload'), {
		ssr: false, // This line important.
	});
	const AddDocumentState = _useStore(state => state.AddDocumentState);

	const UserProfile = dynamic(() => import('../src/components/UserProfile/UserProfile'), {
		ssr: false, // This line important.
	});

	const userProfileState = _useStore(state => state.userProfileState);

	return (
		<>
			{deleteState && <DeleteVehicle />}
			<InvalidVinMessage />
			<AddCarModal />
			{userProfileState && <UserProfile />}
			{!CarProfileState && <CardGrid />}
			{CarProfileState && <CarProfile />}
			{AddCarImageState && <ImgUpload />}
			{AddDocumentState && <FileUpload />}
		</>
	);
}
