import { useState, useEffect } from "react";

import axios from "axios";

function Test() {

  useEffect(()=>{
    axios.get("http://localhost:8000/api/users").then((response)=>{
      console.log(response)
    })
  }, [])

  return (
      <div>
        test
      </div>
    );
}

export default Test;
