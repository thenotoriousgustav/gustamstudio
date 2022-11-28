import Button from "./Button";

export default function AboutUs() {
  return (
    <div className='mt-12 px-4 lg:px-10'>
      <h1 className='font-satoshi text-7xl font-medium text-white'>
        About Us<span className='ml-1 text-xl'>(03)</span>
      </h1>
      <div className='md:flex md:items-center md:space-x-10'>
        <p className='mt-4 text-2xl lowercase text-secondary md:w-4/12'>
          AN INTERNATIONAL DIGITAL STUDIO REIMAGINING HOW PEOPLE CONNECT WITH
          BRANDS.
        </p>
        <p className='mt-4 text-secondary md:w-7/12'>
          We're a small team of curious humans who create work we’re proud of
          for people and brands we believe in. With collaboration at the heart
          of every project, we identify what skills are required and then bring
          the best people together to create something truly extraordinary.
          Combining strategy, branding, web design and development, we build
          digital experiences that transform the way people connect and interact
          with brands.
        </p>
      </div>
      <div className='mt-6 flex space-x-4 md:space-x-6 lg:mt-10'>
        <img
          src='assets/images/abstract.jpg'
          alt='about'
          className='w-3/5 rounded-lg object-cover md:h-96 md:w-4/6'
        ></img>
        <img
          src='assets/images/abstract-1.jpg'
          alt='about'
          className='w-2/6 rounded-lg object-cover md:h-96 md:w-2/6'
        ></img>
      </div>
      <Button variant='long'>Get to know us --</Button>
    </div>
  );
}
