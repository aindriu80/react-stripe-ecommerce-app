import { Route, Routes } from 'react-router-dom';
import HomePage from './components/home-page';
import Shop from './components/pages/shop/shop';
import NotFound from './components/not-found';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
