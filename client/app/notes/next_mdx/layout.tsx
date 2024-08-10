import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <main className="container">{children}</main>;
};

export default Layout;
