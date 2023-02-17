import "./globals.css";
import { Outfit } from "@next/font/google";

const font = Outfit({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  // variable: '--font-outfit', // optional for tailwind
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={``}>{children}</body>
    </html>
  );
}
