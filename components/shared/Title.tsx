import React from "react";

function Title({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-center">
      <div className="w-12 h-0.5 bg-[#f04e3c] mr-4"></div>
      <span className="text-[#f04e3c] font-medium tracking-wide">
        {children}
      </span>
    </div>
  );
}

export default Title;
