import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>About Me</h1>
      <p>
        I am a BTech student and aspiring software engineer. I love coding and building web applications.
      </p>

      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default Home;