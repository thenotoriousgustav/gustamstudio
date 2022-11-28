import { useState, useEffect } from "react";

import client from "../client";

import Divider from "./Divider";

export default function FeaturedWork() {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        price,
        floor,
        bedroom,
        size,
        address,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);
  return (
    <>
      <Divider variant='long' />
      <section className='px-4 lg:px-10'>
        <div>
          <h1 className='font-satoshi text-7xl font-medium text-white'>
            Featured Work<span className='ml-1 text-lg'>(02)</span>
          </h1>
        </div>

        <div className='mt-12 grid grid-cols-1 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-14'>
          {Posts &&
            Posts.slice(0, 4).map((post) => (
              <div key={post.slug.current}>
                <img
                  src={post.mainImage.asset.url}
                  alt='featured work'
                  className='h-72 w-full object-cover'
                ></img>
                <Divider variant='short' />
                <div className='flex justify-between text-secondary'>
                  <p>Design - Development</p>
                  <p>2022</p>
                </div>
                <h3 className='mt-2 text-xl text-white'>{post.title}</h3>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
