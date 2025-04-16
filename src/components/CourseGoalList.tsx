import {CourseGoal as CourseGoalType} from "../App";
import CourseGoal from "./CourseGoal";

interface CourseGoalListProps {
  goals: CourseGoalType[];
  onDeleteCourse: (id: number) => void;
}
export default function CourseGoalList({
  goals,
  onDeleteCourse,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li>
          <CourseGoal
            key={goal.id}
            title={goal.title}
            onDelete={onDeleteCourse}
            id={goal.id}
          >
            {goal.description}
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
