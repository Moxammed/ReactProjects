import React, { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import GetSearch from "./components/GetSearch";

interface im {
 //  webformatURL: string;
 id: number;
}

const App = (im: im) => {
 const [images, setImages] = useState<im[]>([]);
 const [loading, setLoading] = useState(true);
 const [term, setTerm] = useState("");

 //  const configValue: string = process.env.REACT_APP_SOME_CONFIGURATION;

 useEffect(() => {
  const REACT_APP_PIXABAY_API = "38297821-030b77068f8302a7f614c33e3";
  fetch(
   `https://pixabay.com/api/?key=` +
    REACT_APP_PIXABAY_API +
    `&q=${term}&image_type=photo&pretty=true`
  )
   .then((res) => res.json())
   .then((data) => {
    setImages(data.hits);
    setLoading(false);
    // console.log(data);
   })
   .catch((err) => console.log(err));
 }, [term]);

 return (
  <>
   <div>
    <GetSearch onClick={(text) => setTerm(text)} />
   </div>
   <div className="container mx-auto">
    {loading ? (
     <h1 className="text-4xl text-red-600 text-center mx-auto mt-32">
      Items are loading ...
     </h1>
    ) : (
     <div className="grid grid-cols-3 gap-4">
      {images.map((image) => (
       <ImageCard key={image.id} image={image} />
       //  <img
       //   src={image.webformatURL}
       //   alt="random"
       //   key={image.id}
       //   className="w-full"
       //  />
      ))}
     </div>
    )}
   </div>
  </>
 );
};

export default App;
