import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
  return (
    <article className="flex flex-col shadow-lg ">
      <Link
        rel="noopener noreferrer"
        to={`/blog/${blog._id}`}
        aria-label="Te nulla oportere reprimique his dolorum"
      >
        <img
          alt=""
          className=" w-full h-52 dark:bg-gray-500"
          src={blog.image}
        />
      </Link>
      <div className="flex flex-col flex-1 p-6">
        <Link
          rel="noopener noreferrer"
          to={`/blog/${blog._id}`}
          aria-label="Te nulla oportere reprimique his dolorum"
        ></Link>
        <Link
          rel="noopener noreferrer"
          to={`/blog/${blog._id}`}
          className="text-lg tracking-wider  uppercase hover:underline dark:text-violet-900"
        >
          {blog.title}
        </Link>
        <Link to={`/blog/${blog._id}`}>
          <h2 className="flex-1 py-2 text-sm font-semibold ">
            {blog.summary?.length > 100 ? (
              <> {blog.summary?.slice(0, 100) + '...'} </>
            ) : (
              blog.summary
            )}
          </h2>
        </Link>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
          <span> {blog?.createdAt?.substring(0, 10)}</span>
          <span>2.1K views</span>
        </div>
      </div>
    </article>
  );
};

export default Blog;
