import Link from "next/link";
import Particles from "../components/particles";

export const metadata = {
  title: 'Ziath',
  description: 'Cake 🍰 And coffee ☕',
};

const navigation = [
  { name: "Projects", href: "https://github.com/ziad-gg" },
  { name: "Contact", href: "https://youtube.com" },
];

export default function Home() {

  return (<>
    <div className="flex flex-col items-center h-screen justify-center w-screen before overflow-hidden bg-black relative">
      <nav className="my-12 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 z-50"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <Particles
        className="absolute inset-0  animate-fade-in "
        quantity={500}
      />

      <h1
        className=" text-center text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text"
      >
        Ziad Emad
      </h1>


      <h1 
        className="text-white uppercase text-4xl font-bold animate-fade-in "
      >I Love Cake 🍰 And Coffee ☕</h1>


      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-12 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Hi, my name is Ziad, I&apos;m building open source
          Project at{" "}
          <Link
            target="_blank"
            href="https://github.com/ziad-gg"
            className="underline duration-500 hover:text-zinc-300"
          >
            ziad-gg
          </Link>
          <br />
          and working for{" "}
          <Link
            target="_blank"
            href="https://github.com/ziad-gg"
            className="underline duration-500 hover:text-zinc-300"
          >
            my self
          </Link>{" "}
          at night.
        </h2>
      </div>
    </div>

  </>
  );
}
