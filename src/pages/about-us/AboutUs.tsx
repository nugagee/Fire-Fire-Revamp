import PageTitle from "../../components/PageTitle";
import valImg from '../../assets/img/val.png'
import tedImg from '../../assets/img/ted.png'

const AboutUs = () => {
  return (
    <main>
      <section className="flex bg-stone-100 font-poppins dark:bg-gray-800 pt-18 pb-24">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <PageTitle title="About Us" />
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <img
                src="https://i.postimg.cc/j5L5bX2d/pexels-andrea-piacquadio-3757946.jpg"
                alt=""
                className="relative z-40 object-cover w-full h-96"
              />
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <h2 className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-yellow-500 dark:border-yellow-400 dark:text-gray-300">
                We are providing a better facility
              </h2>
              <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                We are TedFams Solution, a dynamic software solutions company specializing in consulting, training, and web/mobile development. With a passion for innovation and a commitment to excellence, we empower businesses to thrive in the digital landscape. Our expert team is dedicated to providing cutting-edge solutions and training services that drive success, one line of code at a time. Join us on this journey to transform ideas into extraordinary software solutions.
              </p>
              <ul className="mb-10">
                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-yellow-500 dark:text-yellow-400 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                  We offer strategic software consulting to help businesses navigate challenges and make informed decisions.
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-yellow-500 dark:text-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                  Our tailored training equips teams with the latest software skills for enhanced productivity.
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-yellow-500 dark:text-yellow-400 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                  We specialize in crafting sleek, responsive web and mobile solutions that meet your unique objectives.
                </li>
              </ul>
              <a
                href="/contact-us"
                className="px-4 py-3 text-yellow-700 transition-all transform border border-yellow-500 hover:bg-yellow-600 dark:border-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-gray-100 dark:hover:border-yellow-500 dark:text-yellow-400 hover:text-gray-100"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="flex bg-stone-50 font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap items-center ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="lg:max-w-md">
                <span className="text-xl font-semibold text-yellow-600 uppercase dark:text-yellow-500">
                  About Us
                </span>
                <h2 className="mt-4 mb-6 text-2xl font-bold dark:text-gray-300">
                  Meet the Team
                </h2>
                <p className="mb-10 text-gray-600 dark:text-gray-400 ">
                  Our team at TedFams is a diverse group of passionate individuals united by a common purpose: to deliver exceptional software solutions. With a blend of creativity, technical expertise, and a customer-centric approach, we tackle every project with enthusiasm and dedication. We thrive on challenges, continuously push boundaries, and take pride in transforming innovative ideas into reality. Together, we are the driving force behind our success, and we're excited to collaborate with you to achieve your software goals.
                </p>
              </div>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="flex mb-4">
                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-yellow-500 rounded dark:bg-yellow-500 dark:text-gray-100 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-file-earmark-code"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                    <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
                  </svg>
                </span>
                <div>
                  <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                    Design
                  </h2>
                  <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                    We blend aesthetics and user-centric principles to create visually stunning, intuitive interfaces.
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-yellow-500 rounded dark:bg-yellow-500 dark:text-gray-100 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-file-text"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                  </svg>
                </span>
                <div>
                  <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                    Strategy
                  </h2>
                  <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                    We create clear objectives and roadmaps to ensure your software aligns with your business goals.
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-yellow-500 rounded dark:bg-yellow-500 dark:text-gray-100 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-bank2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z"></path>
                  </svg>
                </span>
                <div>
                  <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                    Develop
                  </h2>
                  <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                    We turn concepts into robust software solutions using the latest technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex bg-yellow-100 font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
          <div className="mb-10 text-center">
            <span
              className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-yellow-500 uppercase dark:text-gray-400">
              Team
            </span>
            <h1 className="text-3xl font-bold capitalize dark:text-white"> Meet Our Wonderful Team </h1>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 mb-4 lg:w-1/3 md:w-1/2 lg:mb-0">
              <div className="p-6 bg-white rounded shadow dark:bg-gray-700 group">
                <a className="block mb-2" href="#">
                  <div className="relative overflow-hidden">
                    <div className="mb-5 overflow-hidden">
                      <img className="object-cover w-full mx-auto transition-all rounded h-72 group-hover:scale-110"
                        src={valImg} alt="Founder" />
                    </div>
                    <div className="absolute flex flex-col top-4 right-4">
                      <div className="flex items-center">
                        <div
                          className="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-white rounded group-hover:translate-x-0 wishlist hover:bg-yellow-200 group">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor"
                            className="w-6 h-6 text-yellow-800 bi bi-facebook dark:text-gray-400"
                            viewBox="0 0 16 16">
                            <path
                              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div
                          className="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-white rounded group-hover:translate-x-0 wishlist hover:bg-yellow-200 group">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor"
                            className="w-6 h-6 text-yellow-500 dark:text-gray-400 bi bi-twitter"
                            viewBox="0 0 16 16">
                            <path
                              d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="mb-2 text-xl font-bold dark:text-white">Afams Val</h2>
                  <p className="text-lg font-bold text-yellow-500 dark:text-yellow-300 ">
                    Co-Founder
                  </p>
                </a>
              </div>
            </div>
            <div className="w-full px-4 mb-4 lg:w-1/3 md:w-1/2 lg:mb-0">
              <div className="p-6 bg-white rounded shadow dark:bg-gray-700 group">
                <a className="block mb-2" href="#">
                  <div className="relative overflow-hidden">
                    <div className="mb-5 overflow-hidden">
                      <img className="object-cover w-full mx-auto transition-all rounded h-72 group-hover:scale-110"
                        src={tedImg} alt="Founder" />
                    </div>
                    <div className="absolute flex flex-col top-4 right-4">
                      <div className="flex items-center">
                        <div
                          className="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-white rounded group-hover:translate-x-0 wishlist hover:bg-yellow-200 group">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor"
                            className="w-6 h-6 text-yellow-800 bi bi-facebook dark:text-gray-400"
                            viewBox="0 0 16 16">
                            <path
                              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div
                          className="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-white rounded group-hover:translate-x-0 wishlist hover:bg-yellow-200 group">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor"
                            className="w-6 h-6 text-yellow-500 dark:text-gray-400 bi bi-twitter"
                            viewBox="0 0 16 16">
                            <path
                              d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="mb-2 text-xl font-bold dark:text-white">Ted Egwu</h2>
                  <p className="text-lg font-bold text-yellow-500 dark:text-yellow-300 ">
                    Co-Founder
                  </p>
                </a>
              </div>
            </div>
            <div className="w-full px-4 mb-4 lg:w-1/3 md:w-1/2 lg:mb-0">
              <div className="p-6 bg-white rounded shadow dark:bg-gray-700 group">
                <a className="block mb-2" href="#">
                  <div className="relative overflow-hidden">
                    <div className="mb-5 overflow-hidden">
                      <img className="object-cover w-full mx-auto transition-all rounded h-72 group-hover:scale-110"
                        src="https://i.postimg.cc/q7pv50zT/pexels-edmond-dant-s-4342352.jpg" alt="" />
                    </div>
                    <div className="absolute flex flex-col top-4 right-4">
                      <div className="flex items-center">
                        <div
                          className="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-white rounded group-hover:translate-x-0 wishlist hover:bg-yellow-200 group">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor"
                            className="w-6 h-6 text-yellow-800 bi bi-facebook dark:text-gray-400"
                            viewBox="0 0 16 16">
                            <path
                              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div
                          className="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-white rounded group-hover:translate-x-0 wishlist hover:bg-yellow-200 group">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor"
                            className="w-6 h-6 text-yellow-500 dark:text-gray-400 bi bi-twitter"
                            viewBox="0 0 16 16">
                            <path
                              d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="mb-2 text-xl font-bold dark:text-white">Anucha Nora</h2>
                  <p className="text-lg font-bold text-yellow-500 dark:text-yellow-300 ">
                    Project Manager
                  </p>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
