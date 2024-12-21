import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TodoApp from "./components/TodoApp";


export default function RootLayout({ }: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html>
      <body>
        <div>
          <TodoApp />
        </div>
      </body>

    </html>
  );
}
