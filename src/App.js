
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
        <Route path='/Loginpage' element={<LoginPage/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/EmployeeTable' element={<EmployeeTable/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
