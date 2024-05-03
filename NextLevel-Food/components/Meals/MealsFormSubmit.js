'use client';
import { useFormStatus } from 'react-dom';

export default function MealsFormSubmit() {
  //conditionally update the button
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Share Meal'}
    </button>
  );
}
