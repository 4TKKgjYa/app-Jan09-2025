import { SearchBar } from "@/components/SearchBar";
import Link from "next/link";

export default function Command() {
  return (
    <div>
      <Link href="/">Topに戻る</Link>
      <SearchBar />
    </div>
  );
}
