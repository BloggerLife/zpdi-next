export const revalidate = 0;

import { Button, Heading } from "@/components/elements";
import { Container, Section } from "@/components/layouts";
import { getHomepage } from "@/sanity/queries/page";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Hero = async () => {
  const data = await getHomepage();
  const { hero, gallery, promotion } = data;

  return (
    <Section className="flex h-fit flex-col gap-32 bg-secondary-950">
      <Container className="flex h-1/2 items-center justify-center">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="text-[#464647]">
            <Heading as="h1" className="text-hero leading-none">
              {hero.heading}
            </Heading>
          </div>
          <div className="mt-10 xl:mt-0">
            <p className="mb-10 text-base text-[#464647]">{hero.tagline}</p>
            <Button variant="secondary">
              <Link href={promotion.link}>{promotion.title}</Link>
            </Button>
          </div>
        </div>
      </Container>
      <div className="col-span-2 h-1/2 w-full">
        <Marquee autoFill>
          <div className="mx-3 flex items-start justify-center gap-6">
            {gallery.imageUrls.map((item: any) => {
              return (
                <>
                  <Image
                    src={item.url}
                    alt="Hero Image"
                    width={450}
                    height={250}
                  />
                </>
              );
            })}
          </div>
        </Marquee>
      </div>
    </Section>
  );
};

export { Hero };
