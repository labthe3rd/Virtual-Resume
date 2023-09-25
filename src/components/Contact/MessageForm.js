// Message form for sending e-mails to my personal e-mail
// /src/components/Contact/MessageForm.js

import Link from "next/link";
import { HiMail } from "react-icons/hi";
import { FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa6";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useSendEmail } from "@/hooks/useSendEmail";
import react, { useState, useMemo } from "react";

export default function MessageForm() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [response, setResponse] = useState({});
  const { sendEmail, isLoading, isError, isComplete } = useSendEmail();

  //Validate e-mail input
  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const isInvalidEmail = useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  //Normalize phone input
  const normalizePhone = (value, previousValue) => {
    // No value then return
    if (!value) return value;

    //Only allow 0-9
    const currentValue = value.replace(/[^\d]/g, "");
    const cvLength = currentValue.length;

    if (!previousValue || value.length > previousValue.length) {
      // returns: "x", "xx", "xxx"
      if (cvLength < 4) return currentValue;

      // returns: "(xxx)", "(xxx) x", "(xxx) xx", "(xxx) xxx"
      if (cvLength < 7)
        return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;

      // returns: "(xxx) xxx-", (xxx) xxx-x", "(xxx) xxx-xx", "(xxx) xxx-xxx", "(xxx) xxx-xxxx"
      return `(${currentValue.slice(0, 3)}) ${currentValue.slice(
        3,
        6
      )}-${currentValue.slice(6, 10)}`;
    }
  };

  const handlePhoneChange = (e) => {
    setPhone(normalizePhone(e));
  };

  //Validate phone number
  const validatePhone = (value) =>
    value.match(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);

  const isInvalidPhone = useMemo(() => {
    if (phone === "") return false;

    return validatePhone(phone) ? false : true;
  }, [phone]);

  const isInvalidMessage = useMemo(() => {
    if (message === "") return false;

    return message.length <= 300 ? false : true;
  }, [message]);

  //Run when the send e-mail button is pressed
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await sendEmail(name, email, phone, message);
    if (data) {
      setResponse(data);
    }
  };
  if (isComplete) {
    return (
      <div className="py-10 px-10 text-success-500 font-bold">
        Message sent!
      </div>
    );
  }

  return (
    <>
      {isError && (
        <div className="text-medium text-danger-500 font-bold">
          Error sending message, please try again later.
        </div>
      )}
      <form
        className="space-y-8 py-5 px-5 bg-neutral-900 bg-opacity-40 shadow-lg shadow-primary"
        onSubmit={handleSubmit}
      >
        <h1>Send A Message</h1>
        <Input
          key="name"
          labelPlacement="inside"
          label="Name"
          color="default"
          isRequired={true}
          onValueChange={setName}
        />
        <Input
          key="email"
          labelPlacement="inside"
          type="email"
          isInvalid={isInvalidEmail}
          label="E-mail"
          color={isInvalidEmail ? "danger" : "default"}
          errorMessage={isInvalidEmail && "Please enter a valid email"}
          isRequired={true}
          onValueChange={setEmail}
        />
        <Input
          key="number"
          labelPlacement="inside"
          label="Phone Number"
          color={isInvalidPhone ? "danger" : "default"}
          isInvalid={isInvalidPhone}
          errorMessage={isInvalidPhone && "Please enter a valid phone number"}
          isRequired={true}
          value={phone}
          onValueChange={handlePhoneChange}
        />
        <Textarea
          variant="faded"
          label="Message"
          minRows="4 md:8"
          maxRows="12"
          size="lg"
          labelPlacement="inside"
          placeholder="Enter your message to send Louis"
          isRequired={true}
          isInvalid={isInvalidMessage}
          errorMessage={
            isInvalidMessage && "Max characters for message is 300 characters"
          }
          color={isInvalidMessage ? "danger" : "default"}
          onValueChange={setMessage}
        />

        <Button
          isLoading={isLoading}
          color="primary"
          variant="solid"
          type="submit"
          size="lg"
          spinner={
            isLoading && (
              <svg
                className="animate-spin h-5 w-5 text-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  fill="currentColor"
                />
              </svg>
            )
          }
        >
          {isLoading ? "Sending.." : "Send E-mail"}
        </Button>
      </form>
    </>
  );
}
