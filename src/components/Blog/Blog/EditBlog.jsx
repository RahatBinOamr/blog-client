import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useGetSingleBlogQuery } from '../../../redux/api';

const EditBlog = () => {
  const { id } = useParams();
  const { data: blog } = useGetSingleBlogQuery(id);

  const [description, setDescription] = useState(blog?.description);
  const [title, setTitle] = useState(blog?.title);
  const [image, setImage] = useState(blog?.image);
  const [summary, setSummary] = useState(blog?.summary);
  const [category, setCategory] = useState(blog?.category);
  const navigate = useNavigate();

  const handelBlogEdit = e => {
    e.preventDefault();
    const blog = {
      description,
      title,
      image,
      summary,
      category,
    };
    fetch(`https://blog-server-inky.vercel.app/api/v1/blog/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(blog),
    })
      .then(res => res.json())
      .then(data => {
        console.log('hello', data);
        if (data.status === 'success') {
          toast.success('blog edit successfully');
          resetBlog();
          navigate('/');
        }
      })
      .catch(err => console.error(err));
  };
  const resetBlog = () => {
    setDescription('');
    setImage('');
    setSummary('');
    setTitle('');
    setCategory('');
  };

  return (
    <>
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-32 lg:px-20 ">
        <div className="font-serif items-center text-center mt-8 mb-5">
          <h1 className="text-3xl font-bold  text-black">Edit post</h1>
        </div>
        <div>
          <form
            onSubmit={handelBlogEdit}
            className=" bg-gray-100  rounded-lg px-12 py-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                name="blog title"
                type="text"
                placeholder=" blog title"
                className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <input
                name="blog Category"
                type="text"
                placeholder=" blog Category"
                className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
                value={category}
                onChange={e => setCategory(e.target.value)}
              />

              <input
                name="blog image url"
                type="text"
                placeholder="blog image url"
                className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
                value={image}
                onChange={e => setImage(e.target.value)}
              />
            </div>
            <textarea
              name="blog summary"
              className="textarea textarea-bordered mt-8  bg-white shadow-xl mb-8 h-16 w-full"
              value={summary}
              onChange={e => setSummary(e.target.value)}
              placeholder="blog summary"
            ></textarea>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={setDescription}
            />
            <button className=" bg-green-500 mt-5  text-white font-bold rounded-lg shadow-2xl p-3">
              Submit Your Blog
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditBlog;
