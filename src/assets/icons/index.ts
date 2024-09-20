import hugeIcon from "./hugeIcon.json";
import myIcon from "./myIcon.json";
import remixIcon from "./remixIcon.json";

const allIcon = {
  ...hugeIcon,
  ...remixIcon,
  ...myIcon,
};

export type IconName = keyof typeof allIcon;

export default allIcon;
