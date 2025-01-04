export interface NavLinkProps {
  href: string;
  isActive?: boolean;
  variant?: "download" | "discord";
  children: React.ReactNode;
}
