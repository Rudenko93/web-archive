import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { MainLayout } from "./layout"
import { Todo, FetchTodo, Sliders } from "./pages"
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "todo", element: <Todo /> },
      { path: "fetchtodo", element: <FetchTodo /> },
      { path: "sliders", element: <Sliders /> },
    ],
  },
])

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App"></div>
    </RouterProvider>
  )
}

export default App
