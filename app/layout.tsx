import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ERD Live Visualizer — Real-time Database Schema Diagrams",
  description: "Connect to your database, generate live ERD diagrams, and track schema changes over time. Built for backend developers and DBAs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="530a09c7-1e7b-480a-8417-3829720c68c2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
