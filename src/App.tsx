import Theme from "components/pattern/atoms/theme/Theme";
import Routes from "routes/Routes";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Theme>
        <Routes />
      </Theme>
    </BrowserRouter>
  );
}

export default App;
