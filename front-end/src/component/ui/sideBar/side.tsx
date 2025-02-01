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
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-primary text-white p-4">
        <h2 className="text-xl text-secondary font-poppins mb-6">
          Starter Project
        </h2>
        <ul>
          <li className="mb-4">
            <Link href="/home" legacyBehavior>
              <a className="flex items-center text-secondary hover:bg-secondary hover:text-primary px-3 py-2 rounded font-poppins">
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Home
              </a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/configuration-setup" legacyBehavior>
              <a className="flex items-center text-secondary hover:bg-secondary hover:text-primary px-3 py-2 rounded font-poppins">
                <FontAwesomeIcon icon={faCog} className="mr-2" />
                Configuration & Setup
              </a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/workflow-automation" legacyBehavior>
              <a className="flex items-center text-secondary hover:bg-secondary hover:text-primary px-3 py-2 rounded font-poppins">
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                Workflow & Automation
              </a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/ux-ui" legacyBehavior>
              <a className="flex items-center text-secondary hover:bg-secondary hover:text-primary px-3 py-2 rounded font-poppins">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                User Experience & UI
              </a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/backend-api" legacyBehavior>
              <a className="flex items-center text-secondary hover:bg-secondary hover:text-primary px-3 py-2 rounded font-poppins">
                <FontAwesomeIcon icon={faServer} className="mr-2" />
                Back-End & API
              </a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/deployment-extensions" legacyBehavior>
              <a className="flex items-center text-secondary hover:bg-secondary hover:text-primary px-3 py-2 rounded font-poppins">
                <FontAwesomeIcon icon={faCloud} className="mr-2" />
                Deployment & Extensions
              </a>
            </Link>
          </li>
          <li className="mb-4 mt-20">
            <a
              href="https://github.com/AD-Dev-creator?tab=projects"
              className="text-center text-secondary font-poppins text-sm"
            >
              Created by &lt; CodeRequest /&gt;
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-6 bg-backgroundColor">
        {/* Le contenu de la page */}
      </div>
    </div>
  );
};

export default SideBar;
