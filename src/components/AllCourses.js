import React, { useEffect, useState } from "react";
import Course from "./Course";
import {get} from "./../api/bootapi";
import { toast } from "react-toastify";


const AllCourses = () => {
  useEffect(() => {
    document.title = "All Course || Learncode Zoheeb";
    getAllCoursesFromServer();
  }, []);

  // function to call server
  const getAllCoursesFromServer=()=>{
    
    get("/api/courses").then(
      (res)=>{
        //success
        console.log(res.data);
        console.log(res);
        toast.success("courses has benn loaded",{
          position:"bottom-center"
        })
        setcourses(res.data)
      },
      (err)=>{
        // for error
        console.log(err);
        toast.error("someting went wrong",{
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
      <h1>All Course</h1>
      <p>List of Courses are as follows</p>

      {courses.length > 0
        ? courses.map((item) => <Course key={item.id} course={item} update={updetCourses} />)
        : "No courses"}
    </div>
  );
};

export default AllCourses;
