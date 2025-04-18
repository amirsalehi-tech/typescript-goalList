import {ReactNode} from "react";
import {CourseGoal as CourseGoalType} from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox.tsx";
interface CourseGoalListProps {
  goals: CourseGoalType[];
  onDeleteCourse: (id: number) => void;
}
export default function CourseGoalList({
  goals,
  onDeleteCourse,
}: CourseGoalListProps) {
  if (goals.length === 0)
    return (
      <InfoBox mode="hint" severity="medium">
        No goals available.
      </InfoBox>
    );

  let warningBox: ReactNode;

  if (goals.length >= 4)
    warningBox = (
      <InfoBox mode="warning" severity="low">
        Warning: You have too many goals!
      </InfoBox>
    );
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
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
    </>
  );
}
