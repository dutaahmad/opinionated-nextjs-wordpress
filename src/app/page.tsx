import HeroPost from "@/components/hero-post";
import { Separator } from "@/components/ui/separator";
import { getAllPostsForHome } from "@/server/getAllPostsForHome";

export default async function Home() {
  const allPosts = await getAllPostsForHome();
  const { edges } = allPosts;
  const heroPost = edges[1]?.node;
  return (
    <main className="w-full min-h-screen">
      <div className="flex flex-col items-center mt-32 justify-evenly gap-8 h-screen">
        <div className="w-[40%] flex flex-col items-center justify-center">
          <h1
            className="font-bold
                    text-4xl
                    font-inter
                    sm:text-5xl
                    md:text-7xl whitespace-normal
                    bg-clip-text
                    "
          >
            Tatanation
          </h1>
          <Separator
            className="my-4"
            decorative />
        </div>
        <div className="flex flex-col items-center justify-center w-11/12">
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        </div>
      </div>
    </main>
  );
}
