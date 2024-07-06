import { ITabContent } from "@/types/About";

export const tabs: ITabContent[] = [
  {
    title: "Skills",
    id: "skills",
    htmlContent: (
      <ol className="list-disc pl-2">
        {[
          "- JavaScript(Typescipt), C#",
          "- HTML5",
          "- CSS(SASS,SCSS)",
          "- Tailwind",
          "- Webpack",
          "- React, Next",
          "- Redux(Redux ToolKit)",
          "- React-Hook-Form, Formik",
          "- React-Query",
          "- Rest Api, GraphQl",
          "- NodeJs, NestJs",
          "- PostgreSQL, MongoDb",
          "- Git",
        ].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    ),
  },
  {
    title: "Education",
    id: "education",
    htmlContent: (
      <ul className="list-disc pl-2">
        <li>
          National University Odessa Polytechnic, Odessa, Ukraine. Features -
          Cybersecurity and retained information
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    htmlContent: (
      <ul className="list-disc pl-2">
        <li>- Advanced JavaScript + React course</li>
        <li>- The Nest JS Bootcamp</li>
        <li>- Excel Skills for Business: Essentials</li>
        <li>- Foundations of Cybersecurity</li>
        <li>- Connect and Protect: Networks and Network Security</li>
        <li>- Play It Safe: Manage Security Risks</li>
      </ul>
    ),
  },
];
