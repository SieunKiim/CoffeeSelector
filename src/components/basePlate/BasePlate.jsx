import React, {useState} from "react";
import './BasePlate.css'
import Finger from "../finger/Finger";

function BasePlate(props) {
    const [fingers, setFingers] = useState(["111111"]);

    const joinFinger = (event) => {
        // setFingers(event.touches);
        setFingers([...event.touches]);
    }

    const fingerMove = (event) => {
        setFingers([...event.touches]);
    };

    const endFinger = () => {
        setFingers([]);
    };

    return <div className="BasePlate"
                onTouchStart={joinFinger}
                onTouchMove={fingerMove}
                onTouchEnd={endFinger}
    >
        {fingers.map((touch, index) => {
            return <Finger key={index} touchInfo={touch}></Finger>;
        })}
    </div>;
}


export default BasePlate;