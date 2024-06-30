import { ITabContent } from "@/types/About";

export const tabs: ITabContent[] = [
  {
    title: "Стек технологій",
    id: "skills",
    htmlContent: (
      <ol className="list-disc pl-2">
        {[
          "- JavaScript(Typescipt), C#",
          "- HTML5",
          "- CSS(SASS,SCSS)",
          "- Tailwind",
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
    title: "Освіта",
    id: "education",
    htmlContent: (
      <ul className="list-disc pl-2">
        <li>
          Національний університет “Одеська політехніка”, Одеса, Україна.
          Спецільність - Кібербезпека та захист інформації.
        </li>
      </ul>
    ),
  },
  {
    title: "Сертифікати",
    id: "certifications",
    htmlContent: (
      <ul className="list-disc pl-2">
        <li>- Повний курс JavaScript + React</li>
        <li>- The Nest JS Bootcamp</li>
        <li>- Excel Skills for Business: Essentials</li>
        <li>- Foundations of Cybersecurity</li>
        <li>- Connect and Protect: Networks and Network Security</li>
        <li>- Play It Safe: Manage Security Risks</li>
      </ul>
    ),
  },
];
