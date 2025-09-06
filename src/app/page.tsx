"use client"
import { motion } from "framer-motion"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"

export default function Page() {
  const words = [
    {
      text: "Meet ",
      className: "text-4xl md:text-6xl",
    },
    {
      text: "Chatboto.",
      className: "text-4xl md:text-6xl text-blue-500 dark:text-blue-500",
    },
  ]

  return (
    <div className="font-sans flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20">
      <section className="h-[40vh] flex flex-col items-center justify-center text-center space-y-6">
        <TypewriterEffectSmooth cursorClassName="md:!h-[60px]" words={words} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400"
        >
          The amazing AI-powered chatbot that transforms your website
        </motion.p>
        <motion.a
          href="/dashboard"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="text-gray-600 min-w-[200px] dark:text-gray-400 text-sm border border-zinc-500 px-4 py-2 rounded bg-gray-100 hover:bg-gray-200"
        >
          Getting started for free
        </motion.a>
      </section>
    </div>
  )
}
