import './App.css';
import { Data } from './components/Data';
import Slider from './components/Slider';

function App() {
  return (
    <Slider images={Data} />
  );
}

export default App;
