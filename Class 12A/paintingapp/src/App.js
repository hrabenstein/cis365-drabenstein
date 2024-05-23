import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  //later you will learn how to fetch this data from an API 
  const data = [
    {id: "016060", title: "Girl Arranging Her Hair", artist: "Mary Cassatt",  year: 1886},      
    {id: "019160", title: "Farmhouse in Provence", artist: "Vincent Van Gogh", year: 1888},  
    {id: "016070", title: "The Boating Party", artist: "Mary Cassatt",  year: 1893},
    {id: "017040", title: "Woman with a Parasol", artist: "Claude Monet",  year: 1875},
    {id: "017080", title: "The Bridge at Argenteuil", artist: "Claude Monet", year: 1874}
 ];

 const [paintings,setPaintings] = useState(data);  //this is a destructured array [0,1]
 // painting = nameOfState => variable that holds state
 // setPaintings = set<nameOfState> => callback method that sets the state
 const[currentPainting,setCurrentPainting] = useState(data[0]);


 const handleChange = (updatedPainting) => {
    setCurrentPainting(updatedPainting);
 };

 const handleUpdatePainting = (mofifiedPainting) => {
    //copy the list
    const updatedList = [...paintings];
    //find the painting index
    const index = updatedList.findIndex(p => p.id == mofifiedPainting.id);
    //replace the painting
    updatedList[index] = mofifiedPainting;
    //update state!
    setPaintings(updatedList); //updates painting list
    setCurrentPainting(mofifiedPainting); //updates painting state

 };

 const handleReset = () => {
    const restoredList = [...data];
    setPaintings(restoredList);
 }

 return (
    <article className="app">
       <Header undo={handleReset}/>
       <div className="box">
          <PaintingList paintings = {paintings} change={handleChange}/>
          <EditPaintingForm componentCurrentPainting = {currentPainting} update = {handleUpdatePainting}/>
       </div>
    </article>
 );
    
}

const Header = (props) => {
 return (
    <header>
    <h1>Test Your Knowledge #1</h1>
    <button onClick={props.undo}>Undo Edits</button>
    </header>);
}

const PaintingListItem = (props) => {
 //const {painting,change} = props;
 const handleSelect = (e) => {
    console.log(e);
    props.change(props.painting); //implemented
 };
 return (<div className="row invert" onClick = {handleSelect}>
    <img src={"paintings/square/" + props.painting.id + ".jpg"} alt={props.painting.title} />
    <h3>{props.painting.title}</h3>
    <p>{props.painting.artist}</p>
    <p>{props.painting.year}</p>
 </div>);
}

const PaintingList  = (props) => {
 console.log(props);
 return (
    <section className="paintingList">
       {props.paintings.map(p => <PaintingListItem painting = {p} key = {p.id} change = {props.change}/> )}
 </section>);
}

const EditPaintingForm = (props) => {
 const handleChange = (e) => {
    console.log(e);
    //create a new painting to return back
    //get tha name and value of form element that called this handler
    const mofifiedPainting = {...props.componentCurrentPainting}; //making a shallow copy of current painting
    const {name,value} = e.target; //same as e.target.name
    //use bracket notation to update the entire property
    mofifiedPainting[name] = value;
    //tell the parent to update the paintingList with this new object
    props.update(mofifiedPainting);
 };

 return (
 <section className="paintingForm">
    <img src={"paintings/" + props.componentCurrentPainting.id + ".jpg"} alt={props.componentCurrentPainting.title}/>
    <div data-children-count="1"><label>Title</label><input type="text" name="title" value={props.componentCurrentPainting.title} onChange={handleChange} /></div>
    <div data-children-count="1"><label>Artist</label><input type="text" name="artist" value={props.componentCurrentPainting.artist} onChange={handleChange}/></div>
    <div data-children-count="1"><label>Year</label><input type="text" name="year" value={props.componentCurrentPainting.year} onChange={handleChange}/></div>
 </section> 
 );
}
  
ReactDOM.render(<App />, document.querySelector('#react-container'));

export default App;
