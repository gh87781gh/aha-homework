// import { BrowserStorage, BrowserStorageType, MyContext } from "storage";
import LayoutTemplate from "container/LayoutTemplate";
// import "react-perfect-scrollbar/dist/css/styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <MyContext.Provider value={{ user, setUser }}> */}
        <LayoutTemplate>{children}</LayoutTemplate>
        {/* </MyContext.Provider> */}
      </body>
    </html>
  );
}
