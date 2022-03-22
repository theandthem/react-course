import Topic1 from './components/Topic-1';
import Topic2 from './components/Topic-2';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function Course() {
  return (
    <Router>
      <section className='course'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Topic1/>}/>
          <Route exact path='/topic1' element={<Topic1/>}/>
          <Route exact path='/topic2' element={<Topic2/>}/>
        </Routes>
      </section>
    </Router>
  );
}

export default Course;
