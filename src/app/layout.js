import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params, searchParams }, parent) {
  const fileName = process.env["NEXT_PUBLIC_DATAFILE_URL"];
  const res = await fetch(fileName);
  const meta = await res.json();
  return {
    title: meta.title,
    images: [meta.image],
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [meta.image],
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
