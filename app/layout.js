import { Fraunces, Roboto_Flex } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Display face: an editorial serif, used sparingly for headlines —
// stands in for the brand's custom display font referenced in globals.css.
const displayFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

// Body face: a variable grotesque used for everything else — nav, buttons,
// paragraphs, labels.
const bodyFont = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Fortune  Cosmos | Distinctive Homes & Estate Properties",
  description:
    "Fortune  Cosmos curates a portfolio of distinctive homes, vineyard estates and waterfront residences. Explore listings, schedule a private tour, and work with our advisory team.",
  keywords: [
    "real estate",
    "luxury homes",
    "estate properties",
    "Fortune  Cosmos",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
