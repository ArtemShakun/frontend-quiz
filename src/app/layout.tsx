import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

const inter = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Frontend Quiz',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="wrapper">
          <div className="container">{children}</div>
        </div>
      </body>
    </html>
  );
}
