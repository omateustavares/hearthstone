import Cards from "../../components/Cards";
import DafaultLayout from "../_layouts/default";
import { DASHBOARD_ANIMATION } from "./animations";
import MainContent from "./MainContent";
import { AnimatedWrapper, Container } from "./styles";

function Dashboard() {
  return (
    <DafaultLayout>
      <Container>
        <AnimatedWrapper
          variants={DASHBOARD_ANIMATION}
          initial="unMounted"
          animate="mounted"
          exit="unMounted"
          transition={{ duration: 1.5 }}
        >
          <MainContent />
        </AnimatedWrapper>
      </Container>
    </DafaultLayout>
  );
}

export default Dashboard;
