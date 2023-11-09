import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// console.log(movies);
function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />;
    </div>
  );
}

export default App;
