import BlogCard from './components/BlogCard';
import { mockPosts } from './mockData';

function App() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Latest Articles
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {mockPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default App;