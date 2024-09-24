import "@css/bootstrap.min.css";
import "@css/magnific-popup.css";
import "@css/slick.css";
import "@css/style.css";
import "@css/responsive.css";
import "@fontawsome/css/all.min.css";
import "@fontawsome/css/fontawesome.min.css";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Paul Hendricks - Web Developer & AI Solutions Portfolio",
  description: "Explore my portfolio showcasing innovative web development projects and AI-driven services. Specializing in React, Next.js, and AI solutions to bring value and cutting-edge technology to your projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
