const PaintingList  = (props) => {
    console.log(props);
    return (
       <section className="paintingList">
          {props.paintings.map(p => <PaintingListItem painting = {p} key = {p.id} change = {props.change}/> )}
    </section>);
   }

   export default PaintingList;