import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Pages/Home';
import UpdateForm from './Pages/UpdateForm';
import CreateForm from './Pages/CreateForm';
import View from './Pages/View';
function App() {
  return (
    <Router>
        <Routes>/blog/delete
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/createForm' element={<CreateForm></CreateForm>}></Route>
          <Route path='/blog/:id/updateFrom' element={<UpdateForm></UpdateForm>}></Route>
          <Route path='/blog/:id' element={<View></View>}></Route>
        </Routes>
    </Router>
    );
}

export default App;
