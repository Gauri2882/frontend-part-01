import './App.css';

function App() {

  const title = "Welcome to the web app";
  const visits = 50;
  // const employee = {name: 'james', age: 25};
  const link = 'https://www.google.com';

  return (
    <div className="App">
      <div className="content"></div>
      <h1>{title}</h1>
      <p>Visited {visits} times</p>
      {/* <p>{employee}</p> this wont be visible try by uncomennting it*/}
      <p>{10}</p>
      <p>{'Hello coder'}</p>
      <p>{ [1, 2, 3, 4, 5]}</p>
      <p> { Math.random() * 10 }</p>
      <a href = { link }> Google </a>
    </div>
  );
}

export default App;
