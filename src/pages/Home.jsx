import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hi!!I am Taniza Tomsin, a Computer Science Engineering student at 
        Dhemaji Engineering College, passionate about data science and building elegant solutions through code.
        Driven by curiosity and analytical thinking, I aim to transform data 
        into meaningful insights and impactful solutions.
      </p>

      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default Home;