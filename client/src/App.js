import { RouterProvider, createBrowserRouter, useRouteError } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Login from './components/login/Login';
import SignUp from './components/signUp/Signup';
import DashBoard from './components/dashBoard/DashBoard';
import MainLayOut from './components/mainlayout/MainLayOut';

function App() {
  function ErrorPage() {
    const error = useRouteError();
  
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
  }
  const router = createBrowserRouter([
    {
      path:'/',
      element: <MainLayOut />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },{
          path:'/login',
          element: <Login/>
        },{
          path: '/signup',
          element: <SignUp/>
        },{
          path: '/dashboard',
          element: <DashBoard/>
        }]
    }
  ])
  return (
    <div className="App">
      <header className="App-header">
      <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
