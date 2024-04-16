import { Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import Index from './pages/Index';
import Dashboard from './pages/Dashboard';
import MyWebsite from './pages/MyWebsite';
import PROJECT_PRO from './components/project_pro';
import ProAbout from './pages/ProAbout';
import ProContact from './pages/ProContact';
import ProHome from './pages/ProHome';

function App() {

  return (
    <>
        <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/projects' element={<PROJECT_PRO/>}></Route>
        <Route path='/mywebsite/:id' element={<MyWebsite/>}></Route>
        <Route path='/proHome/:id' element={<ProHome/>}></Route>
        <Route path='/proAbout/:id' element={<ProAbout/>}></Route>
        <Route path='/proContact/:id' element={<ProContact/>}></Route>
    </Routes>
    </>
  )
}

export default App
