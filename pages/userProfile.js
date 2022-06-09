import dynamic from 'next/dynamic';

export default function Home() {
	const UserProfile = dynamic(() => import('../src/components/UserProfile/UserProfile'), {
		ssr: false, // This line important.
	});

	return <UserProfile />;
}
