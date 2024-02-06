
import { Route, Routes } from 'react-router-dom';
import './App.css';
import EmployeeTable from './Components/EmployeeTable';
import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/Frontend-emmanual' element={<Home/>}></Route>
        <Route path='/Frontend-emmanual/Loginpage' element={<LoginPage/>}></Route>
        <Route path='/Frontend-emmanual/SignUp' element={<SignUp/>}></Route>
        <Route path='/Frontend-emmanual/EmployeeTable' element={<EmployeeTable/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
