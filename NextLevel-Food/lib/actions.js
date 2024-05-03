'use server';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { saveMeal } from './meals';

function isInvalidText(text) {
  return !text || text.trim() === '';
}

//a fn that's execute on the server | Server-Action
export async function shareMeal(prevState, formData) {
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
    return {
      message: 'Invalid input!',
    };
  }

  await saveMeal(meal);
  revalidatePath('/meals');

  redirect('/meals');
}

/* --------------- shareMeal | server-action ------------
- NextJS behind the scenes create a request and send it to this NextJS server that's serving the website so this fn "shareMeal" triggered and then you can handle the form submission there but on the server

- automatically receive that "formData" that was submitted, the data that was gathered by the inputs in the form
*/

/* ----------- How to fix NextJS caching too aggressively ---------

- we need to tell NextJS to through away its cache or parts of its cache whenever we add a new meal 

- there is a built in function provided by Nextjs

- a fn, right after saving a meal, before redirecting

?- revalidatePath():
  - tells NextJS to revalidate the cache that belongs to a certain route path

  - for example, if I know that I wanna visit the meals page and that the meals page depends on the data that's change now, I can tell NextJS to revalidate the(/meals) path 

?- revalidatePath('/meals') <- it's default for only this: page
?- revalidatePath('/meals', 'layout') <- revalidate layout - all nested pages
?- revalidatePath('/', 'layout') <- revalidate all the pages of the website
*/
