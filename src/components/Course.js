import React from 'react';  
import Topic1 from './Topic-1';
import Topic2 from './Topic-2';
import Header from './Header';
import Support from './Support';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


class Course extends React.Component {
  render() {
    return (
      <Router>
        <section className='course'>
          <Header toggleSupportVisibility={this.toggleSupportVisibility}/>
          <Routes>
            <Route exact path='/' element={<Topic1 />}/>
            <Route exact path='/topic1' element={<Topic1 />}/>
            <Route exact path='/topic2' element={<Topic2 />}/>
          </Routes>
          <section className='courseExtras'>
            <Support />
          </section>
        </section>
      </Router>
    );
  }
}

export default Course;
