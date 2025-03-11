
import type React from "react"
import type { ChangeEvent } from "react"
import { Input as ShadcnInput } from "./ui/input"
import { Label } from "./ui/label"

interface InputProps {
  placeholder: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUserCred: React.Dispatch<React.SetStateAction<any>>
  type: string
  mode: string
  label?: string
}

function Input({ placeholder, setUserCred, type, mode, label }: InputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setUserCred((prev: any) => ({
      ...prev,
      [mode]: value,
    }))
  }

  return (
    <div className="w-full max-w-sm mb-4">
      {label && (
        <Label htmlFor={mode} className="mb-2 block">
          {label}
        </Label>
      )}
      <ShadcnInput id={mode} type={type} placeholder={placeholder} onChange={handleChange} className="w-full" />
    </div>
  )
}

export default Input

