// Components
import { TopNav } from "./components/topNav";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import { GlobalStyle } from "./styles/global";


function App() {
  return (
    <>
      <TopNav />
      <Main />
      <Footer />
      <GlobalStyle bg="#e4dfdc"/>
    </>
  );
}

export default App;
