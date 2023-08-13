import { RouterProvider, createBrowserRouter, useRouteError } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';

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
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
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
