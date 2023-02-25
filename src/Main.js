import React from 'react';
import HornedBeast from './HornedBeast';
class Main extends React.Component{
  render() {
    return(
      <main>
      <HornedBeast 
      title = "Rhino" 
      imageUrl="https://upload.wikimedia.org/wikipedia/commons/4/4f/Rhino_%28234581759%29.jpeg" 
      description="A Large horned Animal"/>
      <HornedBeast 
      title = "Big Horned Sheep" 
      imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzhtHoXwUfH9ZkILd3cHwjQsYW7bPsuV1EKFeGM9B9veIQjf-wCWZbP6sDbVhE7PyLEHE&usqp=CAU" 
      description="A mountain sheep with large horns"/>
    </main>
    )
  }


}

export default Main;