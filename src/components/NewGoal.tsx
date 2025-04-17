import {useRef, type FormEvent} from "react";

interface NewGoalProps {
  onAddGoal: (goal: string, summary: string) => void;
}

export default function NewGoal({onAddGoal}: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleAddGoal(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    event.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  }
  return (
    <form onSubmit={handleAddGoal}>
      <p>
        <label htmlFor="title">Goal</label>
        <input type="text" id="title" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">summary</label>
        <input type="text" id="summary" ref={summary} />
      </p>
      <button>Add Goal</button>
    </form>
  );
}
