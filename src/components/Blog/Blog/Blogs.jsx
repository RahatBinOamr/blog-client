import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetAllBlogsQuery } from '../../../redux/api';
import Blog from './Blog';
import BlogLoading from './BlogLoading';
import BlogPagination from './BlogPagination';

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const searchValue = useSelector(store => store?.searchData?.searchValue);

  const { data, isLoading, isError } = useGetAllBlogsQuery(
    `/?search=${searchValue}`
  );
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data?.blogs?.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (isLoading) {
    <BlogLoading />;
  }
  return (
    <div className="w-full  pb-10  text-black">
      <section className=" sm:py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <div className="container pt-10  mx-auto space-y-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {currentPosts?.map(blog => (
              <Blog key={blog?._id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
      <div className=" mx-auto text-center mt-10  ">
        <div>
          <BlogPagination
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            totalPosts={data?.blogs?.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
