import './App.css';
import MenuAppBar from "./Components/navbar";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboad from './Pages/Dashboad';
import Home from './Pages/Home';
import Testcase from './Pages/Testcase';
import DataPage from './Pages/DataPage';
import Locator from './Pages/Locator';
import Component from './Pages/Component';
import Settings from './Pages/Settings';
import Support from './Pages/Support';

 function App() {
  return (
  
    
   <>
  <MenuAppBar></MenuAppBar>
      <BrowserRouter>
    
      <Routes>
        <Route path="/dashboad" exact element={<Dashboad/>}></Route>
        <Route path='/home'exact element={<Home/>}/>
        <Route path='/testcase'exact element={<Testcase/>}></Route>
        <Route path='/data'exact element={<DataPage/>}></Route>
        <Route path='/component'exact element={<Component/>}></Route>
        <Route path='/locator'exact element={<Locator/>}></Route>
        <Route path='/settings'exact element={<Settings/>}></Route>
        <Route path='/support'exact element={<Support/>}></Route>
      </Routes>
       </BrowserRouter>
       </>
    
  
 
      

  );
}
 export default App;

