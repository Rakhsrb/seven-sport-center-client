"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  segments?: {
    name: string;
    href: string;
    isCurrent?: boolean;
  }[];
  homeName?: string;
  segmentNames?: Record<string, string>;
}

export function Breadcrumb({
  segments: customSegments,
  homeName = "Bosh sahifa",
  segmentNames = {
    blog: "Bloglar",
    blogs: "Bloglar",
    trainers: "Murabbiylar",
    about: "Biz haqimizda",
    contact: "Aloqa",
  },
  className,
  ...props
}: BreadcrumbProps) {
  const pathname = usePathname();

  const segments = useMemo(() => {
    if (customSegments) return customSegments;

    const generatedSegments = [
      { name: homeName, href: "/", isCurrent: pathname === "/" },
    ];

    if (pathname === "/") return generatedSegments;

    const pathSegments = pathname.split("/").filter(Boolean);

    let currentPath = "";

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;

      let name = segmentNames[segment] || segment;

      if (segment.includes("%")) {
        try {
          name = decodeURIComponent(segment);
        } catch (e) {
          console.error("Failed to decode URL segment:", segment, e);
        }
      }

      generatedSegments.push({
        name,
        href: currentPath,
        isCurrent: isLast,
      });
    });

    return generatedSegments;
  }, [pathname, customSegments, homeName, segmentNames]);

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center text-sm", className)}
      {...props}
    >
      <ol className="flex items-center flex-wrap">
        {segments.map((segment, index) => (
          <li key={segment.href} className="flex items-center">
            {index === 0 ? null : (
              <ChevronRight className="mx-2 h-4 w-4 text-gray-400 flex-shrink-0" />
            )}
            {segment.isCurrent ? (
              <span
                aria-current="page"
                className="font-medium text-red-600 max-w-[200px] truncate"
                title={segment.name}
              >
                {segment.name}
              </span>
            ) : (
              <Link
                href={segment.href}
                className="text-gray-500 hover:text-red-600 transition-colors max-w-[200px] truncate"
                title={segment.name}
              >
                {segment.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
