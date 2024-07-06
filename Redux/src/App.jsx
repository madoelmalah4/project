import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtoarr, removefromarr } from "./redux/Slice";
import imge from './assets/image.jpg'
function App() {
  const count = useSelector((state) => state.arr.arr);

  const Dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "impact",
        fontWeight:"200",
      }}
    >
        <div style={{width:'100%' , height:"30px"}} className="divaya"></div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos minima ad
        voluptate. Quos omnis qui rem id debitis sapiente? Facere veniam dicta
        exercitationem perferendis libero iste cumque asperiores recusandae
        maiores?
      </p>
      <img src={imge} style={{ width: "100%" }} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos minima ad
        voluptate. Quos omnis qui rem id debitis sapiente? Facere veniam dicta
        exercitationem perferendis libero iste cumque asperiores recusandae
        maiores?
      </p>
      <img src={imge} style={{ width: "100%" }} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos minima ad
        voluptate. Quos omnis qui rem id debitis sapiente? Facere veniam dicta
        exercitationem perferendis libero iste cumque asperiores recusandae
        maiores?
      </p>
      <img src={imge} style={{ width: "100%"}} />
    </div>
  );
}

export default App;
