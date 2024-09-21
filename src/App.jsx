import SideBar from "./components/sidebar/SideBar"
import './App.css';
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  
  return (
    <div className="h-screen p-2 ">
      <div className="flex w-full h-full gap-5">
        <SideBar />
        <Dashboard />
      </div>
    </div>
  )
}

export default App
