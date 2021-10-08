import React from 'react';
import {Link} from 'react-router-dom';
import "./Home.css"
export default function Sidenav(){
    return(
       

        
        <div className=" col-3 col-sm-3 col-lg-2  pl-lg-5 " 
        style={{height:"140vh", fontSize:"1.3rem",borderRight:"1px solid black",backgroundColor:"#d4d5d6",borderLeft:"1px solid black"}}>
             <div className="sidenav">
        <p style={{marginTop:"20%"}}><Link class="btn btn-dark" to="/">&nbsp;&nbsp;Home&nbsp;&nbsp;</Link></p>
        <p style={{marginTop:"20%"}} class="btn btn-dark">&nbsp;&nbsp;Public&nbsp;&nbsp;&nbsp;</p>
        
        <p className="ml-lg-3"><Link class="btn btn-dark" to="/tags">   &nbsp;&nbsp;  Tags  &nbsp;&nbsp;&nbsp;  </Link></p>
        <p className="ml-lg-3"><Link class="btn btn-dark" to="/users">    &nbsp;&nbsp; Users &nbsp;&nbsp;  </Link></p>    
        <p><Link class="btn btn-dark" to="/questions">Questions</Link></p>             
     </div>   
     </div>   
    )
}