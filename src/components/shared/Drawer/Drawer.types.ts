import { ReactNode, MouseEventHandler } from "react";

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLDivElement> | undefined;
}

export default DrawerProps;
