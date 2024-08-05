import { FC } from "react";
import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

interface IRootLayout {
  children: React.ReactNode;
}

const RootLayout: FC<IRootLayout> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
