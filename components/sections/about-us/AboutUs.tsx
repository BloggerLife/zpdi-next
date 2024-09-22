import { Check, Container, Heading, Section, SubTitle } from "@/components";
import { getHomepage } from "@/sanity/queries/page";
import AboutUsCarousel from "./AboutUsCarousel";

export const AboutUs = async () => {
  const data = await getHomepage();

  const { aboutUs } = data;

  return (
    <Section className="bg-secondary-950">
      <Container>
        <SubTitle subTitle={aboutUs.tagline} />
        <div className="grid gap-12 md:gap-36 xl:grid-cols-2">
          <div className="flex flex-col justify-center gap-6">
            <Heading
              as="h2"
              className="text-section leading-none text-[#464647]"
            >
              Our Target Communities
            </Heading>
            <ul className="mb-4 grid grid-cols-2 gap-4 xl:grid-cols-1">
              <li className="flex items-center gap-3 text-[#464647]">
                <Check />
                Urban
              </li>
              <li className="flex items-center gap-3 text-[#464647]">
                <Check />
                Peri-Urban
              </li>
              <li className="flex items-center gap-3 text-[#464647]">
                <Check />
                Rural
              </li>
              <li className="flex items-center gap-3 text-[#464647]">
                <Check />
                Farm Resettlements
              </li>
              <li className="flex items-center gap-3 text-[#464647]">
                <Check />
                Mining areas
              </li>
            </ul>
            <Heading
              as="h2"
              className="text-section leading-none text-[#464647]"
            >
              Our Target Groups
            </Heading>
            <ul className="mb-4 grid grid-cols-2 gap-4 xl:grid-cols-1">
              <li className="flex items-center gap-3 text-[#464647]">
                <Check />
                Women
              </li>
              <li className="flex items-center gap-3 text-[#464647]">
                <Check />
                Vulnerable youths
              </li>
              <li className="flex items-center gap-3 text-[#464647]">
                <Check />
                Religious groups
              </li>
              <li className="flex items-center gap-3 text-[#464647]">
                <Check />
                People with disabilities
              </li>
              <li className="flex items-center gap-3 text-[#464647]">
                <Check />
                Elderly
              </li>
              <li className="flex items-center gap-3 text-[#464647]">
                <Check />
                Widows & child headed families
              </li>
            </ul>
            <Heading
              as="h2"
              className="text-section leading-none text-[#464647]"
            >
              Core Values
            </Heading>
            <ul className="mb-4 grid grid-cols-2 gap-4 xl:grid-cols-1">
              <li className="flex items-center gap-3 text-[#464647]">
                <Check />
                Confidentiality
              </li>
              <li className="flex items-center gap-3 text-[#464647]">
                <Check />
                Pro-activeness
              </li>
              <li className="flex items-center gap-3 text-[#464647]">
                <Check />
                Collaboration
              </li>
              <li className="flex items-center gap-3 text-[#464647]">
                <Check />
                Nurturing
              </li>
              <li className="flex items-center gap-3 text-[#464647]">
                <Check />
                Measurement
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <AboutUsCarousel images={aboutUs.slider} />
          </div>
        </div>
      </Container>
    </Section>
  );
};
