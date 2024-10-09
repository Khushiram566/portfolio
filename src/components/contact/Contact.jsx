import React from 'react'

const Contact = () => {
  return (
    <>
      <h1 className="font-bold text-center text-3xl m-2 ">Contact Form</h1>
      <div className="flex justify-center">
        
        <div className=" flex border-[2px] rounded-lg box box-conte w-[400px] h-[400px] justify-center items-center  bg-blue-300">
    
          <form action="">
            <div>
              <label htmlFor="">First Name:</label> <br />
              <input type="text" className="border-[2px]" />
            </div>

            <div>
              <label htmlFor="">Last Name:</label>
              <br />
              <input type="text" className="border-[2px]" />
            </div>

            <div>
              <label htmlFor="">Email:</label>
              <br />
              <input type="email" className="border-[2px]" />
            </div>
            <div>
              <label htmlFor="">Phone Number:</label>
              <br />
              <input type="tel" className="border-[2px]" />
            </div>
            <div>
              <button className="border-[2px]  p-1 mt-2 text-center bg-black text-white ">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact
