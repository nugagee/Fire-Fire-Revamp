const PageTitle = ({
  title,
  subtitle = "",
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="px-4 mt-4 md:text-center mb-20">
      <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-300">
        {title}
      </h2>
      <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto">
        <div className="flex-1 h-2 bg-yellow-400"></div>
        <div className="flex-1 h-2 bg-yellow-600"></div>
        <div className="flex-1 h-2 bg-yellow-500"></div>
      </div>
      <p className="mb-16 text-base text-center text-gray-700">{subtitle}</p>
    </div>
  );
};

export default PageTitle;
