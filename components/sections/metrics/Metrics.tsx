import {
  capitalized,
  Container,
  Heading,
  Section,
  SubTitle,
} from "@/components";
import DynamicIcon from "@/components/elements/icons/IconComponent";
import { getHomepage } from "@/sanity/queries/page";

export const Metrics = async () => {
  const data = await getHomepage();

  const { metrics } = data;
  return (
    <Section className="rounded-3xl bg-[#ffffff]">
      <Container>
        <SubTitle subTitle={metrics.tagline} className="text-primary-950" />
        <div>
          <div className="mb-12 sm:mb-24">
            <Heading as="h2" className="text-section leading-none">
              {metrics.heading}
            </Heading>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {metrics?.metrics
              .filter((item: any) => item.excerpt)
              .map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-6 rounded-3xl bg-[#DEE1F8] p-8"
                  >
                    {/* <DynamicIcon name={capitalized(item.icon)} /> */}
                    <div className="flex flex-col gap-6">
                      <Heading as="h3" className="text-title leading-none">
                        {item.heading}
                      </Heading>
                      <p className="text-neutral-800">{item.excerpt}</p>
                    </div>
                  </div>
                );
              })}
            <div className="flex flex-col justify-between gap-8">
              {metrics?.metrics
                .filter((item: any) => !item.excerpt)
                .map((item: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className="flex gap-6 rounded-3xl bg-primary-300 p-8"
                    >
                      <DynamicIcon name={capitalized(item.icon)} />
                      <div>
                        <Heading as="h3" className="text-title leading-none">
                          {item.heading}
                        </Heading>
                        <h4 className="mt-4 text-sub-title leading-none">
                          {item.tagline}
                        </h4>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
