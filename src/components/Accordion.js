import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const AccordionContainer = styled.div`
  border-top: 1px solid #ddd;
`;

const AccordionHeader = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 20px 0;
  text-align: left;
  font-size: 1.4rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: #004080;

  &:hover {
    color: #3366cc;
  }
`;

const AccordionContent = styled.div`
  padding: 0 0 20px 0;
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};

  ul {
    padding-left: 1.5rem;
    margin-top: 10px;
    list-style-type: disc;
  }

  li {
    margin-bottom: 8px;
  }
`;

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionContainer>
      <AccordionHeader onClick={() => setIsOpen(!isOpen)}>
        {title}
        <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronRight} />
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
