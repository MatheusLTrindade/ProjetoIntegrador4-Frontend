import React, { useEffect, useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";

export default function Modal({ visible, title, component, onClose }) {
  const [modalView, setModalView] = useState(visible)
  useEffect(() => {
    setModalView(visible);
  }, [visible]);
  function handleModalChange() {
    setModalView(false);
    if (onClose) {
      onClose();
    }
  }
  return(
    <div className={`${modalView ? 'flex' : 'hidden'} bg-black/50 h-full w-full py-32 text-center absolute z-[5] justify-center items-center`}>
      <div className="flex flex-col justify-center rounded-xl relative p-10 bg-white">
        <RiCloseCircleFill className='text-red-500 cursor-pointer absolute right-4 top-4' onClick={handleModalChange}/>
        <p className="text-xl font-semibold text-accent mb-4">{title}</p>
        {component && React.createElement(component)}
      </div>
    </div>
  )
};
