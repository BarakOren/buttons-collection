import './App.css';
import TwoLines from './buttons/two-lines/two-lines';
import FromTop from './buttons/from-top/from-top';
import SpinningLines from './buttons/spinning-lines/spinning-lines';
import ThreeDOne from './buttons/threeD/three-d-1';
import ThreeDTwo from "./buttons/threeD/three-d-2"
import ThreeDThree from "./buttons/threeD/three-d-3"
import GradientShadow from "./buttons/gradient-shadow/gradient-shadow-1"
import GradientShadowTwo from "./buttons/gradient-shadow/gradient-shadow-2"
import GradientShadowThree from "./buttons/gradient-shadow/gradient-shadow-3"
import BombOne from './buttons/bomb/bomb-1';
import BombTwo from './buttons/bomb/bomb-2';
import BombThree from './buttons/bomb/bomb-3';
import Invert from './buttons/invert/invert';
import Glow from './buttons/glow/glow';
import BorderBuildup from "./buttons/border-buildup/border-buildup"
import OpenUp from "./buttons/open-up/open-up"

function App() {
  return (
    <div className="App">
      <h1>Game Of Buttons</h1>
      <div className="row">
        <TwoLines />
        <FromTop />
        <SpinningLines />
      </div>
      <div className="row">
        <ThreeDOne/>
        <ThreeDTwo />
        <ThreeDThree />
      </div>
      <div className="row">    
        <GradientShadow/>
        <GradientShadowTwo />
        <GradientShadowThree />
      </div>
      <div className="row">
        <BombOne />
        <BombTwo />
        <BombThree />
      </div>
      <div className="row">
        <Invert />
        <Glow />
        <BorderBuildup />
      </div>
      <div className="row">
        <OpenUp />
      </div>
    </div>
  );
}

export default App;
