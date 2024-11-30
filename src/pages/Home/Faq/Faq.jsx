import React from "react";
import faq from "../../../assets/img/faq.jpg";

const Faq = () => {
  return (
    <div className="e-container py-10 md:py-20 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2  mb-2 md:mb-8 p-6">
        <div className="col-span-3">
          <h2 className="text-2xl font-bold text-main mb-2 md:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="md:w-10/12 pl-4 text-black">
            Clarify Common Doubts: To provide answers to recurring questions,
            saving users from having to contact customer support. Improve User
            Experience: By addressing common issues, it helps users find answers
            quickly. Provide Transparency: It can provide important information
            about services, policies, or features of a product. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <img src={faq} alt="" />
        </div>
      </div>
      {/* faq */}
      <div className="md:ml-32 px-6">
        <div className="collapse collapse-plus bg-white rounded-none">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Clarify Common Doubts
          </div>
          <div className="collapse-content">
            <p>
              Clarify Common Doubts: To provide answers to recurring questions,
              saving users from having to contact customer support. Improve User
              Experience: By addressing common issues, it helps users find
              answers quickly. Provide Transparency: It can provide important
              information about services, policies, or features of a product.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias deleniti animi ipsa ratione! Quas, architecto. Quibusdam
              libero doloremque molestias et! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Autem praesentium, quibusdam labore
              dolorum sed obcaecati ab sapiente molestias assumenda et?
            </p>
          </div>
          <hr className="border-1 border-black" />
        </div>
        <div className="collapse collapse-plus bg-white rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
          <hr className="border-1 border-black" />
        </div>
        <div className="collapse collapse-plus bg-white rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
          <hr className="border-1 border-black" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
