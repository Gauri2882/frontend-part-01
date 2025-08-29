const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1> The coder web app </h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" styles= {{ 
                    color:"white", 
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                }}>New app</a>
            </div>
        </nav>
     );
}
 
export default Navbar;