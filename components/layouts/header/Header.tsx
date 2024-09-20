"use client";
import { Button, Logo, Menu } from "@/components/elements";
import headerData from "@/data/header.json";

import { useWindScreenowSize } from "@/hooks/useWindowSize";
import useDetectScroll from "@smakss/react-scroll-direction";

import cx from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Header = () => {
  const { scrollDir } = useDetectScroll();

  const pathname = usePathname();
  const isSanityStudio = pathname.startsWith("/editor");

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const size = useWindScreenowSize();

  useEffect(() => {
    if (size.width > 768) {
      setShowMenu(false);
    }
  }, [size.width]);

  return (
    <header
      className={cx(
        " fixed w-full border-primary-300 bg-secondary-950 py-6 duration-300 sm:border-b-2",
        scrollDir === "down" ? "-translate-y-full" : "translate-y-0",
        isSanityStudio ? "z-0" : "z-20",
      )}
    >
      <div className="container flex justify-between">
        <div className="flex items-center justify-center gap-10">
          <Link href="/" className="z-10">
            <Logo />
          </Link>
          <nav
            className={cx(
              "absolute left-0 top-0  flex h-screen w-screen list-none flex-col items-center justify-center gap-8 bg-secondary-950 font-bold text-[#464647] duration-300 sm:relative sm:h-fit  sm:w-fit sm:translate-y-0 sm:flex-row sm:bg-transparent",
              showMenu === true ? "translate-y-0" : "-translate-y-full",
            )}
          >
            {headerData.header.map((item, index) => {
              return (
                <li key={index} className="" onClick={toggleMenu}>
                  <Link className="capitalize" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </nav>
        </div>

        <div className="z-10 flex h-fit">
          <button
            onClick={toggleMenu}
            className="flex w-fit items-center justify-center rounded-full border p-3 sm:hidden"
          >
            <Menu />
          </button>
          <Button variant="tetriary-reversed">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/truongtritin-bruno/"
              className="font-bold"
            >
              Get in touch
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
