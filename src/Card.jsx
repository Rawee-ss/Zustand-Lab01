import React, { useState } from "react";
import useStore from "./containers/Containers";

const SectionCard = () => {
  const [txt, setTxt] = useState("");

  const { arr, addArr, delArr } = useStore((state) => ({
    arr: state.arr,
    addArr: state.addArr,
    delArr: state.delArr,
  }));

  const hdlOnChange = (e) => {
    setTxt(e.target.value);
  };
  const hdlOnClickAdd = () => {
    // console.log(txt)
    addArr(txt);
  };
  const hdlDelete = (id) => {
    delArr(id);
  };

  // console.log(arr);
  return (
    <div className="bg-blue-100 h-full w-full flex items-center flex-col">
      <div className="pb-[20px] pt-[80px]">
        <h1 className="font-bold text-4xl">Todo List</h1>
      </div>
      <div className="flex items-center">
        <input
          className="w-[50vw] h-[35px] rounded-[5px]"
          type="text"
          onChange={hdlOnChange}
        />
        <button
          className="w-[80px] h-[30px] bg-blue-900 text-white rounded-[10px] ml-3 font-bold text-2xl"
          onClick={hdlOnClickAdd}
        >
          Add{""}
        </button>
      </div>
      <div className="m-[25px] ">
        {arr.map((item, index) => (
          <div className="flex mb-[15px] ">
            <li
              key={index}
              className="bg-green-200 border-1px-black w-[40vw] h-[15vh] flex items-center p-10 text-2xl rounded-xl mr-[15px]"
            >
              {item.title}
            </li>
            <button
              className="bg-red-200 w-[15vw] h-[15vh] rounded-xl flex items-center justify-center"
              onClick={() => hdlDelete(item.id)}
            >
              <img className=" w-[5vw] h-[5vh] " src="/src/img/bin.svg" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionCard;
