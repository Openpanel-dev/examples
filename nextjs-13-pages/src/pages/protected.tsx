
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";


export default function Home() {
  useAuth()

  return (
    <div>
      Protected route
      <Link href="/">Home</Link>
    </div>
  );
}
