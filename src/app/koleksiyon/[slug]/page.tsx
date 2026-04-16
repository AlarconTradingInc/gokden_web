import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { gowns, getGownBySlug } from "@/lib/gowns";
import GownDetailClient from "./GownDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

/* ── Static params for SSG ──────────────────────────────── */
export function generateStaticParams() {
  return gowns.map((g) => ({ slug: g.slug }));
}

/* ── Dynamic metadata ───────────────────────────────────── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const gown = getGownBySlug(slug);
  if (!gown) return { title: "Not Found" };
  return {
    title: gown.name,
    description: gown.description,
  };
}

/* ── Page component ─────────────────────────────────────── */
export default async function GownDetailPage({ params }: Props) {
  const { slug } = await params;
  const gown = getGownBySlug(slug);
  if (!gown) notFound();

  return <GownDetailClient gown={gown} />;
}
