import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import CoursePreview from './pages/CoursePreview'

function App() {

  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />

      },

      {
        path: "/course",
        element: <Courses />
      },

      {
        path: "/course-details/:id",
        element: <CourseDetails />
      },

      {
        path: "course-preview/:id",
        element: <CoursePreview />
      }
    ]
  )



  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App