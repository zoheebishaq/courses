import { Button, Col, Container, Row } from "reactstrap";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddCourse from "./components/AddCourse";
import AllCourses from "./components/AllCourses";
import Course from "./components/Course";


function App() {
  const btnHandle = () =>
    toast.success("Wow so easy!", { position: "bottom-center" });
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>

            <Col md={4}>
              <Menu />
            </Col>

            <Col md={8}>
              <Route path="/" component={Home} exact/>
              <Route path="/add-course" component={AddCourse} exact/>
              <Route path="/view-courses" component={AllCourses} exact/>
            
            </Col>

          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
