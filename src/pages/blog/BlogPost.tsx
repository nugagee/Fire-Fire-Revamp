import PageTitle from "../../components/PageTitle";

const BlogPost = () => {
  return (
    <section className="flex bg-white  dark:bg-gray-800 font-poppins">
      <div className="p-4 mx-auto max-w-7xl mb-4">
        <PageTitle
          title="Our Blog"
          subtitle="We provide up to date blog that will keep you informed on the latest happenings in Technology"
        />
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3">
            <a className="mb-0 lg:mb-4" href="#">
              <div className="relative mb-5 overflow-hidden h-72">
                <img
                  className="object-cover w-full h-full transition-all rounded hover:scale-110"
                  src="https://i.postimg.cc/nhXsY3FY/pexels-mstudio-1240892.jpg"
                  alt=""
                />
                <span className="absolute px-4 py-2 text-xs font-semibold text-gray-500 rounded dark:text-gray-400 top-4 left-4 bg-yellow-50 dark:bg-gray-800">
                  September 20th, 2023
                </span>
              </div>
              <h2 className="mb-3 text-2xl font-bold leading-9 text-yellow-800 dark:text-white">
                {" "}
                The Power of User-Centric Design
              </h2>
              <p className="text-base leading-7 text-gray-600">
                In today's digital landscape, user-centric design is more critical than ever. Learn how our design expertise at TedFams can transform your software into an intuitive and visually appealing experience.
              </p>
            </a>
          </div>
          <div className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3">
            <a className="mb-0 lg:mb-4" href="#">
              <div className="relative mb-5 overflow-hidden h-72">
                <img
                  className="object-cover w-full h-full transition-all rounded hover:scale-110"
                  src="https://i.postimg.cc/05M9jV8k/pexels-aditya-aiyar-1407354.jpg"
                  alt=""
                />
                <span className="absolute px-4 py-2 text-xs font-semibold text-gray-500 rounded dark:text-gray-400 top-4 left-4 bg-yellow-50 dark:bg-gray-800">
                  August 7th, 2023
                </span>
              </div>
              <h2 className="mb-3 text-2xl font-bold leading-9 text-yellow-800 dark:text-white">
                {" "}
                Maximizing Productivity Through Software Training
              </h2>
              <p className="text-base leading-7 text-gray-600">
                Discover the impact of software training on your team's productivity. Explore our comprehensive training programs at TedFams and unlock the potential of your workforce.
              </p>
            </a>
          </div>
          <div className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3">
            <a className="mb-0 lg:mb-4" href="#">
              <div className="relative mb-5 overflow-hidden h-72">
                <img
                  className="object-cover w-full h-full transition-all rounded hover:scale-110"
                  src="https://i.postimg.cc/sgcrq8Jc/pexels-mnz-1598508.jpg"
                  alt=""
                />
                <span className="absolute px-4 py-2 text-xs font-semibold text-gray-500 rounded dark:text-gray-400 top-4 left-4 bg-yellow-50 dark:bg-gray-800">
                  September 14th, 2023
                </span>
              </div>
              <h2 className="mb-3 text-2xl font-bold leading-9 text-yellow-800 dark:text-white">
                {" "}
                Innovative Strategies for Software Success
              </h2>
              <p className="text-base leading-7 text-gray-600">
                Success in the digital world requires a well-defined strategy. Find out how our strategic approach at TedFams can help your software projects not only meet but exceed your business goals.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
