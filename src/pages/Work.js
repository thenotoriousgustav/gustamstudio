import { useState, useEffect } from "react";

import client from "../client";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";

import Navbar from "../components/Navigation/Navbar";

export default function Work() {
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
    <section className='bg-background'>
      <Navbar />
      <div className='px-4 pt-28 lg:px-10'>
        <h1 className='font-satoshi text-7xl font-medium text-white'>Work</h1>
        <div className='mt-12 flex flex-wrap justify-between gap-12 text-white'>
          {Posts.map((post) => (
            <div key={post.slug.current}>
              <img
                src={post.mainImage.asset.url}
                alt='work'
                className='h-96 w-[550px] object-cover'
              ></img>
              <div className='mt-3 flex justify-between text-secondary  '>
                <p>Design - Development</p>
                <p>2022</p>
              </div>
              <Divider variant='short' />
              <h2 className='-mt-1 text-2xl font-light'>{post.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <GetInTouch />
      <Footer />
    </section>
  );
}
