import './Card.css'

const Home = () => {
    return ( 
        <div className="Home">
            <h2>Homepage</h2> <br/> <br/> 
            <Library Title = "To kill the mockingbird"
            Author = "Harper Lee"
            Description = "A classic novel about racial in deep south"
            Date = "2-1" /> <br/>

            <Library Title = "To kill the mockingbird"
            Author = "Harper Lee"
            Description = "A classic novel about racial in deep south"
            Date = "2-1" /> <br/>

            <Library Title = "To kill the mockingbird"
            Author = "Harper Lee"
            Description = "A classic novel about racial in deep south"
            Date = "2-1" /> <br/>
        </div>
     );
}

const Library = (props) => {
    return(
        <div className="Card">
            <h2> {props.Title} </h2> <hr/>
            <h3> {props.Author} </h3> <hr/>
            <p> {props.Description} </p> <hr/>
            <p> {props.Date} </p>
        </div>
    )
}
export default Home;