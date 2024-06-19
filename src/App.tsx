import './App.css';
import { useRender } from './context/RenderContext';

function App() {
  const { add } = useRender();

  return (
    <div className="App">
      <button onClick={() => add('modal1-')}>Abrir modal 1</button>
      <button onClick={() => add('modal2')}>Abrir modal 2</button>
    </div>
  );
}

export default App;
