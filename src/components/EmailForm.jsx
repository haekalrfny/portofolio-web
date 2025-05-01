import React from "react";
import emailjs from "emailjs-com";
import Button from "./Button";
import Input from "./Input";
import { GoPaperAirplane } from "react-icons/go";
import { motion } from "framer-motion";

export default function EmailForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ro8m2sy",
        "template_fnb1thk",
        e.target,
        "BsqqWtRohyW2JgDoz"
      )
      .then(
        (result) => {
          console.log("Email terkirim:", result.text);
          alert("Pesan sudah dikirim");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Gagal kirim pesan");
        }
      );

    e.target.reset();
  }

  const formVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <motion.form
        onSubmit={sendEmail}
        className="space-y-5 w-full"
        variants={formVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants}>
          <Input id="name" label="Name" placeholder="Insert your name" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Input
            id="email"
            type="email"
            label="Email"
            placeholder="Insert your email"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Input
            id="message"
            type="textarea"
            label="Message"
            placeholder="Please write your message here"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-start">
          <Button
            type="submit"
            label={
              <span className="flex items-center gap-3">
                Send <GoPaperAirplane />
              </span>
            }
            actions="button"
          />
        </motion.div>
      </motion.form>
    </>
  );
}
