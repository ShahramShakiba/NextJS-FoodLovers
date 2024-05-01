// Get Data from DATABASE

import sql from 'better-sqlite3';
const db = sql('meals.db');

export async function getMeals() {
  // an arbitrary(optional) delay to simulate an action that takes a bit longer
  await new Promise((resolve) => setTimeout(resolve, 2000));

  //select all columns from the meals table | then run it with "all"
  return db.prepare('SELECT * FROM meals').all();
}

/* all() vs run() vs get()
- all: if you would fetching-data

- run: if you would inserting-data, changing data

- get: if you're looking for a single-row
*/
