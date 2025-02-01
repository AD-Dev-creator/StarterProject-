"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faUser,
  faCog,
  faServer,
  faCloud,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface SideBarProps {
  body: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ body }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {!isOpen && (
        <button
          className="md:hidden fixed top-4 left-4 z-50 text-primary border-primary p-2 rounded"
          onClick={() => setIsOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      )}

      <div
        className={`fixed h-screen w-64 bg-primary text-white p-4 z-40 transition-transform flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative`}
      >
        <button
          className="md:hidden absolute top-4 right-4 text-backgroundColor"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>

        <div>
          <h2 className="text-xl text-secondary font-poppins mb-6">
            Starter Project
          </h2>
          <ul>
            {[
              { href: "/home", icon: faHome, text: "Home" },
              {
                href: "/configuration-setup",
                icon: faCog,
                text: "Configuration & Setup",
              },
              {
                href: "/workflow-automation",
                icon: faInfoCircle,
                text: "Workflow & Automation",
              },
              { href: "/ux-ui", icon: faUser, text: "User Experience & UI" },
              { href: "/backend-api", icon: faServer, text: "Back-End & API" },
              {
                href: "/deployment-extensions",
                icon: faCloud,
                text: "Deployment & Extensions",
              },
            ].map(({ href, icon, text }) => (
              <li key={href} className="mb-4">
                <Link href={href} legacyBehavior>
                  <a className="flex items-center text-secondary hover:bg-secondary hover:text-primary px-3 py-2 rounded font-poppins">
                    <FontAwesomeIcon icon={icon} className="mr-2" />
                    {text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <p className="text-secondary font-poppins text-sm text-center">
            Created by{" "}
            <a
              href="https://github.com/AD-Dev-creator?tab=projects"
              className="text-secondary font-poppins text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; CodeRequest /&gt;
            </a>
          </p>
        </div>
      </div>

      <div className="flex-1 p-6 bg-backgroundColor h-full flex items-center justify-center md:ml-64">
        {body}
      </div>
    </div>
  );
};

export default SideBar;
