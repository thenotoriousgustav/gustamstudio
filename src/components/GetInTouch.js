export default function GetInTouch() {
  return (
    <section className='mt-16 mb-2 px-4 lg:px-10'>
      <div className='rounded-3xl bg-tersier p-4 text-white lg:p-8'>
        <h1 className='font-satoshi text-7xl font-medium'>
          <span className='block md:inline-block'>Get</span>{" "}
          <span>In Touch</span>
        </h1>
        <h3 className='mt-6 text-xl text-secondary lg:w-3/12'>
          We would love to hear from you. Let’s work — together
        </h3>
        <div className='text-lg md:mt-8 md:flex md:justify-between'>
          <div className='mt-6'>
            <h2 className='text-secondary'>Office</h2>
            <p>Jakarta, Indonesia</p>
            <p>Monday - Thursday 9am to 6pm</p>
          </div>
          <div className='mt-4'>
            <h2 className='text-secondary'>Business Inquiries</h2>
            <p>rhezagustam@gmail.com</p>
            <p>+62 859-4047-6706</p>
          </div>
          <div className='mt-4'>
            <h2 className='text-secondary'>Follow us</h2>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Behance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
