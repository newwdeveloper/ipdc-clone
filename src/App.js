import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Sectionleft from "./component/Sectionleft";
import Sectionright from "./component/Sectionright";
import homeloan from "./utils/House.png";
import carloan from "./utils/car.png";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main-section">
        <div className="homeloan">
          <img src={homeloan} alt="homeloan" />
          <p>Home Loan</p>
        </div>
        <div className="carloan">
          <img src={carloan} alt="carloan" />
          <p>Car Loan</p>
        </div>
        <Sectionleft />
        <Sectionright />
      </main>
      <Footer />
    </div>
  );
}

export default App;
