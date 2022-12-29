import { CONTAINER_ANIMATION } from "./animations";
import { AnimatedLeftNav, ImageLogo, Wrapper } from "./styles";
import HearthstoneLogo from "../../assets/images/hearthstoneLogo.png";

const Header = () => {
  return (
    <AnimatedLeftNav
      variants={CONTAINER_ANIMATION}
      initial="unMounted"
      animate="mounted"
      exit="unMounted"
    >
      <Wrapper>
        <ImageLogo src={HearthstoneLogo} alt="" />
      </Wrapper>
    </AnimatedLeftNav>
  );
};

export default Header;
