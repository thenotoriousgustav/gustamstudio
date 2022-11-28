import Footer from "../components/Footer";
import Navbar from "../components/Navigation/Navbar";

export default function Contact() {
  return (
    <section className='h-screen bg-background '>
      <Navbar />
      <div className='px-4 pt-24 text-secondary lg:px-10'>
        <h1 className='font-satoshi text-7xl font-medium md:text-8xl'>
          Let's talk about <span className='block'> the project </span>
        </h1>
        <div className='mt-10 text-lg md:mt-16 md:flex md:justify-between'>
          <div className='flex flex-col text-2xl'>
            <h6 className='mb-1 text-lg font-medium text-green-600'>
              Contact us for business inquiries:
            </h6>
            <a href='/'>rhezagustam@gmail.com</a>
            <a href='/'>+62 859 4047 6706</a>
          </div>

          <div className='flex flex-col text-2xl'>
            <h6 className='mt-6 mb-1 text-lg font-medium text-green-600 md:mt-0'>
              Office:
            </h6>
            <p>Jakarta, Indonesia</p>
            <p>Monday - Thursday 9am to 6pm</p>
          </div>

          <div className='mb-1 flex flex-col text-2xl md:mb-0'>
            <h6 className='mt-6 mb-1 text-lg font-medium text-green-600 md:mt-0'>
              Or just say hi:
            </h6>
            <a href='/' className='underline'>
              Instagram
            </a>
            <a href='/' className='underline'>
              Twitter
            </a>
            <a href='/' className='underline'>
              Behance
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
