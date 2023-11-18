/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


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

const TableBody = (props) => {
    // boilerplate table body functional component
    // we use Array.map to create table rows from LinkData passed via props
    console.log(props.linkData)
    
    return(
        <tbody>
            {
                props.linkData.map((data, index)=>{
                    return <tr key={index}>
                        <td>{data}</td>
                    </tr>
                })
            }
        </tbody>
    )
    // return <tbody>{rows}</tbody>
  }

function Table(props){
    // console.log(props.linkData)
    return (
        <table>
             <TableHeader/>
             <TableBody linkData={props.linkData}/>
        </table>
    )
}

export default Table