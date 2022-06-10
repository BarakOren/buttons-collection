import './App.css';
import TwoLines from './buttons/two-lines/two-lines';
import FromTop from './buttons/from-top/from-top';
import SpinningLines from './buttons/spinning-lines/spinning-lines';

function App() {
  return (
    <div className="App">
      <h1>Game Of Buttons</h1>
      <div className="row">
        <TwoLines />
        <FromTop />
        <SpinningLines />
      </div>
    </div>
  );
}

export default App;
