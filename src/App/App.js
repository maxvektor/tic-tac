import { useCallback, useState } from 'react';
import './App.css';
import testIds from './testIs';
import { Players } from '../Players/Players';
import { PlayingField }  from "../PlayingField/PlayingField";

function App() {
  const [p1Name, setP1Name] = useState('');
  const [p2Name, setP2Name] = useState('');
  const [isGameStarted, setGameStarted] = useState(false);

  const onInput1Change = useCallback((e) => {
    setP1Name(e.target.value)
  }, [])

  const onInput2Change = useCallback((e) => {
    setP2Name(e.target.value)
  }, [])

  return (
    <div className="App">
      <h1 data-testid={testIds.titleId}>Tik-tak</h1>
      <Players
        p1Name={p1Name}
        p2Name={p2Name}
        setP1Name={onInput1Change}
        setP2Name={onInput2Change}
        isGameStarted={isGameStarted}
        setGameStarted={setGameStarted}
      />
      <PlayingField isGameStarted={isGameStarted}/>
    </div >
  );
}

export default App;
