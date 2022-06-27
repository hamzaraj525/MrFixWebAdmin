import React, { useState, useEffect } from "react";
import { db } from "./utils/firebase";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    var tutorialsRef = db.database().ref("/cartItems");
    tutorialsRef.on("value", (snapshot) => {
      var li = [];
      snapshot.forEach((child) => {
        // console.log(child.val());
        li.push({
          key: child.key,
          TotalPrice: child.val().TotalPrice,
        });
      });
      setList(li);
    });
  }, []);

  return (
    <div>
      {list.map((item, index) => {
        return (
          <div>
            <h1>{item.TotalPrice}</h1>
          </div>
        );
      })}
    </div>
  );
}
export default App;
