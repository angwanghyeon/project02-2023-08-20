import logo from './logo.svg';
import './App.css';
import Header from './realmain/sections/Header';
import Main from './realmain/sections/Main';
import Footer from './realmain/sections/Footer';
import { Link, Route, Routes } from 'react-router-dom';
import './reset.css'

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
