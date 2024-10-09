import React from 'react'
import Card from './Card'
import java from "../../../public/java.png"

import mongoDB from "../../../public/mongodb.jpg";
import express from "../../../public/express.png";
import reactjs from "../../../public/reactjs.png";
import nodejs from "../../../public/node.png";
const Skills = () => {
  return (
    <>
      <p className="font-bold text-center text-3xl" >Skills</p>
      <div className=" grid grid-cols-4 gap-4 p-4 ">
        <Card name="java" image={java} />
        <Card name="mongodb" image={mongoDB} />
        <Card name="express" image={express} />
        <Card name="reactjs" image={reactjs} />
        <Card name="nodejs" image={nodejs} />
        <Card name="java" image={java} />
        <Card name="mongodb" image={mongoDB} />
        <Card name="express" image={express} />
        <Card name="reactjs" image={reactjs} />
        <Card name="nodejs" image={nodejs} />
      </div>
    </>
  );
}

export default Skills
