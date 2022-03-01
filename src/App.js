import CountDown from "./components/CountDown";
import ImagesGrid from "./components/ImagesGrid";
import {Container} from "react-bootstrap";
import ImagesView from "./views/ImagesView";

//document.body.className = 'd-flex flex-column justify-content-center align-items-center bg-secondary';

function App() {
  return (
      <Container className="d-grid"
                 style={{placeItems:"center"}}>
        <CountDown/>
      </Container>
  );
}

export default App;
