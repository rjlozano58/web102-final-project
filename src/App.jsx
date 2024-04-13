import { useState } from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom'; // Import useRoutes
import Navbar from './components/Navbar.jsx';
import ReadCrew from './pages/ReadCrew.jsx'; // Import components for each route
import UpdateCrew from './pages/UpdateCrew.jsx';
import CreateCrew from './pages/CreateCrew.jsx';
import Home from './pages/Home.jsx'


function App() {
  const [count, setCount] = useState(0)

  let router = useRoutes([
    {
      path: "/",
      element:<Home/>
    },
    {
      path: "/allCrew",
      element:<ReadCrew/>
    },
    {
      path:"/update/:id",
      element: <UpdateCrew />
    },
    {
      path:"/new",
      element: <CreateCrew />
    }
  ]);


  return (
    <>
      <Navbar/>
      {router}
    </>
    
  )
}

export default App
