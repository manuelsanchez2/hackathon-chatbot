import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Folder } from "lucide-react"

const PageHeader = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full transition-all bg-white/20 backdrop-blur-md border-b">
      <div className="w-full max-w-5xl px-5 relative mx-auto">
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="flex items-center font-bold text-zinc-500 hover:text-zinc-900 text-3xl"
          >
            <Image
              className="invert rounded-full"
              src="/logo.webp"
              alt=""
              width={40}
              height={40}
            />
          </Link>
          <div>
            <SignedOut>
              <SignInButton>
                <Button className="bg-black">Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button className="bg-black ml-2">Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center gap-4">
                <Link
                  href="/dashboard"
                  className="flex items-center text-zinc-600 hover:text-zinc-900"
                >
                  <Folder className="mr-2 h-4 w-4" />
                  <span>Chatbots</span>
                </Link>

                <UserButton />
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PageHeader
