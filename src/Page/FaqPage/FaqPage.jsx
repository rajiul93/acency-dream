import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaMinus, FaPlus } from "react-icons/fa";
import ScrollToTop from "../../share/ScrollToTop/ScrollToTop";
import Contact from "../Home/Contact/Contact";
import MissionHero from "../MissionAndVision/MissionHero/MissionHero";
const FaqPage = () => {
  const [open, setOpen] = useState(0);
  // const [alwaysOpen, setAlwaysOpen] = useState(true);

  // const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const faq = [
    {
      question: "I need to develop an application – where do I start?",
      answer:
        "There are several question and requirement on how to start an application development. Basically the primary questions are",
      list: [
        "Which area solution do you want to build?",
        "What is the measurable result you want to get?",
        "Do you have resources to develop an application? ",
      ],
    },
    {
      question: "I want to develop software. How much will it cost?",
      answer:
        " Software development costs may vary depending on many factors, including but not limited to the following:",
      list: [
        "A scale of your application idea.",
        "Innovations required.",
        "Software development company experience in the tech and business domains.",
        "Software outsourcing rates.",
      ],
    },
    {
      question: "What do I need to know before contacting you?",
      answer:
        "From your side, it would be very helpful to have a proper description about your needs or the list of functional requirements written in a text/doc/form for understand your requirement. From our side, we want to give you some valuable information regarding the way we work. We provide a free quote on your project after having the initial call where we discuss the project details. Then, you get the project cost and timeline estimation during a week. ",
      list: [],
    },
    {
      question: "How much time will it take for you to make my app?",
      answer:
        "There are 3 main parameters that influence the software development timeline:",
      list: [
        "The application complexity and scope.",
        "Requirements to the quality of the software.",
        "Interdependencies between the application functionality.",
      ],
    },
    {
      question: "What is your experience?",
      answer:
        "We have developed 500+ custom python script/bot, web applications and scraping solutions for 50 companies since 2016. We achieved 300+ clients who are satisfied about our service.",
      list: [],
    },
    {
      question: "What technology do you use?",
      answer:
        "We define the best technological stack for each project/product depending on business requirements and plans. In general, our core stack is the following:",
      list: [
        "Scraping: Python, Selenium, Scrapy, Requests etc",
        "Backend: Django, NodeJS.",
        "Frontend: React.js, Bootstrap and more.",
        "Databases: MySQL, MongoDB etc.",
      ],
    },
    {
      question: "How do you guarantee product quality?",
      answer:
        "Betechlab uses the best practices in software development, from project and analysis management approaches to tech tools and instruments. We have a professional team of QA engineers that ensure product quality. Besides, Betechlab guarantees the products developed and tested by our team.",
      list: [],
    },
    {
      question: "Which benefits are you providing?",
      answer:
        "Betechlab providing the top most benefits. Here are the main points:",
      list: [
        "Low costs",
        "High quality service",
        "Unlimited revision until satisfaction",
        "Impressive support",
      ],
    },
    {
      question: "After purchase if it’s don’t working, then?",
      answer: "We will refund your money. This is our rules.",
      list: [],
    },
  ];
  const image = "https://betechlab.com/image/faq.jpg"
  
  return (
    <div className="md:mt-24  min-h-[50vh] ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dream | FaqP age</title>
      </Helmet>
      <ScrollToTop />
      <MissionHero image={image} />

      <div className="max-w-6xl mx-auto mt-14">
        {faq?.map((item, index) => {
          return (
            <Accordion key={index} open={open === index}>
              <AccordionHeader
                className="justify-start gap-5"
                onClick={() => handleOpen(index)}
              >
                {open === index ? <FaMinus /> : <FaPlus />} {item.question}
              </AccordionHeader>
              <AccordionBody>
                <p className="text-[16px]">{item.answer}</p>
                <br />
                {item.list?.map((e, i) => (
                  <li className="text-[16px]" key={i}>{e}</li>
                ))}
              </AccordionBody>
            </Accordion>
          );
        })}
      </div>
      <Contact />
    </div>
  );
};

export default FaqPage;
