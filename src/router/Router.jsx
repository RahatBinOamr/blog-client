import { createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogDetails from '../components/Blog/Blog/BlogDetails';
import EditBlog from '../components/Blog/Blog/EditBlog';
import CreatePost from '../components/Blog/CreateBlogPost/CreatePost';
import RelatedBlogDetails from '../components/Blog/RelatedBlog/RelatedBlogDetails';
import Home from '../components/Page/Home';
import Main from '../layouts/Main';
import Login from '../shared/Login';
import Register from '../shared/Register';
export const router = createBrowserRouter([
  <ToastContainer />,
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/createBlog',
        element: <CreatePost />,
      },
      {
        path: '/blog/:id',
        element: <BlogDetails />,
      },
      {
        path: '/relatedBlog/:id',
        element: <RelatedBlogDetails />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/editBlog/:id',
        element: <EditBlog />,
      },
    ],
  },
]);
