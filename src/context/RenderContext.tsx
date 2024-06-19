import { ReactNode, createContext, useContext, useState } from 'react';
import { Modal1 } from '../components/Modal1';
import { Modal2 } from '../components/Modal2';

type RenderContextType = {
    elements: string[];
    add: (id: string) => void;
    remove: (id: string) => void;
    clear: () => void;
};

const RenderContext = createContext<RenderContextType | undefined>(undefined);

export const RenderProvider = ({ children }: { children: ReactNode }) => {
    const [elements, setElements] = useState<string[]>([]);

    const add = (id: string) => setElements([...elements, id]);
    const remove = (id: string) => setElements(elements.filter(e => e !== id));
    const clear = () => setElements([]);

    return (
        <RenderContext.Provider value={{ elements, add, remove, clear }}>
            {children}
            {elements.map((id, index) => {
                if (id.split('-')[0] === 'modal1')
                    return <Modal1 key={index} id={id.split('-')[1]} />;
                if (id === 'modal2') return <Modal2 key={index} />;
                return null;
            })}
        </RenderContext.Provider>
    );
};

export const useRender = () => {
    const context = useContext(RenderContext);
    if (!context) {
        throw new Error('useRender must be used within a RenderProvider');
    }
    return context;
};
