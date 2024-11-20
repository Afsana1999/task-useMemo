import React, { useMemo, useState } from "react";

function CalcFActorial() {
  const [num, setNum] = useState();
  const [name, setName] = useState("");

  const factorial = useMemo(() => {
    let res = 1;

    for (let i = 1; i <= num; i++) {
      res *= i;
    }
    console.log("re-render getdi");

    return res;
  }, [num]);
  
  return (
    <div>
      <p style={{ fontSize: "30px" }}>Faktorial hesablama</p>
      <input
        type="number"
        style={{ height: "35px", width: "300px", paddingLeft: "10px" }}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Eded daxil edin..."
      />
      <br />
      <br />
      <input
        type="text"
        style={{ height: "35px", width: "300px", paddingLeft: "10px" }}
        onChange={(e) => setName(e.target.value)}
        placeholder="Metn daxil edin..."
      />
      <br />
      <p style={{ fontSize: "20px" }}>
        Daxil etdiyiniz ededin faktoriali: {factorial}
      </p>
      <p style={{ fontSize: "20px" }}>Daxil etdiyinz metn: {name} </p>
    </div>
  );
}

export default CalcFActorial;
