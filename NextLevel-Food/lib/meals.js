// Get Data from DATABASE

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

/*------------- all() vs run() vs get() ----------
- all: if you would fetching-data

- run: if you would inserting-data, changing data

- get: if you're looking for a single-row
*/

/*---- db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) ------

- 'SELECT * FROM meals WHERE slug = ' + slug :
  - this way is insecure, you opens yourself up to SQL injection

- SELECT * FROM meals WHERE slug = ? -> instead we use ? mark here
- then, pass the value that should be insert it for that placeholder to get

- under the hood, this "better-sqlite3" package will then protect you against SQL injection attacks
*/
