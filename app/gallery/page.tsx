export const revalidate = 0;
/* eslint-disable react/no-unescaped-entities */
import { Container, Heading, NewLetter, Section } from "@/components";
import { getAboutpage } from "@/sanity/queries/page";
import { AboutUsType } from "@/sanity/schemaTypes/aboutUs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Gallery = async () => {
  const data: AboutUsType = await getAboutpage();

  const { ourExperts, hero } = data;

  return (
    <React.Fragment>
      <Section className="bg-white pb-0 sm:pb-0">
        <Container>
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2">
            <Heading as="h1" className="text-hero">
              Our Gallery
            </Heading>
            <div>
              <p className="mb-4">{hero.tagline}</p>
              {/* <Button variant="secondary">
                <Link href={promotion.link}>{promotion.title}</Link>
              </Button> */}
            </div>
          </div>
          {/* <div className="w-full overflow-hidden rounded-xl">
            <Image
              src={hero.heroImage}
              alt="About us 1"
              width={450}
              height={320}
              className="h-full w-full object-cover"
            />
          </div> */}
        </Container>
      </Section>
      <Section className="bg-white">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {ourExperts.ourExperts.map((expert, index: number) => {
              return (
                <div
                  key={index}
                  className="relative col-span-1 h-[600px] overflow-hidden rounded-xl"
                >
                  <Image
                    src={expert.image}
                    alt="Member"
                    width={320}
                    height={450}
                    className="h-full w-full object-cover"
                  />
                  <div className="group absolute bottom-2 w-full overflow-hidden  px-2 backdrop-blur-2xl">
                    <div className="flex h-0 min-h-10 flex-col justify-between rounded-xl bg-primary-300 px-6  py-2 duration-300 group-hover:h-[340px]">
                      <div className="flex items-center justify-between">
                        <Heading
                          as="h4"
                          className="text-label font-semibold leading-none"
                        >
                          {expert.heading}
                        </Heading>
                        {/* <span>{expert.tagline}</span> */}
                      </div>
                      <ul className="my-4 h-0 translate-y-3 duration-300 group-hover:h-full group-hover:translate-y-0">
                        <li className="text-sub-title">{expert.excerpt}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
      <div className="bg-secondary-950 p-2 sm:p-4">
        <NewLetter />
      </div>
    </React.Fragment>
  );
};

export default Gallery;
