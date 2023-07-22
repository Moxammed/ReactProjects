import React from "react";

interface im {
 image: {
  user: number;
  views: number;
  downloads: number;
  likes: number;
  webformatURL: string;
 };
}

const ImageCard = ({ image }: im) => {
 const tags = image.tags.split(",");
 //  console.log(tags);
 //  console.log(image.tags);

 return (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
   <img src={image.webformatURL} alt="random" className="w-full" />
   <div className="px-6 py-4">
    <div className="font-bold text-red-700 text-xl mb-2">
     Photo by {image.user}
    </div>
    <ul>
     <li>
      <strong>views: </strong>
      {image.views}
     </li>
     <li>
      <strong>Downloads: </strong>
      {image.downloads}
     </li>
     <li>
      <strong>Likes: </strong>
      {image.likes}
     </li>
    </ul>
   </div>
   <div className="px-6 py-4">
    {tags.map((tag: string) => (
     <span
      key={tag}
      className="inline-block rounded-full bg-gray-200 text-gray-700 font-semibold px-3 py-1 mr-2 text-sm"
     >
      #{tag.trim()}
     </span>
    ))}
   </div>
  </div>
 );
};

export default ImageCard;
