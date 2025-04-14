import AppRouter from "./router/AppRouter";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/dpk-site">
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
