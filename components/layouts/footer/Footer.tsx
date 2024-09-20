import {
  Facebook,
  Instagram,
  LindkedlnFooter,
  Logo,
} from "@/components/elements";
import { FooterBg } from "@/components/elements/icons/FooterBg";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="p-4">
      <footer className="relative overflow-hidden rounded-3xl bg-[#2A2D7B] py-24 sm:py-48">
        <div className="absolute top-0 h-full">
          <FooterBg />
        </div>
        <div className="container relative">
          <div className="grid gap-8 sm:grid-cols-6 xl:grid-cols-12">
            <div className="col-span-3">{/* <Logo /> */}</div>
            <div className="col-span-9 grid gap-8 sm:grid-cols-9">
              <div className="col-span-3 grid w-full grid-cols-2 gap-4 sm:col-span-6 sm:grid-cols-3 sm:gap-0">
                <ul className="grid list-none gap-6 text-white">
                  <label className="font-semibold text-white">Platform</label>
                  <li>
                    <Link href="/">Services</Link>
                  </li>
                  <li>
                    <Link href="/">Our Work</Link>
                  </li>
                  <li>
                    <Link href="/">Pricing</Link>
                  </li>
                </ul>
                <ul className="grid list-none gap-6 text-white">
                  <label className="font-semibold text-white">Company</label>
                  <li>
                    <Link href="/">Services</Link>
                  </li>
                  <li>
                    <Link href="/">Careers</Link>
                    <span className="ml-2 rounded-md bg-primary-300 p-1 text-black">
                      Hiring
                    </span>
                  </li>
                  <li>
                    <Link href="/">Our Work</Link>
                  </li>
                </ul>
                <ul className="grid list-none gap-6 text-white">
                  <label className="font-semibold text-white">Resources</label>
                  <li>
                    <Link href="/">Services</Link>
                  </li>
                  <li>
                    <Link href="/">About us</Link>
                  </li>
                  <li>
                    <Link href="/">Our Work</Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-3 grid gap-4 sm:col-end-10">
                <div className="flex items-center gap-4 rounded-full bg-white/25 p-1">
                  <span className="flex items-center justify-center rounded-full bg-primary-300 p-3">
                    <Facebook />
                  </span>
                  <p className="font-medium text-white">
                    Follow us on Facebook
                  </p>
                </div>
                <div className="flex items-center gap-4 rounded-full bg-white/25 p-1">
                  <span className="flex items-center justify-center rounded-full bg-primary-300 p-3">
                    <Instagram />
                  </span>
                  <p className="font-medium text-white">
                    Follow us on Instagram
                  </p>
                </div>
                <div className="flex items-center gap-4 rounded-full bg-white/25 p-1">
                  <span className="flex items-center justify-center rounded-full bg-primary-300 p-3">
                    <LindkedlnFooter />
                  </span>
                  <p className="font-medium text-white">Follow us on Twitter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
