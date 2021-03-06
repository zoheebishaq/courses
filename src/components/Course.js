import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";
import { base_url } from "../api/bootapi";

const Course = ({ course,update }) => {

  const deleteCourse=(id)=>{
    axios.delete(`${base_url}/api/courses/${id}`).then(
      (res)=>{
        //success
        toast.success("supprimer")
        update(id);
      },
      (err)=>{
        // for error
       toast.error("probleme serveur")
      }
    )
  }

  const updateCourse=(id)=>{
    axios.put(`${base_url}/api/courses/${id}`).then(
      (res)=>{
        
      }
    )
  }


  return <div>
      <Card>
          <CardBody>
              <CardSubtitle className="font-weight-bold">{course.title} </CardSubtitle>
              <CardText>{course.description}</CardText>
              <Container className="text-center">
                  <Button color="danger" onClick={()=>{
                    deleteCourse(course.id)
                  }}>supprimer</Button>
                  <Button color="warning ml-3">modifier</Button>
              </Container>
          </CardBody>
      </Card>
  </div>;
};

export default Course;
