import React from "react";
import { motion } from "framer-motion";
import EmailForm from "../components/EmailForm";
import {
  FaDiscord,
  FaSteam,
  FaLinkedin,
  FaTelegramPlane,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/haekalrfny/" },
  { icon: <FaGithub />, href: "https://github.com/haekalrfny" },
  { icon: <FaXTwitter />, href: "https://x.com/nasihitam" },
  { icon: <FaTelegramPlane />, href: "https://t.me/haekalrfny" },
  {
    icon: <FaDiscord />,
    href: "https://discordapp.com/users/702117312873889833",
  },
  {
    icon: <FaSteam />,
    href: "https://steamcommunity.com/profiles/76561198871051183/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <div className="py-32 flex flex-col gap-28 px-6 md:px-32">
      <div className="flex flex-col items-center">
        <span className="flex flex-col items-center justify-center gap-1">
          <motion.h1
            className="text-4xl font-medium text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-[#616161] font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Contact Me
          </motion.p>
        </span>
        <div className="w-full mt-6 flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-medium text-white">Talk to me</h1>
            <div className="mt-4">
              <EmailForm />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-medium text-white">Find me on</h1>
            <motion.div
              className="flex gap-6 mt-4"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl md:text-3xl text-white"
                  variants={iconVariants}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    transition: { delay: 0 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
