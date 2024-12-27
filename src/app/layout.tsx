import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portal Brasil Espanha",
  description: "Informações da Espanha para brasileiros",
  keywords: [
    "Portal Brasil Espanha",
    "Imigração Espanha",
    "Turismo Espanha",
    "visto espanha",
  ],
  openGraph: {
    description: "Informações da Espanha para brasileiros",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleTagManager gtmId="GTM-WGJPN4X2" />
        <meta
          name="google-site-verification"
          content="Qr5pixkKtmUbBt9GkFon-gI6xikqQbene9rBtnpauE4"
        />
        <meta name="keywords" content="portal, brasil, espanha" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WGJPN4X2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
