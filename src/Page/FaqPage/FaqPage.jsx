import {
    Accordion,
    AccordionBody,
    AccordionHeader,
} from "@material-tailwind/react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Contact from '../Home/Contact/Contact';
const FaqPage = () => {
    const [open, setOpen] = useState(0);
    // const [alwaysOpen, setAlwaysOpen] = useState(true);
   
    // const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
   
  return (
    <div className="md:mt-24  min-h-[50vh] ">
<div className="max-w-6xl mx-auto">

      <Accordion open={open === 1}>
        <AccordionHeader className="justify-start gap-5" onClick={() => handleOpen(1)}>
        {open===1 ? <FaMinus /> : <FaPlus /> } How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader className="justify-start gap-5" onClick={() => handleOpen(2)}>
        {open===2 ? <FaMinus /> : <FaPlus /> }  What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader className="justify-start gap-5" onClick={() => handleOpen(3)}>
        {open===3 ? <FaMinus /> : <FaPlus /> }  What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
</div>
<Contact />
    </div>
  );
};

export default FaqPage;
