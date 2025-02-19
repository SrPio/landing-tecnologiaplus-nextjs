import "./styles/main.scss";
import Providers from "./context/Providers";

export const metadata = {
  title: "Tecnología Plus",
  description: "Página de tecnología plus",

  icons: {
    icon: [
      { url: 'https://tecnologiaplus.com/wp-content/uploads/2018/08/cropped-favicon-tecnologia-plus-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: 'https://tecnologiaplus.com/wp-content/uploads/2018/08/cropped-favicon-tecnologia-plus-192x192.png', sizes: '192x192', type: 'image/png' }
    ],
    apple: 'https://tecnologiaplus.com/wp-content/uploads/2018/08/cropped-favicon-tecnologia-plus-180x180.png',
  },
  themeColor: '#ffffff',
  other: {
    'msapplication-TileImage': 'https://tecnologiaplus.com/wp-content/uploads/2018/08/cropped-favicon-tecnologia-plus-270x270.png'
  }
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

