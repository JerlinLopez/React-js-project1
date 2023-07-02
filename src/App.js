import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import India from './Components/India';
import Header from './Components/header'; 
import World from './Components/world';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <BrowserRouter>
          <Header />
           <Routes>
            <Route path = "/" element = { <India />} />
            <Route path = "/india" element = {<India />} />
            <Route path = "/world" element = {<World />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
