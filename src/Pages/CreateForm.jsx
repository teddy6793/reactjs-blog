import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Blogpost from "../Model/blog";
function CreateFrom() {
    const navigate = useNavigate()
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const hanleSubmit = (e)=>{
        e.preventDefault()

        Blogpost.push({
            id:Blogpost.length+1,
            title: title,
            content: content,
            comments: []
        })
        navigate('/')
    }
    return (
        <form method="POST" onSubmit={hanleSubmit}>
            <div className="form-group">
            <label for="floatingInput" className='bg-dark text-warning rounded w-100 text-center p-2'>Blog title</label>
            <input
                type="text"
                className="form-control border-success"
                id="floatingInput"
                placeholder="Title"
                name="title"
                required
                onChange={(e)=>setTitle(e.target.value)}
            />
            </div>
        
            <div className="form-group">
            <label for="content" className='bg-dark text-warning rounded w-100 text-center p-2'>Content</label>
            <textarea
                name="content"
                className="form-control border-success"
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

export default CreateFrom;