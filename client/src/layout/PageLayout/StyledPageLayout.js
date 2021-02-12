import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  padding: 5rem 2rem;
  margin: 0 auto;

  @media (min-width: 375px) {
    padding: 6rem 3rem;
  }

  @media (min-width: 768px) {
    padding: 7rem 10%;
  }
`;
