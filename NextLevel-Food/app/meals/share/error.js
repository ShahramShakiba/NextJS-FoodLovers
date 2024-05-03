'use client'

export default function Error() {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to create meal. Please try again later.</p>
    </main>
  );
}

/* must be a client component
- since NextJS makes sure you can catch any errors with that component
- including errors that happen in client side - after the pages were rendered on the server
*/