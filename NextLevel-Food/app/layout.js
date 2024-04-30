import './globals.css';

export const metadata = {
  title: 'NextLevel Food',
  description: 'First NextJS application!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> {children} </body>
    </html>
  );
}
