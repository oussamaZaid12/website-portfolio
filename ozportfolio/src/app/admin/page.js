"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admin() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [tools, setTools] = useState('');
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('/api/blogs')
      .then(response => setBlogs(response.data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { title, description, date, imageUrl, tools };
    axios.post('/api/blogs', newBlog)
      .then(response => setBlogs([...blogs, response.data]))
      .catch(error => console.error('Error creating blog:', error));
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
        <input type="text" value={tools} onChange={(e) => setTools(e.target.value)} placeholder="Tools" />
        <button type="submit">Create Blog</button>
      </form>
      <h2>Existing Blogs</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
}
