
import './App.css';

import View from './Components/View';
import AllUsers from './Components/AllUsers';
import Bar from './Components/Bar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import EditUser from './Components/EditUser';
import AddUser from './Components/AddUser';
function App() {
  return (
    <>

    <Bar/>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<View/>}/>
   <Route path="/AllUsers" element ={<AllUsers/>}/>
    <Route path="/AllAdd" element={<AddUser/>}/>
    <Route path="/EditUser" element={<EditUser/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;



// import Bar from '../src/Components/Bar'

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AllUsers from './Components/AllUsers';
// import AddUser from './Components/AddUser';
// import EditUser from './Components/EditUser';

// function App() {
//   return (
//     <BrowserRouter>
//       <Bar/>
//       <Routes>
//         <Route path="/all" element={<AllUsers/>} />
//         <Route path="/add" element={<AddUser/>} />
//         <Route path="/edit/:id" element={<EditUser/> }/>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;