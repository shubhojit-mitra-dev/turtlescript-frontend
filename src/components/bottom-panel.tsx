import React from "react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { getLinks } from "@/data/data"
import { MessageCircleMore, UserSearchIcon, BrainIcon, GraduationCap, Pickaxe } from "lucide-react"

export default function BottomPanel() {
  const NavMenuLinks = getLinks().NavMenuLinks
  const IconList = [
    MessageCircleMore,
    UserSearchIcon,
    BrainIcon,
    GraduationCap,
    Pickaxe,
  ]
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t py-3 flex justify-between items-center px-6 shadow-lg">
      {NavMenuLinks.map((item, index) => (
        <Sheet key={item.title}>
          <SheetTrigger asChild>
            <button className="flex flex-col items-center gap-1">
              {React.createElement(IconList[index], {
                className: "w-6 h-6 text-muted-foreground",
              })}
              <span className="text-xs text-muted-foreground">{item.title}</span>
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh]">
            <ScrollArea className="h-full w-full rounded-md">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
                {item.group.map((group) => (
                  <div key={group.title} className="mb-6">
                    <Link
                      href={group.href}
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-accent"
                    >
                      <h4 className="text-sm font-medium">{group.title}</h4>
                      <p className="text-sm text-muted-foreground">{group.description}</p>
                    </Link>
                    <Separator className="my-2" />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      ))}
    </nav>
  )
}
