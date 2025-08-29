const Home = () => {
    return ( 
        <div className="Home">
            <h2>Homepage</h2>
            <br/> <br/>
            <ExampleTwo Name="John" Age = "23" Job = "Front end dev"/><br/>
            <ExampleTwo Name="Emily" Age = "22" Job = "Back end dev"/><br/>
            <ExampleTwo Name="Jack" Age = "24" Job = "Full stack dev"/>
        </div>
     );
}

const ExampleTwo = (props) => {
    return (
        <div>
            <h3>Name: { props.Name } </h3>
            <h3>Age: { props.Age } </h3>
            <h3>Job: { props.Job } </h3><br/>
        </div>
    )
}
 
export default Home;