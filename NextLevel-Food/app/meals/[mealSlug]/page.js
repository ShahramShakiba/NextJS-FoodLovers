import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getMeal } from '@/lib/meals';
import classes from './page.module.css';

// Adding Dynamic Metadata
export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealDetailsPage({ params }) {
  //getMeal need "slug" - dynamic-path that configured for this route
  const meal = getMeal(params.mealSlug);

  // if meal not existed show the closest not-found or error page
  if (!meal) {
    notFound();
  }

  //look for all line-brakes"/\n/" in the string"g" and replace it with <br/>
  meal.instructions = meal.instructions.replace(/\n/g, '<br/>');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>

        <div className={classes.headerText}>
          <h1> {meal.title} </h1>

          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>

          <p className={classes.summary}> {meal.summary} </p>
        </div>
      </header>

      <main>
        {/* show instructions */}
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}

/*---------------- Dynamic-path --------------
- we want to have some path-segment after "meals" but we don't know the exact value of the segment yet.

- A "slug" is a part of the URL that identifies a particular resource on a website in a human-readable format. It typically consists of words separated by hyphens and is used to improve the readability and SEO of URLs.


- [mealSlug] is a "key"
- JUICY CHEESE BURGER <- this value encoded in URL will be used as a "value"
  this is the value we need to look for in the database
  - http://localhost:3000/meals/juicy-cheese-burger
*/

/*------------ dangerouslySetInnerHTML ------------
- a property that you can use on HTML elements in a React application to programmatically set their content.

- it's called like this coz you open yourself up to cross-site scripting attacks when outputting content as HTML content, at least if you're not validating it
*/

/*----------- Dynamic Page-catch all page ----------
- dynamic page: [id] 

- catch all page:  [...id]
-> after ID that I put in should still load this page
*/

/* ---------- server-component & hooks -----------
? using any hook like useRouter in server-component will give us an error and to fix the error we can add _'use client';_ at the top of our code
*/

/* -------------- useRouter() ---------------------
?- If you want to access the router object inside any function component in your app, you can use the useRouter hook,

-  const router = useRouter();
- <button onClick={() => router.push('/')} className="bg-blue-300 p-2 m-4">
        Go Home 
  </button>
*/

/* ----------------- useParams() -------------------
?- lets you read a route's dynamic params filled in by the current URL.

- http://localhost:3000/properties/123 <-  to get this id

- const { id } = useParams();
- <button onClick={() => router.push('/')} className="bg-blue-300 p-2 m-4">
      Go Home {id}
  </button>
*/

/* ---------- useSearchParams()-Query Params ----------------
?- lets you read the current URL's query string.

- http://localhost:3000/properties/123?name=John <- to get this name

- const searchParams = useSearchParams();
  const name = searchParams.get('name');

  <button onClick={() => router.push('/')} className="bg-blue-300 p-2 m-4">
      Go Home {name} -> John
  </button>

*/

/* ------------------- usePathname() ------------------
?-  lets you read the current URL's pathname.

- http://localhost:3000/properties/123 <- to get the entire path: properties/123

*/
