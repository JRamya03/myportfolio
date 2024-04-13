
// import { Store } from '../src/component/Store/Store';
import './App.css';
import { Routing } from './component/Routing';
// import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      {/* <Provider store={Store}> */}
          <Routing/>
      {/* </Provider> */}
    </div>
  );
}

export default App;
