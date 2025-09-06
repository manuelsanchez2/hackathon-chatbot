"use client"
import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom"
import { Loader2 } from "lucide-react"

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <Button className="cursor-pointer" type="submit">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Creating...
        </>
      ) : (
        "Create Project"
      )}
    </Button>
  )
}

export default SubmitButton
