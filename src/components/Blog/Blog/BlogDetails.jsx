import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  useDeleteBlogMutation,
  useGetSingleBlogQuery,
} from '../../../redux/api';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: blog } = useGetSingleBlogQuery(id);
  const [deleteData, { isLoading, isError }] = useDeleteBlogMutation();
  const handelDeleteBlog = id => {
    const aggre = window.confirm(
      `Are you sure you want to delete : ${blog?.title}`
    );
    if (aggre) {
      deleteData(id);
      toast.success('Book deleted successfully');
      navigate('/');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
    if (!token) {
      navigate('/login');
    }
  }, []);
  return (
    <>
      <div className=" ">
        <Link to={'/'}>
          <button className="bg-cyan-500 p-2 rounded-md shadow-md">
            Back To Home
          </button>
        </Link>
      </div>
      <div className="w-full text-black">
        <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  ">
          <div>
            <img
              src={blog?.image}
              alt=""
              className="bg-gray-600 p-3 shadow-md w-full h-72"
            />
          </div>
          <div className="flex items-center justify-between mt-3 mb-2">
            <Link to={`/editBlog/${id}`}>
              <FiEdit size={40} className="text-cyan-400" />
            </Link>
            <MdDeleteForever
              onClick={() => handelDeleteBlog(id)}
              size={40}
              className="text-red-400"
            />
          </div>
          <div className="mt-8">
            <h1 className="text-xl font-bold ">{blog?.title} </h1>
          </div>
          <div dangerouslySetInnerHTML={{ __html: blog?.description }} />
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
