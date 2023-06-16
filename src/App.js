import React from "react";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Menu from "./components/Menu";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
 {
  path: "*",
  Component: Root,
  children: [
   {
    path: "addtask",
    element: <AddTask />,
   },
   {
    path: "tasklist",
    element: <TaskList />,
   },
  ],
 },
]);

const App = () => {
 return (
  <>
   <RouterProvider router={router} />
  </>
 );
};

function Root() {
 return (
  <>
   <Menu></Menu>
   <Container>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/addtask" element={<AddTask />} />
     <Route path="/tasklist" element={<TaskList />} />
    </Routes>
   </Container>
  </>
 );
}

const Home = ({ onTaskAdded, refreshKey }) => {
 return (
  <>
   <Container className="mt-4">
    <h1 className="text-center">Hello World</h1>
   </Container>
  </>
 );
};

export default App;
