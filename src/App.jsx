import "./App.css";
import { GlobalStyle } from "./styles/globalStyles";
import {
  Quotes,
  Hero,
  PhoneModel,
  Design,
  Display,
  Processor,
  Battery,
  Colors,
  Camera,
  Pricing,
} from "./components";
import { ColorContextProvider } from "./context";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Quotes />
      <PhoneModel />
      <Hero />
      <Design />
      <Display />
      <Processor />
      <Battery />
      <ColorContextProvider>
        <Colors />
        <Camera />
        <Pricing />
      </ColorContextProvider>
    </div>
  );
}

export default App;
