/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Text, Container, ActionIcon, Group, rem } from "@mantine/core";
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from "@tabler/icons-react";
import classes from "./Footer.module.css";
import { useRouter } from "next/navigation";

const data = [
  {
    title: "About",
    links: [
      { label: "Features", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Support", link: "#" },
      { label: "Forums", link: "#" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Media assets", link: "#" },
      { label: "Changelog", link: "#" },
      { label: "Releases", link: "#" },
    ],
  },
  {
    title: "Meet Us",
    links: [
      { label: "+0899 9999 9999", link: "#" },
      { label: "info@maybeautyskin.com", link: "#" },
      { label: "Jl. Timoho No.129, Demangan, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55221", link: "#" },
    ],
  },
];

export default function Footer() {
  const years = new Date().getFullYear();
  const router = useRouter();

  // eslint-disable-next-line @next/next/no-img-element

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a"> key={index} className={classes.link} component="a" href={link.link} onClick={(event) => event.preventDefault()}>
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="lg:w-[1158px] lg:h-[447px] size-[360px] relative bg-[#F29393] bg-opacity-20 lg:rounded-[60px] rounded-3xl gap-10">
          <img
            className="absolute lg:w-[183.86px] lg:h-[176.35px] size-[80px] lg:translate-x-[-30px] lg:translate-y-[-53px]"
            src="https://res.cloudinary.com/dszhlpm81/image/upload/v1718509679/assets/phKFNpB7tMHUeEMuMCiMoTyH4rJTs3vp/Graphic_Elements_b6nq3m.png"
            alt="Decoration"
            fetchPriority="high"
            loading="lazy"
          />
          <div className="flex flex-col justify-center items-center h-full gap-8">
            <h2 className="lg:text-2xl text-xl font-bold text-[#F675A8] lg:leading-7 lg:tracking-widest">CHECK OUT NOW!</h2>
            <h2 className="lg:text-5xl text-lg font-bold text-center lg:leading-10">Toko skincare terbaik di Yogyakarta yang murah, lengkap dan terpercaya.</h2>
            <div className="flex justify-center items-center gap-4">
              <button className="lg:w-[336px] lg:px-16 px-11 lg:py-8 py-4 self-stretch lg:text-xl bg-indigo-800 hover:bg-indigo-700 lg:rounded-[32px] rounded-3xl justify-center items-center gap-4 flex text-white">Dapatkan Sekarang</button>
            </div>
          </div>
        </div>
      </div>
      <footer className={classes.footer}>
        <Container className={classes.inner}>
          <div className={classes.logo}>
            <div className="w-[244px] h-[50px] justify-start items-center gap-4 inline-flex">
              <img
                className="w-[49px] h-[50px] rounded-full"
                src="https://res.cloudinary.com/dszhlpm81/image/upload/v1709444372/assets/phKFNpB7tMHUeEMuMCiMoTyH4rJTs3vp/favicon_phha7v.ico"
                alt="Brand Logo"
                fetchPriority="high"
                loading="lazy"
              />
              <p className="text-gray-900 text-xl font-bold leading-7">May Beauty Skin</p>
            </div>
            <Text size="md" c="dimmed" className={classes.description}>
              Toko skincare terbaik di Yogyakarta yang murah, lengkap dan terpercaya.
            </Text>
            <Group gap={0} className={`mt-5 ${classes.social}`} justify="flex-center" wrap="nowrap">
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg" color="gray" variant="subtle" onClick={() => router.push("https://www.instagram.com/maybeauty.skin/")}>
                <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
              </ActionIcon>
            </Group>
          </div>
          <div className={classes.groups}>{groups}</div>
        </Container>
      </footer>
    </>
  );
}
