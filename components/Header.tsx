import Nav from "./Nav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <nav className="flex justify-between max-w-[1000px] h-20 mx-auto items-center px-2">
      <div className="flex items-end">
        <img
          src="/images/logo/logo_horizontal.png"
          className="max-h-16"
          alt="Puzzle Dogs Logo - lime green dog with purple cape leaps up and to the right"
        />
      </div>
      <MobileNav />
      <Nav classes="hidden md:flex md:gap-4 md:items-center" />
    </nav>
  );
}
