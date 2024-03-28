import React from "react";

const sizes = {
  xl: "text-5xl font-semibold",
  s: "text-xl font-extrabold",
  md: "text-2xl font-semibold",
  xs: "text-sm font-bold",
  lg: "text-[32px] font-black leading-[38px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
