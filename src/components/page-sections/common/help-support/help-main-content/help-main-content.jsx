import React from "react";
import ContactOption from "../contact-option/contact-option";
import PopularArticle from "../popular-article/popular-article";

const HelpMainContent = () => {
  return (
    <>
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Contact Options */}
        <ContactOption />

        {/* Popular Articles */}
        <PopularArticle />
      </div>
    </>
  );
};

export default HelpMainContent;
