import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";

import BackgroundLeft from "./components/BackgroundLeft";
import RightSide from "./components/RightSide";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="mr-4 mb-4">
      <Row>
        <BackgroundLeft />
        <RightSide />
      </Row>
      <Footer />
    </div>
  );
}

export default App;
