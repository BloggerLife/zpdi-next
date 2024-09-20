import { Heading } from "@/components/elements";
import { Container, Section } from "@/components/layouts";
import { getBlogPage } from "@/sanity/queries/page";
import Image from "next/image";
import Link from "next/link";

export const Blog = async () => {
  const data = await getBlogPage();
  const latestBlog = data.slice(0, 4);

  return (
    <Section className=" bg-secondary-950">
      <Container>
        <div>
          <div className="flex w-full items-center justify-between">
            <Heading
              as="h2"
              className="text-section leading-none text-[#464647]"
            >
              Blog
            </Heading>
            <button className="rounded-full border px-6 py-3 text-[#464647]">
              <Link href="/blog">See all</Link>
            </button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-24 md:grid-cols-2">
            {latestBlog.map((post: any, index: number) => {
              return (
                <div key={index} className="group flex flex-col gap-8">
                  <div className="aspect-video h-[360px] overflow-hidden rounded-3xl ">
                    <Link href={`/blog/${post.slug}`}>
                      <Image
                        src={post.mainImage}
                        alt="Blog A"
                        width={330}
                        height={330}
                        className="h-full w-full object-cover duration-300 group-hover:scale-110"
                      />
                    </Link>
                  </div>
                  <div>
                    <div>
                      <Heading
                        as="h3"
                        className="mb-4  text-sub-title text-[#464647]"
                      >
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </Heading>
                      <p className="line-clamp-2 text-neutral-400">
                        {post.desc}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-6">
                      <div className="flex items-center gap-3">
                        <Image
                          src={post.authorImage.image}
                          alt="Bruno"
                          height={40}
                          width={40}
                          className="h-[40px] rounded-full object-cover"
                        />
                        <span className="text-[#464647]">{post.name}</span>
                      </div>
                      <span className="text-[#464647]">
                        {post.timeRead} min read
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
