import { BrowserRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
import './App.css';
import PhoneBox from './components/PhoneBox';
import FormAdd from './components/FormAdd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<PhoneBox />} />
          <Route path="/add" element={<FormAdd />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </Router>
    </>
  )
}

function NoMatch() {
  return (
    <div className='nomatch'>
      <h2>Nothing to see here!</h2>
      <h1>
        <FontAwesomeIcon icon={faArrowDown} />
      </h1>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
