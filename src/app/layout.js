import "./styles/main.scss";
import Providers from "./context/Providers";

export const metadata = {
  title: "Tecnología Plus",
  description: "Página de tecnología plus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

