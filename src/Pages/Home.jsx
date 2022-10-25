import Layout from "../Layout/Layout";
import { useState } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useNavigate,useLocation } from "react-router-dom";
import Blogpost from "../Model/blog";

function Home() {
    const navigate = useNavigate()
   
    const [text,setText] = useState('')
    const [blog,setBlog] = useState(Blogpost)
    try {
        // fetch('http://localhost:5000')
        //     .then(response => response.json())
        //     .then(json => setBlog(json))
        // setBlog(Blogpost)
    } catch (error) {
        console.error(error)
    }
   const hanleRemove = (id)=>{ 
        try {
            // axios.post(`http://localhost:5000/blog/${id}/delete`,{
            //     id: "id"
            // })
         
            const index = Blogpost.map(object => object.id).indexOf(parseInt(id));
            Blogpost.splice(index,1)
            console.log(Blogpost)
            setBlog(Blogpost)
            setText('')
            navigate('')
        } catch (error) {
            console.error(error)
        }
   }
   
    return ( 
        <Layout>
     
             <Link to={`/createForm`} className="me-1 btn btn btn-outline-dark btn-lg ms-2 mt-2 mb-2">Add Blog</Link>  
            {blog?.map(item=>(
                 <div className="card w-80">
                 <div className="">
                     <div className="card-title p-2 d-flex flex-row">
                        <div className="w-25">{item.title}</div>
                         <div className="ms-5">
                             <Link to={`/blog/${item.id}`} className="me-1 btn btn-info btn-sm">Xem</Link>      
                             <button className="me-1 btn btn-danger btn-sm" onClick={()=>hanleRemove(item.id)}>Xóa</button>
                             <Link to={`/blog/${item.id}/updateFrom`} className="btn btn-secondary btn-sm">Sửa</Link>
                         </div>
                     </div>
                 </div>
             </div>
            ))}
            
        </Layout>
     );
}

export default Home;