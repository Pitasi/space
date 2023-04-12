import { Inter, Darker_Grotesque } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-darker-grotesque",
});
