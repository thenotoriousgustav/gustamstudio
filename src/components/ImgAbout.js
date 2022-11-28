export default function ImgAbout({ src, styles }) {
  return (
    <img
      src={src}
      alt='p'
      className={`mx-2 h-10 rounded-full object-cover lg:mx-3 lg:h-14 ${styles}`}
    ></img>
  );
}
