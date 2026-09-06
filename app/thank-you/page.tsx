import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enquiry received",
  robots: { index: false, follow: false },
};

export default function ThankYou(){
  const basePath=process.env.NEXT_PUBLIC_BASE_PATH||"";
  return <main className="thank-you"><section className="thank-you-card"><p className="section-kicker light">Enquiry received</p><h1>Thank you for starting the conversation.</h1><p>Your message has been sent to Navoraa. We will review your enquiry and respond directly.</p><a className="button button-primary" href={`${basePath}/`}>Return to Navoraa <span>↗</span></a></section></main>
}
