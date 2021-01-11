import React from 'react';

const Searchbar =(props) =>{
    return(
        <div className ="col col-sm-4">
            <input className ="form-control" 
            value={props.value}
             placeholder="Search ..."
             onChange={(event)=>props.setSearchValue(event.target.value)}>

            </input>
        </div>
    )
}


export default Searchbar;