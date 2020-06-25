import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { list, removeBlog } from '../../actions/blog';
import moment from 'moment';
//import { API } from '../../config';


const BlogRead = () => {
    const [blogs, setBlogs] = useState([]);
    const [message, setMessage] = useState('');
    const token = getCookie('token');

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = () => {
        list().then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                setBlogs(data);
            }
        });
    };

    const deleteBlog = (slug) => {
        removeBlog(slug, token).then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                setMessage(data.message)
                loadBlogs();
            }

        });
    };

    const deleteConfirm = (slug) => {
        let answer = window.confirm("Are you sure you eant to delete your blog?");
        if(answer) {
            deleteBlog(slug);
        }
    };

    const showUpdateButton = (blog) => {
        if(isAuth() && isAuth().role === 0) {
            return (
                <Link href={`/user/crud/${blog.slug}`}>
                    <a className="btn btn-sm btn-warning">Update</a>
                </Link>
            )
        } else if (isAuth() && isAuth().role === 1) {
            return (
                <Link href={`/admin/crud/${blogs.slug}`}>
                    <a className="ml-3 btn btn-sm btn-warning">Update</a>
                </Link>
            );

        };
    };
      
    const showAllBlogs = () => {
        return blogs.map((blog, i) => {
            return (
                <div key={i} className="pb-5">
                    <h3>{blog.title}</h3>
                    <p className="mark">Written by {blog.postedBy.name} | Published on {moment(blog.updatedAt).fromNow()}</p>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteConfirm(blog.slug)}>
                        Delete
                    </button>
                    {showUpdateButton()}
                </div>
            );
        });
    };

    return (
    <React.Fragment>
        <div className="row">
            <div className="col-md-12">
                {message && <div className="alert alert-warning">{message}</div>}
                {showAllBlogs()}
            </div>
        </div>
    </React.Fragment>
);
};

export default BlogRead;