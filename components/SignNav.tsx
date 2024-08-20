"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignNav() {
  const [state, setState] = useState(false);

  const rendering = () => {
    if (!state) {
      return (
        <div className="flex flex-row justify-center items-center gap-3 sm:gap-2 sm:text-[14px]">
          <Link href="/signup">signup</Link>|<Link href="/login">login</Link>
        </div>
      );
    } else if (state) {
      return (
        <>
          <Link href="/me">me</Link>
        </>
      );
    }
  };

  return rendering();
}
