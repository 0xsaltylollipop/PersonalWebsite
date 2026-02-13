"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <span className="relative">
      <button
        onClick={handleCopy}
        className="cursor-pointer text-accent opacity-85 transition-opacity duration-200 hover:opacity-100"
      >
        email
      </button>
      {copied && (
        <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded border border-border bg-card px-3 py-1.5 text-[0.8em] text-text shadow-sm">
          copied to clipboard!
        </span>
      )}
    </span>
  );
}
