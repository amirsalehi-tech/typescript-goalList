import CourseGoal from "./components/CourseGoal";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import {useState} from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
export interface CourseGoal {
  id: number;
  title: string;
  description: string;
}
export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: goal,
      description: summary,
    };
    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    console.log(`goal with id ${id} removed!`);
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{src: goalsImg, alt: "goals"}}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteCourse={handleDeleteGoal} />
    </main>
  );
}
