import { useState } from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom'; // Import useRoutes
import Navbar from './components/Navbar.jsx';
import ReadPost from './pages/ReadPost.jsx'; // Import components for each route
import UpdatePost from './pages/UpdatePost.jsx';
import CreatePost from './pages/CreatePost.jsx';
import SinglePost from './pages/SinglePost.jsx';
import Home from './pages/Home.jsx'


function App() {
  const [count, setCount] = useState(0)

  let router = useRoutes([
    
    {
      path: "/",
      element:<ReadPost/>
    },
    {
      path:"/post/:id",
      element: <SinglePost/>
    },
    {
      path:"/update/:id",
      element: <UpdatePost/>
    },
    {
      path:"/new",
      element: <CreatePost />
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
