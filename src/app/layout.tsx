import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartIcon } from "@/ui/CartIcon";
import { getCart } from "@/api/cart/api";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cart = await getCart();
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex items-end justify-end p-5">
          <CartIcon count={cart?.orderItem.length ?? 0} />
        </header>
        {children}
      </body>
    </html>
  );
}
