import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Mckade's Portfolio",
  description:
    "Welcome to my personal portfolio, a curated showcase of my professional journey, skills, and accomplishments. Designed with potential employers in mind, this interactive platform offers a deep dive into my career highlights, creative projects, and the unique value I bring to the table. Explore my work, discover my passions, and get to know the person behind the portfolio. Whether you're looking for a glimpse of my expertise or contemplating a collaborative venture, this portfolio is your window into my professional ethos and vision. Let's embark on this journey together and explore the possibilities that lie ahead.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@900&family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
