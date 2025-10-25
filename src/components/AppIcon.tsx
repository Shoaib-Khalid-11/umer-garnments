import React from "react";
import { Icon } from "@iconify/react";
import type { IconProps } from "@iconify/react";
export const AppIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <>
      <Icon {...props} />
    </>
  );
};

export default AppIcon;
