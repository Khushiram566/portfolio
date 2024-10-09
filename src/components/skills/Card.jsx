import React from 'react'

const Card = ({name,image}) => {
  return (
    <>
      <div className=" border-[2px] rounded-lg">
        <h1 className="text-center">{name}</h1>
        <div>
          <img src={image} alt="" className="w-40 h-40 mx-auto" />
          <p>
            Proficient in Java, experienced in building scalable backend
            systems, object-oriented programming, and multithreading for
            optimized performance.
          </p>
        </div>

        
      </div>
    </>
  );
}

export default Card
