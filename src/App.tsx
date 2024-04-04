import { useState } from 'react';
import AddTask from './AddTask';
import DisplayTask from './DisplayTask';
import useLocalStorage from './Hooks/useLocalStorage';

function App() {
  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useLocalStorage("ITEMS", [])
  return (
    <div className="App">
      <AddTask task={task} taskList={taskList} setTask={setTask} setTaskList={setTaskList} />
      <DisplayTask taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
