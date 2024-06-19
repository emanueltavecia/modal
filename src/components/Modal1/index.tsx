import { useState } from 'react';
import { useRender } from '../../context/RenderContext';
import { Container, Modal } from './styles';

export const Modal1 = ({id}: {id: string}) => {
    const [modalID, setModalID] = useState<string>();
    const { remove, clear, add } = useRender();

    return (
        <Modal>
            <Container>
                <div>Modal 1 {id}</div>

                <input type="text" value={modalID} onChange={(e) => setModalID(e.target.value)} placeholder='Digite um ID para o novo modal' />

                <div>
                    <button onClick={() => remove(`modal1-${id}`)}>Fechar último</button>
                    <button onClick={clear}>Fechar todos</button>
                    <button onClick={() => add(`modal1-${modalID}`)} disabled={!modalID}>Adicionar modal</button>
                </div>
            </Container>
        </Modal>
    );
};
