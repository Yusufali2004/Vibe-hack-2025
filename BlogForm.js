// src/components/BlogForm.js
import React, { useState } from "react";
import { supabase } from "../supabaseClient";

function BlogForm({ user, fetchBlogs }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    if (!title || !content) return alert("Fill all fields");

    const { data, error } = await supabase
      .from("posts")
      .insert([{ title, content, user_id: user.id }]);

    if (error) console.error(error);
    else {
      setTitle("");
      setContent("");
      fetchBlogs();
    }
  };

  return (
    <div>
      <h2>Create Blog</h2>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Blog</button>
    </div>
  );
}

export default BlogForm;
