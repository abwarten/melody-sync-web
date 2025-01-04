import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("@/features/home"), {
  loading: () => <div className="min-h-screen animate-pulse" />,
});

export default function Page() {
  return <HomePage />;
}
