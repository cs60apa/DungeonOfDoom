import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function ProgramFAQ() {
    const faqs = [
      {
        question: "What is the mentorship program?",
        answer: "Our mentorship program is a structured initiative designed to pair experienced professionals (mentors) with individuals seeking guidance and support in their personal or professional development (mentees). The program aims to foster growth, share knowledge, and help mentees achieve their goals."
      },
      {
        question: "How long does the mentorship program last?",
        answer: "The program typically runs for 6 months, but the duration can be adjusted based on the mentor-mentee pair's needs and goals. Some relationships may continue informally beyond the official program period."
      },
      {
        question: "How are mentors and mentees matched?",
        answer: "We use a combination of factors including career goals, skills, experience, and personal interests to match mentors and mentees. Both parties also have the opportunity to review the match and ensure it's a good fit before proceeding."
      },
      {
        question: "What is expected of mentors?",
        answer: "Mentors are expected to commit to regular meetings (usually 1-2 hours per month), provide guidance and support, share their experiences and knowledge, and help their mentee set and work towards their goals."
      },
      {
        question: "What is expected of mentees?",
        answer: "Mentees should be proactive in scheduling meetings, come prepared with questions or topics to discuss, be open to feedback, and take action on the advice and suggestions provided by their mentor."
      },
      {
        question: "Is there a cost to participate in the program?",
        answer: "Our mentorship program is currently offered at no cost to participants. However, both mentors and mentees are expected to invest their time and effort to make the relationship successful."
      },
      {
        question: "How often should mentor-mentee pairs meet?",
        answer: "We recommend meeting at least once a month, but pairs can decide on a frequency that works best for them. Some may choose to meet more frequently, especially at the beginning of the relationship."
      },
      {
        question: "Can I change my mentor/mentee if the match isn't working out?",
        answer: "Yes, if either party feels the match isn't working, they can contact the program coordinator to discuss the situation. We will work to find a more suitable match if necessary."
      },
      {
        question: "What kind of support does the program provide?",
        answer: "The program provides initial training for both mentors and mentees, ongoing support from a program coordinator, resources and guidelines for effective mentoring, and periodic check-ins to ensure the relationship is progressing well."
      },
      {
        question: "How do I apply to be a mentor or mentee?",
        answer: "You can apply through our website by filling out the application form. We open applications periodically throughout the year. Follow our social media channels or subscribe to our newsletter to be notified when applications are open."
      }
    ]
  
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Mentorship Program FAQ</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    )
  }