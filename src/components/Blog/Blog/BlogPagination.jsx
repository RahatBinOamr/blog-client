import React from 'react';

const BlogPagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="flex justify-center mb-10">
      <ul className="flex border-2 border-slate-500">
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              className={`${
                currentPage === number
                  ? 'bg-slate-300 text-black shadow-lg'
                  : 'bg-white text-gray-700'
              } hover:bg-gray-200 hover:text-gray-900 font-medium py-2 px-4 m-2`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BlogPagination;
