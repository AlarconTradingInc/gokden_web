import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Gökden Modaevi ile iletişime geçin — randevu alın, sorularınızı iletin.",
};

export default function ContactPage() {
  return <ContactClient />;
}
