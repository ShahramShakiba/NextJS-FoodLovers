'use server';
import { saveMeal } from './meals';
import { redirect } from 'next/navigation';

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

  await saveMeal(meal);

  redirect('/meals');
}

/* --------------- shareMeal | server-action ------------
- NextJS behind the scenes create a request and send it to this NextJS server that's serving the website so this fn "shareMeal" triggered and then you can handle the form submission there but on the server

- automatically receive that "formData" that was submitted, the data that was gathered by the inputs in the form
*/
