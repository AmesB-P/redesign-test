import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v14-appRouter";
import styles from "@/app/page.module.css";
import Navbar from "@/components/Navbar";
import {TabRoomsProvider} from "@/context/TabRoomsContext";
import StickyFooter from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <AppRouterCacheProvider>
              <TabRoomsProvider>
                  <header className={styles.navbar}>
                      <Navbar/>
                  </header>
                  <main className={styles.main}>
                      {children}
                  </main>
                  <footer className={styles.footer}>
                      <StickyFooter/>
                  </footer>

              </TabRoomsProvider>
          </AppRouterCacheProvider>
      </body>
    </html>
  );
}
