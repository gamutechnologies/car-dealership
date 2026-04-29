import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QandA = [
  {
    index: "Question 1",
    question: "What makes LuxeAuto different from other car platforms?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    index: "Question 2",
    question: "Are all vehicles verified and certified?",
    answer:
      "Omnimet iste, explicabo quasi vel unde eveniet ducimus natus, ipsa eos repudiandae inventore voluptatum quo. Magni, nam.",
  },
  {
    index: "Question 3",
    question: "Do you provide international delivery?",
    answer:
      "Omnimet iste, explicabo quasi vel unde eveniet ducimus natus, ipsa eos repudiandae inventore voluptatum quo. Magni, explicabo quasi vel unde eveniet ducimus natus, nam.",
  },
  {
    index: "Question 4",
    question: "Can I book a test drive before purchasing?",
    answer: "Omnimet iste",
  },
  {
    index: "Question 5",
    question: "What payment methods do you accept?",
    answer:
      "Omnimet iste, explicabo quasi vel unde eveniet ducimus natus, ipsa eos repudiandae inventore voluptatum quo. Magni, nam.",
  },
  {
    index: "Question 6",
    question: "Can I sell or list my car on LuxeAuto?",
    answer:
      "Omnimet iste, explicabo quasi vel unde eveniet ducimus natus, nam.",
  },
  {
    index: "Question 7",
    question: "How does the concierge service work?",
    answer:
      "Omnimet iste, explicabo quasi vel unde eveniet ducimus natus, ipsa eos voluptatum quo. Magni, nam.",
  },
];

export default function FAQSection() {
  return (
    <section className="min-h-screen py-32 flex flex-col items-center relative overflow-hidden bg-black">
      <div className="w-full max-w-6xl px-8 flex flex-col gap-16 relative">
        <div className="flex flex-row items-start justify-between w-full">
          <h3 className="text-5xl font-semibold top-0 left-0 max-w-lg">
            Your Questions, <span className="mt-3">Perfectly Answered.</span>
          </h3>
          <p className="text-sm font-semibold text-zinc-200/70 max-w-sm mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis amet
            iste, explicabo quasi vel unde eveniet ducimus inventore voluptatum
            quo.
          </p>
        </div>
      </div>
      <div className="w-full mt-20">
        <Accordion className="flex flex-col gap-2 max-w-6xl mx-auto">
          {QandA.map((qa) => (
            <AccordionItem
              key={qa.index}
              value={qa.index}
              className="bg-zinc-900 border-2 border-zinc-800 rounded-xl px-4 py-1"
            >
              <AccordionTrigger className="hover:no-underline text-zinc-400">
                <h5 className="text-zinc-300 text-base">{qa.question}</h5>
              </AccordionTrigger>
              <AccordionContent className="text-zinc-500 text-sm pb-4">
                {qa.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
