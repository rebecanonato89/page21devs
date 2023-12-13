import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { 
  homeOutline,
  personOutline,
  chatbubbleOutline,
  cameraOutline,
  settingsOutline 
} from 'ionicons/icons';

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: homeOutline, label: "Home" },
    { icon: personOutline, label: "About" },
    { icon: chatbubbleOutline, label: "Contact" },
    { icon: cameraOutline, label: "Gallery" },
    { icon: settingsOutline, label: "Settings" },
  ];

  return (
    <div className="flex justify-center items-center bg-[#262433] min-h-screen">
      <div className="w-[420px] h-[70px] bg-white relative flex justify-center z-10 shadow-md rounded-lg">
        <ul className="flex w-[350px]">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`list ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <button className="flex flex-col justify-center items-center w-full text-center font-semibold">
                <span className="icon">
                  <IonIcon icon={item.icon} />
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div
          className={`indicator absolute top-[-10px] w-[70px] h-[70px] rounded-full bg-[#262433] cursor-pointer transition-all duration-500 ease-in-out transform translate-x-[calc(70px*${activeIndex})]`}
        >
          <span className="absolute bottom-[3px] left-[-1px] w-[60px] h-[60px] rounded-full bg-white transform-origin-bottom scale-85 shadow-md"></span>
        </div>
      </div>
    </div>
  );
};

export default Menu;