import React from 'react';
const inventory = require ('./inventory.json'); 

class Inventory extends React.Component {
    render() {
        return (
            <div>
                    <h1 className="JDM">Inventory</h1>
                    <div className="parent">
                        {inventory.inventory.map((item, key) => {
                            return (
                                <article className="child">
                                    <img className="images" src={item.image}/>
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <h5>{item.price}</h5>
                                </article>
                            )})}
                    </div>
            </div>
        )
    }
}

export default Inventory;