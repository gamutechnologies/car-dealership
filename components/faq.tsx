import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QandA = [
  {
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. met iste, explicabo quasi vel unde eveniet ducimus natus ?",
    answer:
      "Omnimet iste, explicabo quasi vel unde eveniet ducimus natus, ipsa eos repudiandae inventore voluptatum quo. Magni, nam.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. met iste, explicabo quasi vel ?",
    answer:
      "Omnimet iste, explicabo quasi vel unde eveniet ducimus natus, ipsa eos repudiandae inventore voluptatum quo. Magni, explicabo quasi vel unde eveniet ducimus natus, nam.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. met iste ?",
    answer: "Omnimet iste",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. met iste, explicabo ?",
    answer:
      "Omnimet iste, explicabo quasi vel unde eveniet ducimus natus, ipsa eos repudiandae inventore voluptatum quo. Magni, nam.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. met iste, explicabo quasi ?",
    answer:
      "Omnimet iste, explicabo quasi vel unde eveniet ducimus natus, nam.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. met iste, explicabo quasi vel unde eveniet ducimus natus ?",
    answer:
      "Omnimet iste, explicabo quasi vel unde eveniet ducimus natus, ipsa eos voluptatum quo. Magni, nam.",
  },
];

export default function FAQSection() {
  return (
    <section className="min-h-screen flex justify-center relative overflow-hidden bg-black">
      <div className="max-w-10/12 flex flex-col flex-1 grid-cols-2 gap-10 relative mt-32">
        <div className="flex absolute top-2 left-40">
          <div className="text-5xl font-semibold top-0 left-0 max-w-lg">
            <h3>
              Your Questions, <span className="mt-3">Perfectly Answered.</span>
            </h3>
          </div>
        </div>
        <div className="flex absolute top-6 right-40">
          <div className="text-5xl font-semibold top-0 left-0 max-w-md">
            <p className="text-sm font-semibold text-zinc-200/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              amet iste, explicabo quasi vel unde eveniet ducimus natus, ipsa
              eos repudiandae inventore voluptatum quo. Magni, nam.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 absolute items-center justify-center top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {QandA.map((qa) => (
          <div className="p-4 border-transparent border-default rounded-xl block bg-zinc-800 w-7xl">
            <Accordion>
              <AccordionItem value="item-1">
                <AccordionTrigger><h5 className="text-zinc-300">{qa.question}</h5></AccordionTrigger>
                <AccordionContent>{qa.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
}
