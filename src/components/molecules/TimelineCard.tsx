"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Label, SubHeading, BodyText } from "@/components/atoms/Typography";

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

interface TimelineCardProps extends TimelineMilestone {
  /** 0-based index used to stagger entrance delay */
  index: number;
  /** Which side the card sits on — affects slide direction */
  side: "left" | "right";
}

export default function TimelineCard({
  year,
  title,
  description,
  index,
  side,
}: TimelineCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  const xInit = side === "left" ? -50 : 50;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xInit }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: xInit }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.08,
      }}
      className={`group relative p-6 md:p-8 bg-ivory/70 backdrop-blur-sm border border-stone/30
        hover:border-gold/40 transition-all duration-500 ${side === "left" ? "text-right" : "text-left"}`}
    >
      {/* Gold accent line that extends toward the timeline dot */}
      <span
        className={`absolute top-8 ${
          side === "left"
            ? "right-0 translate-x-full"
            : "left-0 -translate-x-full"
        } w-0 h-px bg-gold group-hover:w-8 transition-all duration-500`}
      />

      <Label className="text-gold mb-2 block">{year}</Label>
      <SubHeading className="text-charcoal mb-3">{title}</SubHeading>
      <BodyText className="text-muted text-sm">{description}</BodyText>
    </motion.div>
  );
}
