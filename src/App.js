import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ShowDetails from './components/ShowDetails';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/crypto/:cryptoSymb" exactly element={<ShowDetails />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
