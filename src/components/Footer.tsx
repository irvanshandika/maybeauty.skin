/* eslint-disable @typescript-eslint/no-unused-vars */
import { Text, Container, ActionIcon, Group, rem } from "@mantine/core";
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from "@tabler/icons-react";
import classes from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

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
  const navigation = useNavigate();

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
              <ActionIcon size="lg" color="gray" variant="subtle" onClick={() => navigation("https://www.instagram.com/maybeauty.skin/")}>
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
