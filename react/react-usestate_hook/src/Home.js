import {useState} from "react";

const Home = () => {
    const[name, Setname] = useState('John');
    // let name = 'john';
    const handleClick = () => {
        // name = 'Doe';
        // console.log(name);
        Setname('Doe')
    }
    
    return ( 
        <div className="Home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;