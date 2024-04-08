import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
      console.log(data.posts);
    };
    fetchPosts();
  }, []);
  
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to Q&A Hub!</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
          Explore🚀 a diverse collection of questions and answers💡delving into the world of technology.🌐💻 From Programming, to any other Full Stack Tech🛠️, Join🤝 the community🌟👨‍💻 to learn, share, and grow in the world of technology. Welcome aboard! 🚀👩‍💻
        </p>
        <p className='text-gray-500 text-xs sm:text-sm'>
          If you want to ask question or to give your answers to any of the questions posted. Please sign in or sign up to continue.🚀👩‍💻
        </p>
        <p className='text-red-500 text-xs sm:text-sm'>
          NOTE:- You can also upload Image of the questions here. If you don't upload image then it will be set default image.
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          Dive into the Questions
        </Link>
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Questions</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              Explore More Questions
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
