import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import {useState} from 'react'
import axios from 'axios';
import { useNavigate,useLocation } from "react-router-dom";
import Blogpost from "../Model/blog";
import Layout from '../Layout/Layout';

function View() {
  const {id}=useParams()
  const location = useLocation()
  // const [blog,setBlog] = useState()
  const [text,setText] =useState('')
  const navigate = useNavigate()
  // fetch(`http://localhost:5000/blog/${id}`)
  //           .then(response => response.json())
  //           .then(json => setBlog(json))
  let blog =  Blogpost.find(item=> item.id == id)
  const hanleComent = (e)=>{
    e.preventDefault()
    // axios.post(`http://localhost:5000/blog/${id}/comment`,{
    //         id: id,
    //         comment: text
    // })
    Blogpost.forEach(item=>{
      if(item.id==id){
        item.comments.push(text)
      }
    })
    navigate(location.pathname)
  }
    return (
        <Layout>
<div>
          <Link to="/" className='btn btn-primary ms-2 mt-2'>Home</Link>
          <div >
                <h1 className='mx-auto' style={{width: '200px'}}> {blog?.title}</h1>
          </div>
            Nội dung
            <blockquote>
            {blog?.content}
            </blockquote>
            <div>
              <form method="POST" onSubmit={hanleComent}>
                <div class="form-group">
                  <label for="comment-text">Comment</label>
                  <textarea
                    name="text"
                    class="form-control"
                    id="comment-text"
                    rows="3"
                    placeholder="Write your comment here"
                    required
                    onChange={(e)=>setText(e.target.value)}
                    value={text}
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-primary float-right mt-2 mb-2">Gửi</button>
              </form>
            </div>
            <div class="card">
              <div class="card-header">
                Comment
              </div>
              <ul class="list-group list-group-flush">
                {blog?.comments?.map(item=>(
                    <li class="list-group-item">{item}</li>
                ))}     
              </ul>
            </div>

          </div>
        </Layout>
        
        
      );
}

export default View;