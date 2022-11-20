import { useState } from "react"
import Header from './components/header'
import Tasks from './components/Tasks'


function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctor Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meting at School',
            day: 'Feb 6th at 2:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 9th at 2:30pm',
            reminder: false,
        },
    ]
)

  return (
    <div className="container">
      <Header />
      <Tasks tasks = {tasks} />
    </div>
  )
}

export default App