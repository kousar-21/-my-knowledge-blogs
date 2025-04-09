import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark, handleMarkedAsread}) => {
    // console.log(blog)
    const {id, cover, title, author_img, author, reading_time} = blog;

    return (
        <div className='mt-5'>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={cover}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="author flex justify-around items-center">
                        <h3>{author}</h3>
                        <img className='w-16' src={author_img} alt="" />
                        <button onClick={()=>handleBookMark(blog)}>
                            <FaBookmark size={25} />
                        </button>

                    </div>
                    <h2 className="card-title">{title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="flex">
                        {
                            blog.hashtags.map(has => <p key={has}>{has}</p>)
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleMarkedAsread(reading_time, id)} className="btn btn-primary">mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;