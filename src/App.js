



import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Specm from './pages/specm';

import SearchPage from './pages/searchpage';


const App = () => {
  

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<SearchPage />} exact />
        <Route path="/:Title" element = {<Specm />} />
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;