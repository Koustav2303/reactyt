import React from "react";

const RightCard = () => {
  return (
    <div className="h-full w-80 overflow-hidden relative rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1612914033131-2fbd331a3806?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
        alt=""
      />
      <div className="absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between">
        <h2 className="bg-white rounded-full h-12 w-12 flex justify-center items-center text-xxl font-semibold">
          1
        </h2>

        <div>
          <p className="text-xl leading-normal text-white mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            aliquam. Harum commodi amet porro!
          </p>

          <div className="flex justify-between">
            <button className="bg-blue-600  font-medium px-7 py-2 rounded-full">Satisfied</button>
            <button className="bg-blue-600 text-white font-medium px-4 py-3 rounded-full">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
