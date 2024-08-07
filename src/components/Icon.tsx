import React from "react";
import iconData, { type IconName } from "@/assets/icons/index";

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: IconName;
  size?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = "1rem",
  className = "",
  ...rest
}) => {
  const svg = iconData[name];

  if (!svg) {
    console.error(`Icon with name "${name}" not found.`);
    return null;
  }

  const modifiedSvgContent = svg
    .replace(/width="[^"]*"/, `width="${size}"`)
    .replace(/height="[^"]*"/, `height="${size}"`);

  return (
    <span
      className={`icon-${name} ${className}`}
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: modifiedSvgContent }}
      aria-hidden="true"
      {...rest}
    />
  );
};

export default Icon;
