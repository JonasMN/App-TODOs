import React from "react";
import { TodoProvider } from './components/TodoContext/'
import { AppUI } from './components/AppUI'
//import './App.css';


function App() {
  return (
    <TodoProvider>
      <AppUI/>
      </TodoProvider>
  );

}
export default App;
