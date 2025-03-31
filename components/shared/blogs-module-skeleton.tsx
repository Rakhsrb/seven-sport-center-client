export default function BlogsModuleSkeleton() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-4">
          <div className="w-16 h-[2px] bg-red-600"></div>
          <span className="mx-4 text-red-600 uppercase text-sm font-medium">
            BLOGDAN SO&apos;NGI YANGILIKLAR
          </span>
          <div className="w-16 h-[2px] bg-red-600"></div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D2756] max-w-3xl mx-auto leading-tight">
          SIZ UCHUN BIZ TANLAGAN DZYUDO MASLAHATLARI
        </h2>
      </div>

      <div className="h-[40vh] flex justify-center items-center">
        <span className="h-16 w-16 border-[6px] border-dotted border-red-600 animate-spin rounded-full"></span>
      </div>
    </div>
  );
}
