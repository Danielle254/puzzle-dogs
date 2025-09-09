import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { X, Menu } from "lucide-react";
import Nav from "./Nav";
import { FocusTrap } from "focus-trap-react";

export default function MobileNav() {
  return (
    <div className="md:hidden">
      <Drawer direction="right">
        <DrawerTrigger className="cursor-pointer" aria-label="open mobile menu">
          <Menu />
        </DrawerTrigger>
        <DrawerContent className="w-screen p-4">
          <DrawerHeader>
            <DrawerTitle className="sr-only">
              mobile navigation menu
            </DrawerTitle>
          </DrawerHeader>
          <div>
            <DrawerClose
              className="absolute top-4 right-4 cursor-pointer"
              aria-label="close mobile menu"
              autoFocus
            >
              <X size={32} />
            </DrawerClose>
            <Nav classes="flex flex-col gap-4 items-start md:hidden pt-12" />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
