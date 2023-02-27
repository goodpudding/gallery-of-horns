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
    </main>
    )
  }


}

export default Main;