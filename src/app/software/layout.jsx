export default function SoftwareLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 py-12 px-6 sm:px-12">
      {/* The 'prose' and 'prose-invert' classes magically style all markdown elements */}
      <article className="mx-auto prose prose-invert prose-blue lg:prose-lg max-w-3xl">
        {children}
      </article>
    </div>
  );
}
