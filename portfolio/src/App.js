import logo from './logo.svg';
import './App.scss';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Route>
      <Route path='/' element={<Layout />} />
    </Route>
    </>
  )
}

export default App;
