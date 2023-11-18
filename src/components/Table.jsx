/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react"


function TableHeader(){
    /* responsible for rendering the head of our table with the appropriate columns*/
    return(
    <thead>
        <tr>
            <th>Name</th>
            <th>URL</th>
            <th>Remove</th>
        </tr>
    </thead>
    )
}

function TableBody(){
    // boilerplate table body functional component
    // we use Array.map to create table rows from LinkData passed via props
 
  
    return (
    <tbody>
      
    </tbody>
    )
  }

function Table(){
   
    return (
        <table>
             <TableHeader/>
             <TableBody/>
        </table>
    )
}

export default Table