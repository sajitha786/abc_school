import React, {  useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
// import { useScrollTrigger } from '@material-ui/core';
 
function Drop(){

    const data1 = [ 
        {class :"class 1",id:1},
        {class :"class 2", id :2}, 
        {class :"class 3", id :3}, 
        {class :"class 4", id :4}, 
        {class :"class 5", id :5},
        {class :"class 6", id :6},
        {class :"class 7", id :7},
        {class :"class 8", id :8},
        {class :"class 9", id :9},
        {class :"class 10", id :10},
        {class :"class 11", id :11},
        {class :"class 12", id :12}
    ]
    const[options] =useState(data1);
    return(
        <div>
            <h3>MultiSelect DropDown useState</h3>
            <label For="tch_class">Class:</label>
            <Multiselect  id="tch_class"  ref="tch_class" onSelect={this.stdFormChange} name="tch_class"
            options={options}
            displayValue="class"
            />
            <button>Select</button>
        </div>
    );
        }

        export default Drop;