import classNames from "classnames";

export default function Button({ children, variant }) {
  const variants = {
    short: "mt-4",
    long: "mt-8",
  };
  const pickedVariant = variants[variant];
  return (
    <a
      href='/'
      className={classNames(
        "inline-block rounded-full border-2 border-green-500 px-4 py-2 text-lg text-white",

        pickedVariant
      )}
    >
      {children}
    </a>
  );
}
