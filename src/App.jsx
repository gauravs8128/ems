import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import TaskListNumbers from "./components/Others/TaskListNumbers.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { GetLocalStorage, SetLocalStorage } from "./utils/LocalStorage.jsx";

const App = () => {

  // useEffect (()=>{
  //   SetLocalStorage();
  //   GetLocalStorage();
  // },[])

  const [State , setState] = React.useState() ;
  return (
    <>
      <Login />
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
}

export default App;