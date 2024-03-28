import React from "react";
import PropTypes from "prop-types";


const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    indigo_800: "bg-indigo-800 shadow-md text-white-A700_01",
    gray_200_01: "bg-gray-200_01 shadow-xs",
    indigo_A700: "bg-indigo-A700 text-white-A700_01",
    blue_gray_900: "bg-blue_gray-900 text-white-A700_01",
    light_green_A700: "bg-light_green-A700 text-white-A700_01",
    red_A400: "bg-red-A400 text-black-900",
  },
};
const sizes = {
  md: "h-[49px] pl-[7px] pr-6 text-[17px]",
  xs: "h-[35px] px-[35px] text-[13px]",
  lg: "h-[51px] px-[34px] text-2xl",
  sm: "h-[43px] px-[7px]",
  xl: "h-[70px] px-[35px] text-2xl",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "sm",
  color = "indigo_800",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["md", "xs", "lg", "sm", "xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["indigo_800", "gray_200_01", "indigo_A700", "blue_gray_900", "light_green_A700", "red_A400"]),
};

export { Button };
