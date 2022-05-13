import { useState } from 'react';
import StyledButtons from '../styles/Buttons.styled';
import Modal from '../src/components/Modal/Modal';

export default function Home() {
	const [show, setShow] = useState(false);

	return (
		<>
			<StyledButtons variant="addCarButton" onClick={() => setShow(true)}>
				+
			</StyledButtons>
			<Modal show={show} onClose={() => setShow(false)} />
		</>
	);
}
