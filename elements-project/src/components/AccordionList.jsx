import React from "react";
import AccordionItem from "./accordion-list-elements/AccordionItem";

const AccordianList = ({ faqs }) => {
  return (
    <ul className="accordion">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} num={i} item={faq} />
      ))}
    </ul>
  );
};

export default AccordianList;
