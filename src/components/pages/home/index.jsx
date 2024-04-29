import { useState, useEffect } from "react";
import kitty from "../../../assets/kitty.png";
import hand from "../../../assets/hand.png";
import KittyFalling from "./kittyFalling";
import "./index.css";
import numeral from "numeral";

export default function Home() {
  const [bandz, setBandz] = useState(0);
  const [numClickers, setNumClickers] = useState(1);
  const [bps, setBps] = useState(0);
  const [showKittyRain, setShowKittyRain] = useState(true);

  const formatNumber = (number) => {
    return numeral(number).format("0.[0]a");
  };
  useEffect(() => {
    const interval = setInterval(async () => {
      setBandz((prevBandz) => prevBandz + numClickers);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [bandz, numClickers]);
  useEffect(() => {
    setBps(numClickers);
  }, [numClickers]);
  useEffect(() => {
    const showKittyRainInterval = setInterval(() => {
      setShowKittyRain(false);
      setTimeout(() => {
        setShowKittyRain(true);
      }, 10000);
    }, 50000);

    return () => {
      clearInterval(showKittyRainInterval);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-[#3b3b3b]">
      {showKittyRain ? (
        <KittyFalling setBandz={setBandz} bps={bps} bandz={bandz} />
      ) : (
        <></>
      )}
      <div className="cookie w-full h-[70%] flex flex-col justify-center items-center p-4">
        <div className="w-[60%] flex flex-row justify-between p-4 items-center">
          <h1 className="text-4xl text-white">${formatNumber(bandz)}</h1>
          <h1 className="text-4xl text-white">${formatNumber(bps)} (bps)</h1>
        </div>
        <button onClick={() => setBandz(bandz + 1)}>
          <div className="rotate absolute top-[50%] left-[50%]">
            {Array.from(
              { length: numClickers > 20 ? 20 : numClickers },
              (_, index) => (
                <div
                  key={index}
                  className="circle-div"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) rotate(${index * (360 / (numClickers > 20 ? 20 : numClickers))}deg)`, // Add 180 degrees to rotate the images
                    borderRadius: "50%", // Circle radius
                    width: "300px", // Adjust width and height as needed
                    height: "300px",
                    textAlign: "center",
                    lineHeight: "50px",
                  }}
                >
                  <div className="flex flex-row justify-center items-center">
                    <img src={hand} alt="hand" className="w-10 scale-y-[-1]" />
                  </div>
                </div>
              ),
            )}
          </div>

          <img src={kitty} alt="kitty" className="w-[450px] h-[300px]" />
        </button>
      </div>
      <div className="rest w-full h-[30%] flex justify-center items-cente mt-5">
        <button
          onClick={() => setNumClickers(numClickers + 1)}
          className="bg-[#2b2b2b] w-[20%] h-[30%] text-l text-white z-50"
        >
          test
        </button>
      </div>
    </div>
  );
}
