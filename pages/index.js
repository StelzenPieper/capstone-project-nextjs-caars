import { useState } from 'react';
import { AddButton } from '../src/components/Button.styled';
import Modal from '../src/components/Modal/Modal';

export default function Home() {
	const [show, setShow] = useState(false);

	return (
		<>
			<h1>caars</h1>
			<AddButton onClick={() => setShow(true)}>+</AddButton>
			<Modal show={show} onClose={() => setShow(false)} />
		</>
	);
}
