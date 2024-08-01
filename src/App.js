import './App.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';

import { PageHome, PageSeries, PageMovies, PageNotFound } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageHome />} />
        <Route path='/series' element={<PageSeries />} />
        <Route path='/movies' element={<PageMovies />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;
