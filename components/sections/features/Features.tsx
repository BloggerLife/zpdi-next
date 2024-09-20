import { Container, Heading, Section, SubTitle } from "@/components";
import DynamicIcon from "@/components/elements/icons/IconComponent";
import { getHomepage } from "@/sanity/queries/page";
import Link from "next/link";

export const capitalized = (name: any) => {
  return name?.charAt(0).toUpperCase() + name?.slice(1);
};
export const Features = async () => {
  const data = await getHomepage();
  const { solutions } = data;
  return (
    <Section className="rounded-3xl bg-[#DEE1F8]">
      <Container>
        <SubTitle subTitle={solutions?.tagline} className="text-primary-950" />
        <div>
          <div className="mb-12 sm:mb-24">
            <Heading as="h2" className="text-section leading-none">
              {solutions.heading}
            </Heading>
          </div>
          <div className="grid gap-8 md:grid-cols-2  xl:grid-cols-4">
            {solutions.solutions.map((item: any, index: number) => {
              return (
                <div key={index} className="flex flex-col items-start gap-6">
                  <DynamicIcon name={capitalized(item.icon)} />
                  <div>
                    <Heading as="h3" className="mb-4 text-title leading-none">
                      {item.heading}
                    </Heading>
                    <p className="text-neutral-800">{item.excerpt}</p>
                  </div>
                  <button className="text-primary-950">
                    <Link href="/about-us">Read More</Link>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
