import React from 'react';
import { useGlobalContext } from './Context';

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();

  if (isLoading) {
    return( 
    <div>
      <h2>Loading...</h2>
      </div>
    );
  }
  return (
  <div>
    <div className="stories-div">
      {hits.map((curPost) => {
        const { title, author, ObjectID, url, num_comments } = curPost;

        return (
        <div className="card" key={ObjectID}>
          <h2>{title}</h2>
          <p>
            By <span> {author} </span> | <span>{num_comments}</span>comments
          </p>
          <div className="card-button">
            <a href={url} target="_blank">Read More
            </a>
         
          </div>
        </div>
        );
      })}
     </div>
  </div>
  );
};
export default Stories;
