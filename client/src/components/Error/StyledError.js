import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const Inner = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
`;

export const Text = styled.p`
  text-align: center;
  margin-bottom: 30px;
`;
