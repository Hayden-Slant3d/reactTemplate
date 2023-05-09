import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { firebaseApi } from "../services/firebaseServices";

function Example() {
  const [count, setCount] = useState(0);

  async function test(){
    try {
      const res = await firebaseApi.get()
      console.log(res)
    } catch (error) {
      console.error(error)
    }
    
  }

  test()

  return (
    <div>
      {/* <h2>Data from Firebase</h2>
      <ul>{data && Object.entries(data).map(([key, value]) => <li key={key}>{value.name}</li>)}</ul> */}
    </div>
  );
}

export default Example;
