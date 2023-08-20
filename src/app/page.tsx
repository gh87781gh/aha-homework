import { SideBar, Article } from "container/Layout";
import Home from "views/Home";

export default function RootPage() {
  return (
    <>
      <SideBar />
      <Article>
        <Home />
      </Article>
    </>
  );
}
