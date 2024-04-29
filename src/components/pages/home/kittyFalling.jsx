import { useEffect, useState } from "react";
import kitty from "../../../assets/kitty.png";

const RainingImages = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newImage = {
        id: Date.now(), // Unique id for each image
        top: -50, // Start above the screen
        left: Math.random() * window.innerWidth, // Random horizontal position
        angle: Math.random() * 20 - 10, // Random angle between -10 and 10 degrees
        speed: Math.random() * 2 + 1, // Random speed between 1 and 3 units per frame
      };
      setImages((prevImages) => [...prevImages, newImage]);
    }, 500); // Add a new image every 100 milliseconds

    return () => clearInterval(intervalId); // Cleanup the interval when component unmounts
  }, []);

  const updateImages = () => {
    setImages((prevImages) =>
      prevImages.map((image) => ({
        ...image,
        top: image.top + image.speed, // Move the image down
      })),
    );
  };

  useEffect(() => {
    const animationFrameId = requestAnimationFrame(updateImages);
    return () => cancelAnimationFrame(animationFrameId); // Cleanup the animation frame
  }, [images]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      {images.map((image) => (
        <button
          key={image.id}
          onClick={() => {
            props.setBandz(props.bandz + props.bps * 2);
            setImages((prevImages) =>
              prevImages.filter((i) => i.id !== image.id),
            );
          }}
          style={{
            position: "absolute",
            top: image.top,
            left: image.left,
            transform: `rotate(${image.angle}deg)`,
            width: 50, // Adjust the width and height as needed
            height: 50,
            zIndex: 40,
          }}
        >
          <img
            key={image.id}
            src={kitty} // Replace 'path_to_your_image.jpg' with the path to your image
            alt=""
            style={{
              position: "absolute",
              top: image.top,
              left: image.left,
              transform: `rotate(${image.angle}deg)`,
              width: 50, // Adjust the width and height as needed
              height: 50,
            }}
          />
        </button>
      ))}
    </div>
  );
};

export default RainingImages;
