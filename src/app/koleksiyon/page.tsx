import type { Metadata } from "next";
import ShowcaseClient from "./ShowcaseClient";

export const metadata: Metadata = {
  title: "Koleksiyon",
  description:
    "Gökden Modaevi gelinlik koleksiyonu — 1986'dan bu yana el yapımı, özgün tasarımlar.",
};

export default function ShowcasePage() {
  return <ShowcaseClient />;
}
