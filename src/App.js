import './App.css';
import TaskList from './components/TaskList';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
<main className='flex flex-col justify-center   mt-10 ' >
  <TaskList />
  <ToastContainer />
</main>
  );
}

export default App;
