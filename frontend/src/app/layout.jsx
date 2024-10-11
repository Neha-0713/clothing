
import ConfigureAmplifyClientSide from "./amplify-cognito-config";
import "./globals.css";


export const metadata = {
  title: "Klauset",
  description: "Fashion Era",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`{inter.className} antialiased`}
     
      ><><ConfigureAmplifyClientSide/>
      {children}
      </>
        <script src="./node_modules/preline/dist/preline.js"></script>
      </body>
    </html>
  );
}
