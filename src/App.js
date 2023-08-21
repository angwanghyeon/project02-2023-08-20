import logo from './logo.svg';
import './App.css';
import Header from './sections/Header';
import Main from './sections/Main';
import Footer from './sections/Footer';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
        <Header></Header>
          <Main></Main>
          <Footer></Footer>
    </div>
  );
}

export default App;
