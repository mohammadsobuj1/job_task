import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MovieDetailes from './Components/MovieDetailes/MovieDetailes';
import LayOut from './Components/LayOut/LayOut';



const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    loader: () => fetch('https://api.tvmaze.com/search/shows?q=all'),
   
  },
  {
    path: "detalie/:id",
    element: <MovieDetailes />,
    loader: ({ params }) => fetch(`https://api.tvmaze.com/shows/${params.id}`)
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
