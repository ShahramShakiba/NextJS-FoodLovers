import classes from './page.module.css';
import { shareMeal } from '@/lib/actions';
import ImagePicker from '@/components/Meals/ImagePicker';

export default function ShareMealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>

      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name"> Your name </label>
              <input type="text" id="name" name="name" required />
            </p>

            <p>
              <label htmlFor="email"> Your email </label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>

          <p>
            <label htmlFor="title"> Title </label>
            <input type="text" id="title" name="title" required />
          </p>

          <p>
            <label htmlFor="summary"> Short Summary </label>
            <input type="text" id="summary" name="summary" required />
          </p>

          <p>
            <label htmlFor="instructions"> Instructions </label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>

          <ImagePicker label="Your image" name="image" />

          <p className={classes.actions}>
            <button type="submit"> Share Meal </button>
          </p>
        </form>
      </main>
    </>
  );
}

/* --------------- shareMeal | server-action ------------
- NextJS behind the scenes create a request and send it to this NextJS server that's serving the website so this fn "shareMeal" triggered and then you can handle the form submission there but on the server

- automatically receive that "formData" that was submitted, the data that was gathered by the inputs in the form
*/
