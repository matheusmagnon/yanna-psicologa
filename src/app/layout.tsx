import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yanna Góis Psicologia",
  description: "Te ajudando a ter mais qualidade de vida",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt_BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
