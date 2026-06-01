import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-vertical-timeline-component/style.min.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Resume from "./routes/resume";
import WorkSamplesPage from "./routes/work-samples";
import SkillsPage from "./routes/skills";
import HomePage from "./routes/home";
import { ThemeProvider } from "@/components/theme-provider";
import RootLayout from "@/layouts/RootLayout";
import Project from "./routes/project";
import EducationsPage from "./routes/educations";
import ContactPage from "./routes/contact";
import PersonalPage from "./routes/personal";
const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "resume/",
        element: <Resume />,
      },
      {
        path: "work-samples/",
        element: <WorkSamplesPage />,
      },
      {
        path: "work-samples/:projectId",
        element: <Project />,
      },
      {
        path: "skills/",
        element: <SkillsPage />,
      },
      {
        path: "educations/",
        element: <EducationsPage />,
      },
      {
        path: "contact/",
        element: <ContactPage />,
      },
      {
        path: "personal/",
        element: <PersonalPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
