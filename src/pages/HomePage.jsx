import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const fetchData = await fetch("https://dummyjson.com/posts");
      console.log(fetchData); //Giving Response
      const jsonBlogData = await fetchData.json(); //to convert json
      console.log(jsonBlogData); //Array of Object
      console.log(jsonBlogData.posts); //I need post array of Object Only
      setPosts(jsonBlogData.posts);
    };
    fetchPost();
  }, []);

  const myData = posts.map((item) => {
    return (
      <div class="container mx-auto p-4" key={item.id}>
        <div class="max-w-xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">{item.title}</h2>
            <p class="text-gray-600">{item.body}</p>
          </div>

          <div class="p-4 border-t border-gray-200">
            <div class="flex space-x-2">
              <span class="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded">
                {item.tags[0]}
              </span>
              <span class="inline-block bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded">
                {item.tags[1]}
              </span>
              <span class="inline-block bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded">
                {item.tags[2]}
              </span>
            </div>
          </div>

          <div class="p-4 border-t border-gray-200">
            <div class="flex justify-between items-center text-sm text-gray-500">
              <div class="flex space-x-4">
                <div class="flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm5.93 3.88a.75.75 0 01.98-.06L10 15l1.09-1.18a.75.75 0 011.03.03l1.5 1.5a.75.75 0 11-1.06 1.06L11 15.92l-.93.95a.75.75 0 11-1.06-1.06l1.12-1.17-.93-.94a.75.75 0 01-.05-.98zm.7-4.56c.2.2.51.2.71 0l2-2a.5.5 0 00-.71-.71l-2 2a.5.5 0 000 .71zm3.56-.47a.75.75 0 11-1.06-1.06l1.5-1.5a.75.75 0 011.06 0l1.5 1.5a.75.75 0 11-1.06 1.06L12 9.44l-1.15 1.18zm1.77 3.78a.75.75 0 01-1.06 1.06l-1.5-1.5a.75.75 0 011.06-1.06l1.5 1.5z" />
                  </svg>
                  <span>{item.reactions.likes}</span>
                </div>
                <div class="flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.8 3.4c-.4.2-.8.8-1 1.2-.2.6-.3 1.3-.4 1.9-.1.6-.3 1.2-.7 1.5-.2.2-.3.5-.2.8.1.2.3.4.5.5l.5.3c.4.2.7.3 1.1.4.3.2.7.4 1 .7.4.3.8.7 1.1 1.1.3.5.5.9.6 1.3.3 1.2.4 2.4.4 3.6-.1.8.3 1.6.9 2 .6.4 1.4.5 2.2.5.5 0 1.1-.2 1.6-.5.6-.4.9-1 .9-1.6V10c0-.5-.4-.8-.8-1-.3-.2-.6-.4-.9-.5l-.7-.3c-.6-.2-1-.4-1.3-.8-.4-.5-.6-1.2-.6-1.9 0-.8-.1-1.5-.3-2.3-.1-.8-.4-1.6-.7-2.3-.4-.7-.9-1.3-1.5-1.9-.6-.5-1.4-1-2.1-1.2-.5-.2-1-.3-1.5-.3-.6 0-1.2.2-1.7.6zm1.5 3.1c.6-.5 1.3-.8 2-.9.7-.2 1.4.1 1.8.6.5.5.8 1.2.8 2 .1.7-.3 1.4-.8 1.8-.5.4-1.1.6-1.7.5-.7-.1-1.3-.4-1.8-.9-.4-.5-.7-1.2-.6-1.9 0-.6.3-1.2.8-1.6z" />
                  </svg>
                  <span>{item.reactions.dislikes}</span>
                </div>
              </div>
              <div>
                <span>{item.views}</span>
              </div>
            </div>
          </div>

          <div class="p-4 bg-gray-50 text-right border-t border-gray-200">
            <span class="text-sm text-gray-500">
              Posted by User #{item.userId}
            </span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-lime-100 max-w-5xl mx-auto rounded-lg shadow-lg">
      <h4 className="text-2xl underline font-semibold text-center mb-0 pt-2 text-blue-800 font-serif">
        Latest Posts
      </h4>
      {myData}
    </div>
  );
};

export default HomePage;
