import React from 'react'

const ProjectCard = (props) => {
  return (
    <>
      <div className="border-[2px] ">
        <div className="flex">
          <div className="">
            <p>
              {" "}
              <span className="font-bold">Project Name:</span>
              {props.Name}
            </p>
            <p>
              <span>Skills:</span>
              <div className="flex space-x-2">
                {props.Skills.map((skill) => (
                  <li>{skill}</li>
                ))}
              </div>
            </p>
            <p>
              <span>Link:</span>
              {props.link}
            </p>
            <p>Start Date:{props.StartDate}</p>
            <p>End Date:{props.EndDate}</p>

            <p>
              Description: <span className='text-justify'>{props.Description}</span>
            </p>
          </div>

          <div>
            <img
              src={props.Image}
              alt=""
              className="rounded-full h-[200px] w-[400px] py-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard
