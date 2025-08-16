import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FiHelpCircle } from "react-icons/fi";

const FAQS = ({ filteredFaqs, searchQuery }) => {
  return (
    <>
      <div className="mb-12 bg-white p-10 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        {filteredFaqs.length > 0 ? (
          <Accordion type="single" collapsible className="w-full">
            {filteredFaqs.map((category) => (
              <div key={category.id} className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                {category.questions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${category.id}-${index}`}
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center">
                        <FiHelpCircle className="h-5 w-5 text-blue-500 mr-3" />
                        <span>{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-10 text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </div>
            ))}
          </Accordion>
        ) : (
          <Card>
            <CardContent className="py-12 text-center">
              <FiHelpCircle className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium">
                No results found for "{searchQuery}"
              </h3>
              <p className="mt-2 text-gray-500">
                Try different search terms or contact our support team
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default FAQS;
