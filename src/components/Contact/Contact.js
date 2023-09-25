import Link from "next/link";
import { HiMail } from "react-icons/hi";
import { FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa6";
import { Button } from "@nextui-org/react";
import { useSendEmail } from "@/hooks/useSendEmail";
import react, { useState } from "react";
import MessageForm from "./MessageForm";

export default function Contact() {
  return (
    <div className="grid justify-items-center mt-8 text-xl">
      <h1 className="text-4xl">Contact</h1>
      <table className="table-fixed mt-8 border-spacing-8">
        <tbody>
          <tr>
            <td>
              <HiMail />
            </td>
            <td>
              <Link href="mailto:labthe3rd@gmail.com">E-Mail</Link>
            </td>
          </tr>
          <tr>
            <td>
              <FaLinkedin />
            </td>
            <td>
              {/* <Link href="https://www.linkedin.com/in/louis-bersine-iii/">
                LinkedIn
              </Link> */}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/louis-bersine-iii/"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <FaGithub />
            </td>
            <td>
              {/* <Link href="https://github.com/labthe3rd">GitHub</Link> */}
              <a
                target="_blank"
                href="https://github.com/labthe3rd"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-10 w-1/3 text-4xl border-large border-primary-500 box-border">
        <MessageForm />
      </div>
    </div>
  );
}
