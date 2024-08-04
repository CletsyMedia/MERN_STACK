import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './components/Layout';
import Updateprofile from './pages/UpdateProfile';
import PrivateRoute from './components/PrivateRoute';

// Create the router object
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} >
      <Route index path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='' element={<PrivateRoute />}>
      <Route path="/updateprofile" element={<Updateprofile />} />
      </Route>
      {/* {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/services" element={<Services />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
