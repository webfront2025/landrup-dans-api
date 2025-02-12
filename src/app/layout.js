import "./globals.css";

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
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}