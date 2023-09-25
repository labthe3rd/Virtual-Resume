import Link from "next/link";
import { HiMail } from "react-icons/hi";
import { FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa6";
import { Button } from "@nextui-org/react";
import { useSendEmail } from "@/hooks/useSendEmail";
import react, { useState } from "react";
import MessageForm from "./MessageForm";

export default function Contact() {
  return (
    <div className="grid justify-items-center mt-8 text-lg md:text-xl">
      <div className="mt-0 md:mt-10 w-3/4 md:w-1/3 text-4xl border-large border-primary-500 box-border">
        <MessageForm />
      </div>
    </div>
  );
}
