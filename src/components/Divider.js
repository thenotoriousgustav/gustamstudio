import classNames from "classnames";

export default function Divider({ variant, none }) {
  const variants = {
    short: "my-4",
    long: "my-12",
  };

  const pickedVariant = variants[variant];

  return (
    <div
      className={classNames(
        "border-t border-secondary",
        none && "border-none",
        pickedVariant
      )}
    ></div>
  );
}
