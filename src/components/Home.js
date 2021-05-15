import React, { useEffect } from "react";
import { Jumbotron,Container,Button } from "reactstrap";
const Home = () => {

    useEffect(() => {
      document.title = "Home || Learncode Zoheeb";
    }, []);
  
  return (
    <div>
      <Jumbotron className="text-center" >
        <h1 className="display-3">Learn code with Zoheeb</h1>
        <p>This is developed By Fullstreak Guscode for leaning pupose </p>
        <Container>
            <Button color="primary" outline>Start Using</Button>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;
