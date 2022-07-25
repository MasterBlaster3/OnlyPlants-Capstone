import { createRoot} from 'react-dom/client';
import './index.css';
import { OnlyPlants } from './components/OnlyPlants';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <OnlyPlants />
  </BrowserRouter>
);


