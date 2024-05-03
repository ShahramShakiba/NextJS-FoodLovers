'use server';
import { saveMeal } from './meals';
import { redirect } from 'next/navigation';

function isInvalidText(text) {
  return !text || text.trim() === '';
}

//a fn that's execute on the server | Server-Action
export async function shareMeal(formData) {
  //get input-field "name"
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !email.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    throw new Error('Invalid input!');
  }

  await saveMeal(meal);

  redirect('/meals');
}

/* --------------- shareMeal | server-action ------------
- NextJS behind the scenes create a request and send it to this NextJS server that's serving the website so this fn "shareMeal" triggered and then you can handle the form submission there but on the server

- automatically receive that "formData" that was submitted, the data that was gathered by the inputs in the form
*/
