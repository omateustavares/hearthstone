import { CONTAINER_ANIMATION, NAVS_ANIMATION } from "./animations";
import {
  AnimatedLeftNav,
  AnimatedRightNav,
  ImageLogo,
  Wrapper,
} from "./styles";
import HearthstoneLogo from "../../assets/images/hearthstoneLogo.png";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const goToPageCreateCard = () => {
    navigate("/card-information", { state: { isNewCard: true } });
  };
  return (
    <AnimatedLeftNav
      variants={CONTAINER_ANIMATION}
      initial="unMounted"
      animate="mounted"
      exit="unMounted"
    >
      <Wrapper>
        <AnimatedLeftNav variants={NAVS_ANIMATION}>
          <ImageLogo src={HearthstoneLogo} alt="" />
        </AnimatedLeftNav>
        <AnimatedRightNav variants={NAVS_ANIMATION}>
          <Button variant="secondary" onClick={goToPageCreateCard}>
            Criar uma nova carta
          </Button>
        </AnimatedRightNav>
      </Wrapper>
    </AnimatedLeftNav>
  );
};

export default Header;
