import { Footer } from './Footer';
import { Header } from './Header';
import { ChildrenContainer } from './Layout.styles';
import { LayoutProps } from './Layout.types';

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <ChildrenContainer>{children}</ChildrenContainer>
      <Footer />
    </>
  );
};

export { Layout };
