import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src={post.coverImageUrl} 
        alt={post.title} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.summary}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">By {post.authorName}</span>
          <Link 
            to={`/post/${post.id}`} 
            className="text-indigo-600 hover:text-indigo-800 font-semibold"
          >
            Read More &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}