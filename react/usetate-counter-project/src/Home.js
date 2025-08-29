import { useState } from "react";

const Home = () => {
    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount(count + 1)
    }

    function decreaseCount() {
        setCount(count - 1)
    }
    return (  
        <div className="Home">
            <h2>Homepage</h2>
            <button onClick={increaseCount}>Click me to Increase</button>

            <br/><br/>

            <button onClick={decreaseCount}>Click me to Decrease</button>
            <p> Count is: {count} </p>
        </div>
    );
}
 
export default Home;