// Get Data from DATABASE

import xss from 'xss';
import slugify from 'slugify';
import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  // an arbitrary(optional) delay to simulate an action that takes a bit longer
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error('Loading meals failed!');

  //select all columns from the meals table | then run it with "all"
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export function saveMeal(meal) {
  //create a new slug with lowercase
  meal.slug = slugify(meal.title, { lower: true });

  //remove any harmful content from instructions -Sanitizing user-input
  meal.instructions = xss(meal.instructions);
}

/*------------- all() vs run() vs get() ----------
- all: if you would fetching-data

- run: if you would inserting-data, changing data

- get: if you're looking for a single-row
*/

/*------ db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) --------

- 'SELECT * FROM meals WHERE slug = ' + slug :
  - this way is insecure, you opens yourself up to SQL injection

- SELECT * FROM meals WHERE slug = ? -> instead we use ? mark here
- then, pass the value that should be insert it for that placeholder to get

- under the hood, this "better-sqlite3" package will then protect you against SQL injection attacks
*/

/* ----------------- slugify & xss -----------------------
- inside of "saveMeal" we need to generate a slug, coz in our database we stored a slug for every meal and we don't get that from the form
- instead we generate that based on the "title"

? npm install slugify xss

- slugify: The slugify filter returns a text into one long word containing nothing but lower case ASCII characters and hyphens (-).

- xss: is a module used to filter input from users to prevent XSS attacks.
     - Cross-site scripting (XSS) is an attack in which an attacker injects malicious executable scripts into the code of a trusted application or website.

*/
