import Navbar from "../components/Navigation/Navbar";
import Divider from "../components/Divider";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";

import { dataTeam } from "../Data";

export default function About() {
  return (
    <section className='bg-background'>
      <Navbar />
      <div className='px-4 pt-28 lg:px-10'>
        <h1 className='mx-auto w-9/12 py-4 text-center font-satoshi text-5xl font-medium text-white md:w-8/12 md:text-7xl'>
          We’re an development studio that makes @*#$£°! stories for you.
        </h1>
        <Divider variant='long' />
        <div className='md:flex md:space-x-4'>
          <div className='mt-6 text-xl md:w-5/12'>
            <h1 className='font-satoshi text-5xl font-medium text-white md:text-6xl'>
              We are <span className='block'> gstm.studio</span>
            </h1>
            <p className='mt-8 font-light text-secondary'>
              gstm.studio ✧ is a small team on purpose. We love working directly
              with brave founders and decision-makers to create ✧ beautiful,
              thoughtful work.
            </p>
            <p className='mt-6 font-light text-secondary'>
              gstm.studio ✧ is a small team on purpose. We love working directly
              with brave founders
            </p>
          </div>
          <img
            src='assets/images/abstract.jpg'
            alt='about'
            className='mt-4 rounded-md rounded-br-[80px] object-cover md:w-7/12'
          ></img>
        </div>
        <Divider variant='long' />

        <div>
          <div className='mt-6 md:mt-12 md:flex md:items-start md:space-x-6'>
            <div className='md:w-5/12'>
              <h2 className='font-satoshi text-4xl font-medium text-white md:text-5xl'>
                Who we are ?
              </h2>
              <p className='mt-4 text-xl font-light text-secondary md:mt-4 '>
                gstm.studio was founded by Gustam Rheza, a designer and
                developer. He's been working in the digital space for over 2
                years, and has worked with a variety of clients, from startups
                to large corporations.
              </p>
            </div>

            <div className='hide-scroll-bar mt-8 flex snap-x snap-proximity overflow-x-scroll md:mt-0 md:w-7/12'>
              <div className='flex snap-center flex-nowrap space-x-5'>
                {dataTeam.map((item) => (
                  <div>
                    <img
                      src={item.img}
                      alt={item.name}
                      className='h-96 w-72 max-w-xs rounded-lg bg-white object-cover'
                    ></img>
                    <div className='mt-4 text-xl'>
                      <p className='font-medium text-white'>{item.name}</p>
                      <p className='text-green-600'>{item.role}</p>
                      <p className='text-green-600'>{item.job}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Divider variant='long' />
        <div className='text-secondary'>
          <h2 className='font-satoshi text-4xl font-medium text-white md:text-5xl'>
            What we do
          </h2>
          <h3 className='mt-8 text-2xl text-white'>We build each other up.</h3>
          <p className='mt-4 text-xl font-light md:w-6/12'>
            We spend our days building sites and building up each other. A new
            project means a new opportunity to connect, collaborate, and
            celebrate our clients and teammates. In it together, and in it for
            the long run.
          </p>

          <div className='mt-8 space-y-2 text-lg font-light text-secondary'>
            <h4 className='text-xl text-white md:mb-4'>Our Services</h4>
            <p>Mobile app development</p>
            <p>Website development</p>
            <p>UI/UX design</p>
            <p>Brand design</p>
          </div>
        </div>
      </div>
      <GetInTouch />
      <Footer />
    </section>
  );
}
