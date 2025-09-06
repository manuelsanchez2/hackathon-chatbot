import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"

export default function Page() {
  const words = [
    {
      text: "Meet",
      className: "text-4xl md:text-6xl",
    },
    {
      text: "Chatboto.",
      className: "text-4xl md:text-6xl text-blue-500 dark:text-blue-500",
    },
  ]

  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <section className="max-h-[calc(100vh-60px)] flex flex-col items-center justify-center text-center space-y-6">
        <TypewriterEffectSmooth cursorClassName="md:!h-[60px]" words={words} />
      </section>
    </div>
  )
}
