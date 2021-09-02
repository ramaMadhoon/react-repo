import logo from "./logo.svg";
import "./App.css";
import * as UserCommponent from "./react-assignment";
import UserInfo from './post';
function App() {
  return (
    <div className="App">
      <UserCommponent.compo1 />

      <hr />

      <UserCommponent.compo2 />

      <hr />

      <UserCommponent.compo3 />

      <hr />
      <UserCommponent.compo4 />

      <hr />

      <UserCommponent.compo5 />

      <hr />
      <UserInfo />
    
     
    </div>
  );
}

export default App;
