import styled from "styled-components";
import { motion } from "framer-motion";

export const Image = styled(motion.img)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
`;
