import dynamic from "next/dynamic";

const ContactPage = dynamic(() => import("@/features/contact"), {
  loading: () => (
    <div className="min-h-screen bg-white pt-24 pb-16 animate-pulse" />
  ),
});

export default function Page() {
  return <ContactPage />;
}
