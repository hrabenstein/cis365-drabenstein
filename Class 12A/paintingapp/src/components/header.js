const Header = (props) => {
    return (
       <header>
       <h1>Test Your Knowledge #1</h1>
       <button onClick={props.undo}>Undo Edits</button>
       </header>);
   }

export default Header;