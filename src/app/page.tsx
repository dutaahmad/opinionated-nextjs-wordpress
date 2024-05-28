import { Separator } from "@/components/ui/separator";

export default async function Home() {
  return (
    <main className="w-full min-h-screen">
      <div className="flex items-center justify-evenly gap-8 h-screen m-auto">
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
            Tatanation Stack
          </h1>
          <Separator
            className="my-4"
            decorative />
          <div className="flex gap-4 items-end justify-evenly w-[40rem]">
            <h2 className="scroll-m-20 text-3xl font-light tracking-tight transition-colors">ShadcnUI</h2>
            <Separator orientation="vertical" decorative />
            <h2 className="scroll-m-20 text-3xl font-light tracking-tight transition-colors">SWR</h2>
            <Separator orientation="vertical" decorative />
            <h2 className="scroll-m-20 text-3xl font-light tracking-tight transition-colors">Zod</h2>
            <Separator orientation="vertical" decorative />
            <h2 className="scroll-m-20 text-3xl font-light tracking-tight transition-colors">Supabase</h2>
          </div>
        </div>
        {/* <Separator orientation="vertical" decorative />
        <DiceCube modelURL={diceURL} /> */}
        {/* <DiceCube dice /> */}
      </div>
    </main>
  );
}
