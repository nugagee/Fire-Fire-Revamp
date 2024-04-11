import PageTitle from "../../components/PageTitle";

const Testimonials = () => {
  return (
    <section className="flex bg-gray-100 pb-10 dark:bg-gray-800">
      <div className="p-4 mx-auto max-w-7xl">
        <PageTitle
          title="Testimonials"
          subtitle="Client Success Stories: What Our Partners Say About Us"
        />
        <div className="flex ">
          <div className="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="mb-8 bg-white rounded shadow dark:bg-gray-700">
              <div className="relative z-20 p-8 -mt-14 ">
                <span className="inline-block p-3 mb-3 text-xs text-white bg-yellow-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-quote"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                </span>
                <p className="mb-4 text-base leading-7 text-gray-700">
                  I can't express how thrilled I am with the software developed by TedFams. Their attention to detail and commitment to user-centric design have transformed our business. Our customers love the new interface, and our team finds it incredibly easy to work with. It's been a game-changer for us!
                </p>
                <div className="flex items-center gap-x-4">
                  <div className="relative w-20 h-20 overflow-hidden rounded-full">
                    <img
                      className="object-cover w-full h-full transition-all hover:scale-110"
                      src="https://i.postimg.cc/KvrSzTxg/alexandru-zdrobau-dj-RG1v-B1pw-unsplash.jpg"
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <h2 className="text-lg font-bold text-black dark:text-white">
                      Jori King
                    </h2>
                    <span className="block text-xs font-semibold text-yellow-500 uppercase dark:text-yellow-300">
                      Backend Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-8 bg-white rounded shadow dark:bg-gray-700">
              <div className="relative z-20 p-8 -mt-14 ">
                <span className="inline-block p-3 mb-3 text-xs text-white bg-yellow-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-quote"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                </span>
                <p className="mb-4 text-base leading-7 text-gray-700">
                  Working with TedFams on our software strategy was a game-changer for our company. Their strategic insights and meticulous planning have propelled us to new heights. Our software projects are now more aligned with our business goals, and the results speak for themselves. Highly recommended!
                </p>
                <div className="flex items-center gap-x-4">
                  <div className="relative w-20 h-20 overflow-hidden rounded-full">
                    <img
                      className="object-cover w-full h-full transition-all hover:scale-110"
                      src="https://i.postimg.cc/gk8KvyTN/ehsan-ahmadi-vs-Wy6nchc-Os-unsplash.jpg"
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <h2 className="text-lg font-bold text-black dark:text-white">
                      King Waters
                    </h2>
                    <span className="block text-xs font-semibold text-yellow-500 uppercase dark:text-yellow-300">
                      UI/UX Designer
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-8 bg-white rounded shadow dark:bg-gray-700">
              <div className="relative z-20 p-8 -mt-14 ">
                <span className="inline-block p-3 mb-3 text-xs text-white bg-yellow-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-quote"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                </span>
                <p className="mb-4 text-base leading-7 text-gray-700">
                  The design team at TedFams has a magical touch. They took our vision and turned it into a beautifully crafted interface that has wowed our users. The attention to detail and the seamless user experience they provided have made our software a standout in our industry.
                </p>
                <div className="flex items-center gap-x-4">
                  <div className="relative w-20 h-20 overflow-hidden rounded-full">
                    <img
                      className="object-cover w-full h-full transition-all hover:scale-110"
                      src="https://i.postimg.cc/wj9DLCJj/yunming-wang-G9f4-Enb8-XVM-unsplash.jpg"
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <h2 className="text-lg font-bold text-black dark:text-white">
                      April Burgers
                    </h2>
                    <span className="block text-xs font-semibold text-yellow-500 uppercase dark:text-yellow-300">
                      Frontend Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
