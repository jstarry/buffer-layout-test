import './App.css';
import lo from 'buffer-layout';

function App() {
  const array = new Uint8Array(1);
  lo.u8().encode(255, array);
  
  return (
    <div className="App">
      {JSON.stringify(array)}
    </div>
  );
}

export default App;
