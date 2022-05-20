import dynamic from 'next/dynamic';

export default function Home() {
	//delete on mongoDB integration, only used for persist/localStorage (dynamic import with NO SSR form next.js docu --> https://nextjs.org/docs/advanced-features/dynamic-import)
	const CardGrid = dynamic(() => import('../src/components/CardGrid/CardGrid'), {
		ssr: false, // This line important.
	});
	const Modal = dynamic(() => import('../src/components/Modal/Modal'), {
		ssr: false, // This line important.
	});

	const InvalidVinInfo = dynamic(
		() => import('../src/components/InvalidVinInfo/InvalidVinInfo'),
		{
			ssr: false, // This line important.
		}
	);

	return (
		<>
			<InvalidVinInfo />
			<Modal />
			<CardGrid />
		</>
	);
}
