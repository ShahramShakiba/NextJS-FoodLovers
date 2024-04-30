import Link from 'next/link';

export default function MealsPage() {
  return (
    <main>
      <h1>Meals</h1>

      <p>
        <Link href="/meals/share">Share</Link>
      </p>

      <p>
        <Link href="/">Go Home</Link>
      </p>
    </main>
  );
}
