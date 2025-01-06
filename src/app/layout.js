import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Round Table: AI for Good – Shaping a Smarter, Sustainable Tomorrow",
  description: "21 Jan 2025 | 12:45 – 13:30 Hrs | Andhra Pradesh Lounge at Atlantis (Ground Floor), Grandhotel Belvedere, 89 Promenade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
