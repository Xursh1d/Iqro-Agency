import { ReactNode } from "react";

export type NavLinkType = {
  title: string;
  active?: boolean;
  icon: ReactNode;
  link: string;
};

export interface ISidebarProps {
  open: boolean;
  setOpen: (status: boolean) => void;
}

export interface INavLinkProps {
  list: NavLinkType;
  open: boolean;
  index: number;
}
