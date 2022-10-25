import { useState } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from "react-router-dom";
import Blogpost from "../Model/blog";
function UpdateFrom() {
    let {id} = useParams()
    const navigate = useNavigate()
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const hanleSubmit = (e)=>{
        e.preventDefault()
        // axios.post('http://localhost:5000/blog/update',{
        //     id: id,
        //     title: title,
        //     content: content
        // })
        Blogpost.forEach(item=>{
            if(item.id==id){
              item.title = title
              item.content = content
            }
          })
        navigate('/')
        
    }
    return (
        <form method="POST" onSubmit={hanleSubmit}>
            <div className="form-group">
            <label for="floatingInput">Blog title</label>
            <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Title"
                name="title"
                required
                onChange={(e)=>setTitle(e.target.value)}
            />
            </div>
        
            <div className="form-group">
            <label for="content">Content</label>
            <textarea
                name="content"
                className="form-control"
                id="content"
                rows="20"
                required
                onChange={(e)=>setContent(e.target.value)}
            ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      );
}

export default UpdateFrom;