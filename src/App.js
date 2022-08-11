



import { HashRouter , Routes, Route } from 'react-router-dom';

import Specm from './pages/specm';

import SearchPage from './pages/searchpage';


const App = () => {
  

  return (
    <HashRouter>

      <Routes>
        <Route path="/" element={<SearchPage />} exact />
        <Route path="/:Title" element = {<Specm />} />
      </Routes>
    </HashRouter>
    
  );
};

export default App;