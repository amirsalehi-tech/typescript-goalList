import CourseGoal from "./components/CourseGoal";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
export default function App() {
  return (
    <main>
      <Header image={{src: goalsImg, alt: "goals"}}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title="Learn React">
        <p>Learn it from ground up</p>
      </CourseGoal>
    </main>
  );
}
