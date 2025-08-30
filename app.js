import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";

function App() {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from Supabase
  const fetchBlogs = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("id,title,content,created_at,user_id")
      .order("created_at", { ascending: false });
    if (error) console.error(error);
    else setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Devnovate Blogging Platform</h1>

      {!user && <p>Please login/signup using Supabase auth (demo mode)</p>}

      {user && (
        <BlogForm user={user} fetchBlogs={fetchBlogs} />
      )}

      <BlogList blogs={blogs} />
    </div>
  );
}

export default App;
