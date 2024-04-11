import { I3Dcube } from "iconsax-react";
import PageTitle from "../../components/PageTitle";

const Services = () => {
  return (
    <section className="flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="px-4 py-8 mx-auto max-w-7xl">
        <div className="max-w-xl mx-auto">
          <PageTitle
            title="Our Services"
            subtitle="Empowering Success Through Software Solutions, Consulting Expertise, and Targeted Training Programs"
          />
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
            <div className="inline-block p-4 mb-6 -mt-16 bg-orange-200 rounded-full">
            <I3Dcube size="32" color="#ffffff"/>
            </div>
            <h3 className="mb-4 text-2xl font-semibold dark:text-white">
              {" "}
              Consulting{" "}
            </h3>
            <p className="text-base text-gray-500 dark:text-gray-400">
            Our experienced consultants provide strategic guidance to help you make informed decisions, optimize processes, and overcome software challenges.
            </p>
          </div>
          <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
            <div className="inline-block p-4 mb-6 -mt-16 bg-orange-200 rounded-full">
            <I3Dcube size="32" color="#ffffff"/>
            </div>
            <h3 className="mb-4 text-2xl font-semibold dark:text-white">
              {" "}
              Training{" "}
            </h3>
            <p className="text-base text-gray-500 dark:text-gray-400">
            We offer comprehensive training programs that empower your team with the latest software skills, enhancing productivity and adaptability.
            </p>
          </div>
          <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
            <div className="inline-block p-4 mb-6 -mt-16 bg-orange-200 rounded-full">
            <I3Dcube size="32" color="#ffffff"/>
            </div>
            <h3 className="mb-4 text-2xl font-semibold dark:text-white">
              {" "}
              Software Development{" "}
            </h3>
            <p className="text-base text-gray-500 dark:text-gray-400">
            Our development team specializes in crafting sleek, responsive web and mobile solutions tailored to your unique objectives. From concept to deployment, we deliver high-quality software.
            </p>
          </div>
          <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
            <div className="inline-block p-4 mb-6 -mt-16  bg-orange-200 rounded-full">
            <I3Dcube size="32" color="#ffffff"/>
            </div>
            <h3 className="mb-4 text-2xl font-semibold dark:text-white">
              {" "}
             UI/UX  Design{" "}
            </h3>
            <p className="text-base text-gray-500 dark:text-gray-400">
            Our designers blend aesthetics and user-centric principles to create visually stunning, intuitive interfaces that enhance user experiences.
            </p>
          </div>
          <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
            <div className="inline-block p-4 mb-6 -mt-16 bg-orange-200 rounded-full">
            <I3Dcube size="32" color="#ffffff"/>
            </div>
            <h3 className="mb-4 text-2xl font-semibold dark:text-white">
              {" "}
              Strategy {" "}
            </h3>
            <p className="text-base text-gray-500 dark:text-gray-400">
            We work closely with you to define clear objectives and roadmaps, ensuring your software aligns with and exceeds your business goals.
            </p>
          </div>
          <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
            <div className="inline-block p-4 mb-6 -mt-16 bg-orange-200 rounded-full">
            <I3Dcube size="32" color="#ffffff"/>
            </div>
            <h3 className="mb-4 text-2xl font-semibold dark:text-white">
              {" "}
              Quality Assurance and Testing{" "}
            </h3>
            <p className="text-base text-gray-500 dark:text-gray-400">
            Our dedicated QA experts meticulously ensure the reliability, security, and performance of your software. We conduct thorough testing and validation to deliver a flawless end product, giving you peace of mind and a competitive edge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
