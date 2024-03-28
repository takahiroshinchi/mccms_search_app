"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import styles from "./index.module.css";

type Props = {
  type?: string;
};

export default function SearchBox({ type = "all" }: Props) {
  const pathname = usePathname();
  const isSearch = pathname.includes("search");
  const [composing, setComposition] = useState(false);
  const onKeyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.code === "Enter" && !composing) {
        location.href = `/search${type === "all" ? "" : "/" + type}?q=${inputRef.current?.value}`;
      }
    },
    [composing, type]
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const defaultQuery = searchParams.get("q") || "";
  return (
    <div className="flex max-w-lg p-4 align-middle">
      <Link href="/" className={`flex items-center pr-4 ${isSearch ? "" : "hidden"}`}>
        <Image src="/tablericons/arrow-left.svg" width={28} height={28} alt="" />
      </Link>
      <input
        type="search"
        name="q"
        ref={inputRef}
        className={styles.searchField}
        placeholder="シェフやレシピを検索"
        onKeyDown={onKeyDownHandler}
        onCompositionStart={() => setComposition(true)}
        onCompositionEnd={() => setComposition(false)}
        defaultValue={defaultQuery}
      />
    </div>
  );
}
