import Divider from "./Divider";

export default function Services() {
  return (
    <>
      <Divider variant='long' />
      <div className='px-4 lg:px-10' id='services'>
        <h1 className='font-satoshi text-7xl font-medium text-white'>
          Services<span className='ml-1 text-xl'>(01)</span>
        </h1>
        <div className='mt-4 grid grid-cols-2 gap-x-10 gap-y-3 text-xl text-secondary md:mt-14 lg:grid-cols-3'>
          <h3 className='col-span-2 mt-6 md:col-span-1 md:row-span-3 md:mt-0 '>
            Working worldwide for :
          </h3>
          <p>Mobile app development</p>
          <p>Website development</p>
          <p>UI/UX design</p>
          <p>Brand design</p>
        </div>
      </div>
    </>
  );
}
