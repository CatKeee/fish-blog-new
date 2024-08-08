import type { Metadata } from "next";
import DefaultLayout from "@/layouts/default";
import Icon from "@/components/Icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: "123",
};

const About = () => {
  return (
    <DefaultLayout>
      <div className="">
        <section className="flex flex-col items-center gap-2 pb-8 pt-4 sm:pb-12 sm:pt-8">
          <h1 className="text-edge-outline text-3xl font-bold">About</h1>
          <p className="text-center text-secondary-foreground/60">
            Here are some projects that I have led or participated in.
          </p>
        </section>
        <section className="mx-auto flex max-w-screen-sm flex-col gap-6 animate-in">
          <div className="flex gap-4">
            <Avatar className="size-16 bg-muted p-1">
              <AvatarImage src="/guofu/hb.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <h2 className="text-xl">Kunio</h2>
              <p className="text-secondary-foreground/60">
                A Programmer Who Loves E-waste
              </p>
              <p className="flex flex-wrap items-center gap-2 text-secondary-foreground/60">
                <Icon
                  name="ri:github-fill"
                  size="1.5rem"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground"
                />

                <Icon
                  name="my:gitee-fill"
                  size="1.3rem"
                  className="text-secondary-foreground/80 hover:text-[#c01b20]"
                />

                <Icon
                  name="ri:steam-fill"
                  size="1.5rem"
                  className="text-secondary-foreground/80 hover:text-[#1d3266]"
                />

                <Icon
                  name="ri:wechat-fill"
                  size="1.5rem"
                  className="text-secondary-foreground/80 hover:text-[#07c160]"
                />

                <Icon
                  name="ri:qq-fill"
                  size="1.5rem"
                  className="text-secondary-foreground/80 hover:text-[#09f]"
                />

                <Icon
                  name="my:zhihu-circle-fill"
                  size="1.5rem"
                  className="text-secondary-foreground/80 hover:text-[#1772f6]"
                />

                <Icon
                  name="my:juejin-fill"
                  size="1.5rem"
                  className="text-secondary-foreground/80 hover:text-[#1e80ff]"
                />

                <Icon
                  name="my:bilibili-fill"
                  size="1.5rem"
                  className="text-secondary-foreground/80 hover:text-[#fb7299]"
                />

                <Icon
                  name="my:csdn-fill"
                  size="1.3rem"
                  className="text-secondary-foreground/80 hover:text-[#fc5531]"
                />

                <Icon
                  name="my:csdn-simple-fill"
                  size="1.3rem"
                  className="text-secondary-foreground/80 hover:text-[#fc5531]"
                />
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            <div>
              <div className="flex flex-col gap-2">
                <Label
                  className="flex items-center"
                  htmlFor="typescript-progress"
                >
                  <Icon name="ri:html5-fill" size="1.1rem" />
                  HTML/CSS/JS/TS
                </Label>
                <Progress id="typescript-progress" value={66} />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <Label
                  className="flex items-center"
                  htmlFor="typescript-progress"
                >
                  <Icon name="ri:nodejs-line" size="1.1rem" />
                  NodeJS
                </Label>
                <Progress id="typescript-progress" value={40} />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <Label
                  className="flex items-center"
                  htmlFor="typescript-progress"
                >
                  <Icon name="ri:nodejs-line" size="1.1rem" />
                  React/Vue
                </Label>
                <Progress id="typescript-progress" value={60} />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <Label
                  className="flex items-center"
                  htmlFor="typescript-progress"
                >
                  <Icon name="ri:nodejs-line" size="1.1rem" />
                  MySQL/MongoDB
                </Label>
                <Progress id="typescript-progress" value={50} />
              </div>
            </div>
          </div>
          <p className="leading-7">
            Hi there! Hi, I'm Kunio(国夫)!Of course, this is just my pen name,
            which comes from an FC game called "Blood Fighter Legend".
          </p>
          <p className="leading-7">
            My job is programming/development. I am not limited to front-end,
            back-end or other positions. I enjoy working on full-stack
            development because I think it is more free and challenging.
          </p>
          <p className="leading-7">
            In my spare time, I am also an e-waste enthusiast, with a strong
            interest in vintage game consoles, retro electronic devices, and
            various digital products.If you have any interesting ideas or
            experiences, please feel free to share them with me. I will be
            active on various social platforms frequently.
          </p>
          <p className="leading-7">
            If you have any interesting ideas or experiences, please feel free
            to share them with me. I will be active on various social platforms
            frequently.
          </p>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default About;
