import React from 'react';
import Fruits from './Fruits';

 function ListRendering() {
    const keyList = ['List1', 'List2', 'List3']
    const FruitList = [{name:'APPLE', color:'red'}, {name:'Orange', color:'Orange'}, {name:'Banana', color: 'yellow'}];
    const FruitsList = FruitList.map(fruit => <Fruits key={fruit.color} fruit={fruit}/>)
    const keyLists = keyList.map((keylist, index) => <h2 key={index}>{index} {keylist}</h2>)
    return (
      <div>
        {FruitsList}
        {keyLists}
      </div>
    )
 }

 export default ListRendering
