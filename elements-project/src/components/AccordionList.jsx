import React from "react";
import AccordionItem from "./accordion-list-elements/AccordionItem";
import { useState } from "react";

const AccordianList = ({ faqs }) => {
  const [currentOpen, setCurrentOpen] = useState(null);
  return (
    <ul className="accordion">
      {faqs.map((faq, i) => (
        <AccordionItem
          curOpen={currentOpen}
          onOpen={setCurrentOpen}
          key={i}
          num={i}
          item={faq}
        />
      ))}
    </ul>
  );
};

export default AccordianList;
