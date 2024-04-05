import { ITabContent } from "@/types/About";

export const tabs: ITabContent[] = [
  {
    title: "Skills",
    id: "skills",
    htmlContent: (
      <ul className="list-disc pl-2">
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    htmlContent: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    htmlContent: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];
