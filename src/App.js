import './App.css';
import Classes from './components/ClassComponent/Classes';
import Tech from './components/TeacherComponent/Tech';
import Student from './components/StudentComponent/Stutent';
import Home from './components/Home/Home';
import { Routes, Route } from "react-router-dom"



function App() {


  return (
    <div className="App">
      {/* <Tech/> */}
      {/* <Classes />
      <Student /> */}
      {/* <Home /> */}
      {/* <Home /> */}
      {/* <Classes/> */}
      {/* <Student/> */}
      {/* <Tech/> */}
      

      <Routes>
        <Route path='/' element={<Classes />} />
        <Route path='/student' element={<Student />} />
        <Route path='/teacher' element={<Tech />} />

      </Routes>





    </div>
  );
}

export default App; 
