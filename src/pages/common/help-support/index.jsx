import { useState } from "react";
import {
  FiHelpCircle,
  FiMail,
  FiPhone,
  FiMessageSquare,
  FiSearch,
  FiExternalLink,
} from "react-icons/fi";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HeaderHelp from "@/components/page-sections/common/help-support/header/header";
import HelpMainContent from "@/components/page-sections/common/help-support/help-main-content/help-main-content";
import FAQS from "@/components/page-sections/common/help-support/faqs/faqs";
import ContactForm from "@/components/page-sections/common/help-support/contact-form/contact-form";

const HelpSupport = () => {
  const [activeTab, setActiveTab] = useState("faq");
  const [searchQuery, setSearchQuery] = useState("");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };


  // FAQ data
  const faqCategories = [
    {
      id: "account",
      title: "Account & Profile",
      questions: [
        {
          question: "How do I reset my password?",
          answer:
            "You can reset your password by clicking on 'Forgot Password' on the login page. You'll receive an email with instructions to create a new password.",
        },
        {
          question: "How do I update my profile information?",
          answer:
            "Navigate to your Profile page from the main menu. Click 'Edit' on the section you want to update, make your changes, and click 'Save'.",
        },
      ],
    },
    {
      id: "appointments",
      title: "Appointments",
      questions: [
        {
          question: "How do I schedule an appointment?",
          answer:
            "Go to the Appointments section and click 'Schedule New Appointment'. Select your provider, choose an available time slot, and confirm your appointment.",
        },
        {
          question: "Can I reschedule or cancel an appointment?",
          answer:
            "Yes, you can reschedule or cancel appointments up to 24 hours before the scheduled time from your Appointments page.",
        },
      ],
    },
    {
      id: "medical",
      title: "Medical Records",
      questions: [
        {
          question: "How do I access my test results?",
          answer:
            "Test results are available in the Medical Records section 24-48 hours after completion. You'll receive a notification when they're ready.",
        },
        {
          question: "Can I share my records with another provider?",
          answer:
            "Yes, from the Medical Records page, select the records you want to share and click 'Share with Provider'. Enter their information and confirm.",
        },
      ],
    },
  ];

  // Filter FAQs based on search query
  const filteredFaqs = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <div className="container mx-auto px-10 py-8 bg-blue-300 rounded-lg">
      <HeaderHelp searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <HelpMainContent />

      {/* FAQ Section */}
      <FAQS filteredFaqs={filteredFaqs} searchQuery={searchQuery} />

      {/* Contact Form */}
     <ContactForm
     setContactForm={setContactForm}
     contactForm={contactForm}
     />
    </div>
  );
};

export default HelpSupport;
