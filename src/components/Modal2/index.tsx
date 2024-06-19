import { useState } from 'react';
import { useRender } from '../../context/RenderContext';
import { Container, Modal } from './styles';

export const Modal2 = () => {
    const { remove } = useRender();
    const [value, setValue] = useState(0);

    return (
        <Modal>
            <Container>
                <div>Modal 2 - Value: {value}</div>
                <button onClick={() => setValue(value + 1)}>Aumentar</button>
                <button onClick={() => setValue(value - 1)}>Diminuir</button>
                <button onClick={() => remove('modal2')}>Fechar</button>
            </Container>
        </Modal>
    );
};
