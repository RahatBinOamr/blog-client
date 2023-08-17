import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllBlogsQuery } from '../../../redux/api';
import { valueSet } from '../../../redux/button/buttonAction';
import Blog from './Blog';
import BlogLoading from './BlogLoading';
import BlogPagination from './BlogPagination';

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [postsPerPage] = useState(6);
  const searchValue = useSelector(store => store?.searchData?.searchValue);
  const buttonValue = useSelector(store => store?.buttonData?.buttonValue);

  const { data, isLoading, isError } = useGetAllBlogsQuery(
    `/?search=${searchValue}&category=${buttonValue}`
  );
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data?.blogs?.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const dispatch = useDispatch();
  if (isLoading) {
    <BlogLoading />;
  }
  if (isError) {
    toast.error('something went wrong!!');
  }
  const uniqueCategories = [
    ...new Set(data?.blogs?.map(item => item.category)),
  ];

  const handelButton = category => {
    setSelectedCategory(category);

    dispatch(valueSet(category));
  };

  return (
    <>
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        {uniqueCategories?.map((data, index) => (
          <button
            key={index}
            value={data}
            onClick={() => handelButton(data)}
            className={`p-2 rounded-md me-2 mt-2 ${
              data === selectedCategory ? 'bg-slate-400' : 'bg-cyan-400 '
            }`}
          >
            {data}
          </button>
        ))}
      </div>
      <div className="w-full  pb-10  text-black">
        <section className="  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
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
    </>
  );
};

export default Blogs;
