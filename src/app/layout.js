
import { Ubuntu as UbuntuFont } from "next/font/google";
 
import "./globals.css";
 
const ubuntu = UbuntuFont({
  subsets: ["latin"],
  weight: "400",
});


export const metadata = {
  title: {
    default: "Landrup Dance Skole",
    template: "%s | Landrup Dance Skole",
  },
  description: "HØR NU EFTER!!! >:D",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={`bg-[#5E2E53] ${ubuntu.className}`}>
        {children}
      </body>
    </html>
  );
}