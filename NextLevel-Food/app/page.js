import Link from 'next/link';
import classes from './page.module.css';
import ImageSlideshow from '@/components/Images/ImageSlideShow';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>

        <div>
          <div className={classes.hero}>
            <h1> NextLevel Food for NextLevel Foodies </h1>
            <p> Taste and share food from all over the world! </p>
          </div>

          <div className={classes.cta}>
            <Link href="/community"> Join the Community </Link>
            <Link href="/meals"> Explore Meals </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={classes.section}>
          <h2> How it works </h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food? </h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}

/* server Component - Client Component

? server component:
- fetch data
- access backend resources(directly)
- keep sensitive info on the server (access token, API, Keys. etc)
- keep large dependencies on the server / reduce client side javascript

? Client Component:
- add interactivity and event listeners(onClick(), onChange(), etc)
- use state and lifecycle effects(useState(), useReducer(), useEffect(), etc)
- use browser-only API
- use custom hooks that depend on state, effects or browser-only API
- use React Class Components
*/
