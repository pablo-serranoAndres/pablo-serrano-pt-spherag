export interface IconProps {
  icon?: "user" | "noti" | "info" | "battery" | "signal" | "back";
  color?: "#333d78" | "#35a086";
  size?: number;
}

export interface IconCardProps extends IconProps {
  variant: "bgblank" | "bgblue" | "green";
  text?: string;
}
