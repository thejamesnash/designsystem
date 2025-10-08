import "./globals.css";

export const metadata = {
  title: "Channel 4 Streaming"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
