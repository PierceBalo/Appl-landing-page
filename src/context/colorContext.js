import { useState, createContext } from "react";
import { useGLTF } from "@react-three/drei";

export const ColorContext = createContext({});
export const ColorContextProvider = ({ children }) => {
  const { materials } = useGLTF("/scene.gltf");
  const [currColor, setCurrColor] = useState({
    color: "#9BB5CE",
    text: "Sierra Blue",
    rgba: "155, 181, 206",
  });

  const changeColorContext = (colorObj) => {
    materials.Body.color.set(colorObj.color);
    setCurrColor(colorObj);
  };
  return (
    <ColorContext.Provider
      value={{
        currColor,
        changeColorContext,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};
