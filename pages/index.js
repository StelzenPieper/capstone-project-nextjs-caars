import dynamic from 'next/dynamic';
import useStore from '../src/lib/hooks/useStore';

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

	const DeleteVehicle = dynamic(() => import('../src/components/DeleteVehicle/DeleteVehicle'), {
		ssr: false, // This line important.
	});
	const deleteState = useStore(state => state.deleteState);

	return (
		<>
			{!deleteState && <DeleteVehicle />}
			<InvalidVinMessage />
			<AddCarModal />
			<CardGrid />
		</>
	);
}
