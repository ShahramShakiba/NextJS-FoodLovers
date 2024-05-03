// Save & Get Data from DATABASE

import xss from 'xss';
import fs from 'node:fs';
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

export async function saveMeal(meal) {
  //create a new slug from title with lowercase
  meal.slug = slugify(meal.title, { lower: true });
  //remove any harmful content from instructions - Sanitizing user-input
  meal.instructions = xss(meal.instructions);

  //get extension of the image(png or jpeg) | pop the last-ele which will be the file extension
  const extension = meal.image.name.split('.').pop();
  //generate a unique file name and not using user file-name
  const fileName = `${meal.slug}.${extension}`;

  //write the fileName to a file in the public-folder using "File-System"
  const stream = fs.createWriteStream(`public/images/${fileName}`);

  //covert image to a buffer(divider) - we need it for the "write()" - which gives you a "promise"
  const bufferedImage = await meal.image.arrayBuffer();

  //write() needs a regular-buffer but we created an array Buffer
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed!');
    }
  });

  //store over-all data in the database - store the "path" of the image
  meal.image = `/images/${fileName}`;

  //insert some data into meals table | then specifies values that should be inserted
  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
     )
  `
  ).run(meal);
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

/* ---------------- Images -----------------
- images needs to be store in file-system not in the database, coz it's bad for performance 

- store in the public folder

? fs:
  - This refers to the built-in `fs` (file system) module in Node.js, which provides functions for interacting with files and directories.

? createWriteStream(path): 
  - create a writable stream(flow) that allows us to write data to a certain file - write data to a file in chunks(piece)

? arrayBuffer():
  - to retrieve the raw-binary-data of the image in the form of an ArrayBuffer.

? Buffer.from():
  - method is used to create a Buffer from the ArrayBuffer. 
  - Buffers provide a way to efficiently manage and manipulate binary data in Node.js. They offer better performance compared to directly working with ArrayBuffers for file system operations.

? write(what you want to write, anonymous-fn that will be executed once it's done writing )
*/

/* --------------- AWS S3 Image Upload -----------------
- npm install @aws-sdk/client-s3
*/
