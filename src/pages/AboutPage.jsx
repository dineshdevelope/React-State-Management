import React from "react";
import { useParams } from "react-router-dom";

const AboutPage = () => {
  //const params = useParams();
  //console.log(params);
  //Using Object Destcture
  const { name } = useParams();
  //specify the key {name} in routes
  //console.log(`The name Value geting from dynamic ${name}`);

  return (
    <div className="m-10">
      <h4 className="text-xl font-semibold mb-3">About</h4>
      <div className="bg-white p-10 rounded">
        <h5>Welcome {name ? name : "Guest"}, this is About page</h5>
      </div>
    </div>
  );
};

export default AboutPage;
