
import './App.css';
import Newtask from './component/Newtask.jsx'
import Nav from './component/Nav.jsx'
import Category from './component/Category.jsx'
import styled from "styled-components"

function App() {
  return (
    <section className="App">
      <div className='center-group'>
        <Nav />
        <Category />
        <Newtask />
      </div>
    </section>
  );
}

export default App;
