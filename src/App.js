import './App.css';
import { useRoutes } from 'react-router-dom';
import Exam_portal from './pages/exam_portal'
// import Welcome from './pages/welcome';
import Signup from './pages/signup';
import Login from './pages/login';
import Instruction from './pages/instruction';
import ProtectedRoute from './pages/protectedRoute';
function App() {

  const routes = useRoutes(
    [
      
      {
        path: '/', element: <Signup />
      },
      {
        path: '/login', element: <Login />
      },
      {
        path: '/instruction', element: <Instruction/>
      },
      { path:'/exam_portal', element:<ProtectedRoute page={ <Exam_portal/>} />
  },
     
    ]
  )
  return (
    <>
      {routes}
    </>
  );
}

export default App;
