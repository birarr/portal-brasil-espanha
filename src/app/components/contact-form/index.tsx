"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, MailOpen } from "lucide-react";
import { toast } from "sonner";
import ReactLoading from "react-loading";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const divRef = useRef<HTMLLabelElement | null>(null);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [openForm, setOpenForm] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const disabled = !nameInput || !emailInput || !messageInput;

  const sendEmail = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e: any
  ) => {
    e.preventDefault();

    if (!form?.current) return;
    setIsloading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_CONTACT_SERVICE_KEY!,
        process.env.NEXT_PUBLIC_CONTACT_TEMPLATE_KEY!,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_CONTACT_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setOpenForm(false);
          form.current?.reset();
          toast("Email enviado com sucesso.");
          setNameInput("");
          setEmailInput("");
          setMessageInput("");
          setIsloading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast("Erro ao enviar o email.");
          setIsloading(false);
        }
      );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onBtnClick = (e: any) => {
    e.preventDefault();
    setOpenForm(!openForm);
    scrollToElement();
  };

  const scrollToElement = () => {
    const { current } = divRef;
    if (current !== null) {
      current.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <div>
      <div className="w-full flex justify-center mt-6 gap-2">
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger>
              <div onClick={onBtnClick}>
                {openForm ? <MailOpen size={40} /> : <Mail size={40} />}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{"Entre em contato"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={`${"//www.instagram.com/portalbrasilespanha"}`}
                target="_blank"
              >
                <Instagram size={36} />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{"Instagram Portal Brasil Espanha"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      {openForm && (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-2 p-4 items-center"
          id="formItem"
        >
          <label className="w-full" ref={divRef}>
            Name
          </label>
          <input
            type="text"
            name="from_name"
            className="w-full"
            value={nameInput}
            onChange={(e) => setNameInput(e?.target?.value)}
          />
          <label className="w-full">Email</label>
          <input
            type="email"
            name="user_email"
            className="w-full"
            value={emailInput}
            onChange={(e) => setEmailInput(e?.target?.value)}
          />
          <label className="w-full">Message</label>
          <textarea
            name="message"
            className="w-full"
            value={messageInput}
            onChange={(e) => setMessageInput(e?.target?.value)}
          />
          <Button
            type="submit"
            value="Send"
            className="w-full mt-2"
            disabled={disabled || isLoading}
          >
            {!isLoading ? (
              "Send"
            ) : (
              <ReactLoading
                type={"cylon"}
                color={"black"}
                height={20}
                width={20}
              />
            )}
          </Button>
        </form>
      )}
    </div>
  );
};
