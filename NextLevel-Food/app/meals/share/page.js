import Link from 'next/link';

export default function ShareMealPage() {
  return (
    <main>
      <h1>Share Meal</h1>

      <p>
        <Link href="/meals">Go Meals</Link>
      </p>
      <p>
        <Link href="/">Go Home</Link>
      </p>
    </main>
  );
}
