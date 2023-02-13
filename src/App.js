import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { storeValue } from "./services/redux/store/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={storeValue}>
        <div className="App">
          <Router />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
