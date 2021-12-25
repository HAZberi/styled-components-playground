import { useState, useEffect } from "react";
const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions((_) => getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return window.removeEventListener("resize", handleResize);
  },[]);//Empty array mean that this effect will only run once so we will not get unnecessary re-renders

  //if we need to resize the window on the fly, then a better strategy is to remove the dependency array and wrap the handleResize function in a debounced function
  //See the optimization here https://www.pluralsight.com/guides/re-render-react-component-on-window-resize 

  return windowDimensions;
}
