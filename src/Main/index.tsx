import {
  Container,
  CategoriesContainer,
  MenuContainer,
  Footer,
} from './styles';

import { Header } from '../components/Header';
import { FooterContainer } from './styles';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu';

export function Main() {
  return (
    <>
      <Container>
        <Header />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>

      <Footer>
        <FooterContainer></FooterContainer>
      </Footer>
    </>
  );
}
