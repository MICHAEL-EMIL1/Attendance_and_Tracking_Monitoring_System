import React from "react";

const sizes = {
  xs: "text-sm font-normal leading-5",
  s: "text-xl font-medium leading-6",
  md: "text-2xl font-medium",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
