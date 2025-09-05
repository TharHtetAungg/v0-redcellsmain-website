"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "./button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface PreviewModalProps {
  open: boolean
  setOpen: (open: boolean) => void
  title: string
  excerpt: string
  link: string
}

export function PreviewModal({ open, setOpen, title, excerpt, link }: PreviewModalProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">{title}</DialogTitle>
          <DialogDescription className="pt-4 text-left text-base text-muted-foreground">{excerpt}</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <Button asChild>
            <Link href={link}>
              Read full post <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
