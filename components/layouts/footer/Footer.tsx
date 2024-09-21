import { Facebook, Instagram, LindkedlnFooter } from "@/components/elements";
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
              <div className="col-span-2 grid w-full grid-cols-1 gap-4 sm:col-span-6 sm:grid-cols-2 sm:gap-0">
                <ul className="grid list-none gap-6 text-white">
                  <label className="font-semibold text-white">Contact Us</label>
                  <li>
                    <Link href="/">Email: zimpeacedevelopment@gmail.com </Link>
                  </li>
                  <li>
                    <Link href="/">Email: zpdi@gmail.com</Link>
                  </li>
                  <li>
                    <Link href="/">Phone: +263 771 111 191</Link>
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
                <Link href="https://www.facebook.com/share/fvDNAWS185aM2uV9/?mibextid=LQQJ4d">
                  <div className="flex items-center gap-4 rounded-full bg-white/25 p-1">
                    <span className="flex items-center justify-center rounded-full bg-primary-300 p-3">
                      <Facebook />
                    </span>
                    <p className="font-medium text-white">
                      Follow us on Facebook
                    </p>
                  </div>
                </Link>
                <Link href="https://www.instagram.com/invites/contact/?igsh=1j2ka7flmltr4&utm_content=ve2osbt">
                  <div className="flex items-center gap-4 rounded-full bg-white/25 p-1">
                    <span className="flex items-center justify-center rounded-full bg-primary-300 p-3">
                      <Instagram />
                    </span>
                    <p className="font-medium text-white">
                      Follow us on Instagram
                    </p>
                  </div>
                </Link>
                <Link href="https://x.com/zpdizw?t=tidrN_5kWUPJ3_kzFkvmLw&s=09">
                  <div className="flex items-center gap-4 rounded-full bg-white/25 p-1">
                    <span className="flex items-center justify-center rounded-full bg-primary-300 p-3">
                      <LindkedlnFooter />
                    </span>
                    <p className="font-medium text-white">
                      Follow us on Twitter
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
