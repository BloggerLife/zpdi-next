export const revalidate = 0;

import { Container, Heading, LindkedlnFooter, Section } from "@/components";
import ShareSocialList from "@/components/elements/share/share-social";
import { client } from "@/sanity/lib/client";
import { getPostDetail } from "@/sanity/queries/page";
import { default as imageUrlBuilder } from "@sanity/image-url";
import console from "console";
import { PortableText, PortableTextComponents } from "next-sanity";

import Image from "next/image";
import Link from "next/link";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-5xl ">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-4xl  leading-none">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="mb-6 text-3xl">{children}</h3>,
    h4: ({ children }) => <h4 className="mb-6 text-2xl">{children}</h4>,
    normal: ({ children }) => <p className="!mb-6">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="mb-6 w-full border-l-4 border-l-white border-opacity-60 bg-white/10 p-6">
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }) => (
      <div className="mb-6 aspect-auto h-[33vh] w-full  sm:h-[45vh]">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || " "}
          width={320}
          height={450}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    ),
  },
  marks: {
    em: ({ children }) => (
      <em className="font-semibold text-gray-400">{children}</em>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <Link
          href={value?.href}
          target={target}
          className=" font-bold text-yellow-300 underline"
        >
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-xl list-disc px-6">{children}</ul>
    ),
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,

    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,

    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
};

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const data = await getPostDetail(slug);

  return (
    <Section className="bg-secondary-950">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-8">
          <div className="col-span-2 flex flex-col items-start justify-between gap-4">
            <Link href="/blog" className="text-[#464647]">
              Back to blog
            </Link>
            {/* <div className="flex flex-col">
              <div className="">
                <Image
                  src={data.authorImage.image}
                  alt="Bruno"
                  height={40}
                  width={40}
                  className="h-[40px] rounded-full object-cover"
                />
                <span className="text-[#464647]">{data.name}</span>
              </div>
              <span className="text-[#464647]">{data.authorPostion}</span>
            </div> */}
          </div>
          <div className="col-span-4 my-8 flex flex-col items-start gap-8 md:items-center md:text-center">
            <div className="flex gap-3">
              {data.categories.map((category: string, index: number) => {
                return (
                  <span key={index} className="rounded-full bg-white px-2 py-1">
                    Categoy: {category}
                  </span>
                );
              })}
            </div>
            <Heading
              as="h1"
              className="text-section leading-none text-[#464647]"
            >
              {data.title}
            </Heading>
            <div className="flex gap-3 text-[#464647]">
              <span>{data.timeRead} min read</span>
              <span>{data.publishedAt}</span>
            </div>
          </div>
          {/* <div className="col-span-2 flex flex-col justify-end text-[#464647] md:items-end">
            <span className="mb-3">Share</span>
            <div className="flex gap-3">
              <ShareSocialList url="https://www.sanity.io/blog/recap-sanity-connect-and-latest-releases" />
            </div>
          </div> */}
        </div>
        <div className=" my-4 flex flex-col items-center md:my-8">
          <div className="aspect-video h-[530px] ">
            <Image
              src={data.mainImage}
              alt="Blog A"
              width={430}
              height={430}
              className=" h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="my-8 flex max-w-3xl flex-col text-[#464647] md:my-16">
            <PortableText value={data.content} components={components} />

            <div className="p flex w-full flex-col rounded-3xl bg-beige-primary px-10 py-8  text-black md:flex-row md:gap-8">
              <div className="relative h-[56px] w-[56px] shrink-0">
                <Image
                  src={data.authorImage.image}
                  alt="Expert Image"
                  width={90}
                  height={90}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="flex w-full flex-col justify-between gap-2">
                <div className=" flex flex-col ">
                  <h3 className="text-sub-title font-bold">{data.name}</h3>
                  <p className=" text-sm opacity-90">{data.authorPostion}</p>
                </div>
                <PortableText value={data.authorBio} components={components} />
                <LindkedlnFooter />
              </div>
            </div>
          </div>
        </div>

        {/* <div>
          <SubTitle className="" subTitle="More like this" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="flex group flex-col gap-8">
              <div className="aspect-video rounded-3xl overflow-hidden h-[360px] md:h-[250px] ">
                <Link href="/blog/a">
                  <Image
                    src="/images/hero2.png"
                    alt="Blog A"
                    width={330}
                    height={330}
                    className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                  />
                </Link>
              </div>
              <div>
                <div>
                  <Heading as="h3" className="text-white text-sub-title mb-4">
                    <Link href="/blog/a">
                      Harnessing the Power of the Sun: Exploring the World of
                      Solar Energy
                    </Link>
                  </Heading>
                  <p className="text-neutral-400">
                    Solar energy is revolutionizing the way we power our world.
                    In this blog post,sustainable energy source for a brighter
                    future.
                  </p>
                </div>
                <div className="flex items-center gap-6 mt-6">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/bruno.jpg"
                      alt="Bruno"
                      height={40}
                      width={40}
                      className="h-[40px] object-cover rounded-full"
                    />
                    <span className="text-white">Leslie Alexander</span>
                  </div>
                  <span className="text-white">9 min read</span>
                </div>
              </div>
            </div>
            <div className="flex group flex-col gap-8">
              <div className="aspect-video rounded-3xl overflow-hidden h-[360px] md:h-[250px] ">
                <Link href="/blog/a">
                  <Image
                    src="/images/hero2.png"
                    alt="Blog A"
                    width={330}
                    height={330}
                    className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                  />
                </Link>
              </div>
              <div>
                <div>
                  <Heading as="h3" className="text-white text-sub-title mb-4">
                    <Link href="/blog/a">
                      Harnessing the Power of the Sun: Exploring the World of
                      Solar Energy
                    </Link>
                  </Heading>
                  <p className="text-neutral-400">
                    Solar energy is revolutionizing the way we power our world.
                    In this blog post,sustainable energy source for a brighter
                    future.
                  </p>
                </div>
                <div className="flex items-center gap-6 mt-6">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/bruno.jpg"
                      alt="Bruno"
                      height={40}
                      width={40}
                      className="h-[40px] object-cover rounded-full"
                    />
                    <span className="text-white">Leslie Alexander</span>
                  </div>
                  <span className="text-white">9 min read</span>
                </div>
              </div>
            </div>
            <div className="flex group flex-col gap-8">
              <div className="aspect-video rounded-3xl overflow-hidden h-[360px] md:h-[250px] ">
                <Link href="/blog/a">
                  <Image
                    src="/images/hero2.png"
                    alt="Blog A"
                    width={330}
                    height={330}
                    className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                  />
                </Link>
              </div>
              <div>
                <div>
                  <Heading as="h3" className="text-white text-sub-title mb-4">
                    <Link href="/blog/a">
                      Harnessing the Power of the Sun: Exploring the World of
                      Solar Energy
                    </Link>
                  </Heading>
                  <p className="text-neutral-400">
                    Solar energy is revolutionizing the way we power our world.
                    In this blog post,sustainable energy source for a brighter
                    future.
                  </p>
                </div>
                <div className="flex items-center gap-6 mt-6">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/bruno.jpg"
                      alt="Bruno"
                      height={40}
                      width={40}
                      className="h-[40px] object-cover rounded-full"
                    />
                    <span className="text-white">Leslie Alexander</span>
                  </div>
                  <span className="text-white">9 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </Container>
    </Section>
  );
};

export default BlogDetailPage;
