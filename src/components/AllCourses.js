import React, { useEffect, useState } from "react";
import Course from "./Course";
import {get} from "./../api/bootapi";
import { toast } from "react-toastify";


const AllCourses = () => {
  useEffect(() => {
    document.title = "Tous les cours || Apprendre le code Zoheeb";
    getAllCoursesFromServer();
  }, []);

  // function to call server
  const getAllCoursesFromServer=()=>{
    
    get("/api/courses").then(
      (res)=>{
        //success
        console.log(res.data);
        console.log(res);
        toast.success("les cours ont été chargés",{
          position:"bottom-center"
        })
        setcourses(res.data)
      },
      (err)=>{
        // for error
        console.log(err);
        toast.error("quelque chose s'est mal passé",{
          position:"bottom-center"
        })
      }
    )
  }
  //calling loading course function
  // useEffect(() => { 
  //   getAllCoursesFromServer();
  // }, []);

  const [courses, setcourses] = useState([

  ]);

  const updetCourses=(id)=>{
    setcourses(courses.filter((c)=>c.id!==id));
  }

  return (
    <div>
      <h1>Tous les cours</h1>
      <p>La liste des cours</p>

      {courses.length > 0
        ? courses.map((item) => <Course key={item.id} course={item} update={updetCourses} />)
        : "Pas de cour"}
    </div>
  );
};

export default AllCourses;
