// /src/hooks/useSendEmail.js

import { useState } from "react";

export function useSendEmail() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const sendEmail = async (name, email, phone, message) => {
    setIsLoading(true);
    setIsError(false);
    setIsComplete(false);

    try {
      console.log("Sending e-mail");
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          message: message,
        }),
      });

      const status = await res.status;
      const data = await res.json();
      if (status === 200) {
        console.log("data retrieved", data);
        setIsLoading(false);
        setIsComplete(true);
        return data;
      } else {
        console.log("Error sending e-mail\n", "Error Code", status, "\n", data);
        setIsLoading(false);
        setIsError(true);
      }
      console.log("data retrieved", data);
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      setIsComplete(false);
      setIsError(true);
      console.error("Error sending e-mail:", error);
    }
  };

  return { sendEmail, isLoading, isError, isComplete };
}
