const Projects = () => {
  return (
    <div className="w-full bg-white dark:bg-[#252128] pb-20">
      <div className="w-4/5 max-w-4xl mx-auto flex flex-col">
        <h1 className="text-black dark:text-[#AEBCCF] font-semibold text-5xl mb-6 text-center md:text-start">
          Projects
        </h1>
        <div className=" flex flex-col items-center gap-4 md:flex-row md:justify-between md:items-stretch md:gap-0">
          <div className="w-3/5 md:w-1/4">
            <img
              className="w-full"
              src="./../../public/assets/projects-1.png"
              alt=""
            />
            <h2 className="text-[#4338CA] dark:text-[#CFCBFF] font-medium text-3xl my-2">
              Workintech
            </h2>
            <p className="text-[#6B7280] dark:text-white text-xs">
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>
            <div className="flex my-2 gap-2">
              <p className="text-[#3730A3] text-xs font-medium border border-[#3730A3] dark:text-[#8F88FF] dark:border-[#8F88FF] py-1 px-2 rounded">
                react
              </p>
              <p className="text-[#3730A3] text-xs font-medium border border-[#3730A3] dark:text-[#8F88FF] dark:border-[#8F88FF] py-1 px-2 rounded">
                redux
              </p>
              <p className="text-[#3730A3] text-xs font-medium border border-[#3730A3] dark:text-[#8F88FF] dark:border-[#8F88FF] py-1 px-2 rounded">
                axios
              </p>
            </div>
            <div className="flex justify-between">
              <a
                className="text-[#3730A3] dark:text-[#E1E1FF] font-medium underline"
                href=""
              >
                Github
              </a>
              <a
                className="text-[#3730A3] dark:text-[#E1E1FF] font-medium underline"
                href=""
              >
                View Site{" "}
              </a>
            </div>
          </div>
          <div className="w-3/5 md:w-1/4">
            <img
              className="w-full"
              src="./../../public/assets/projects-2.png"
              alt=""
            />
            <h2 className="text-[#4338CA] dark:text-[#CFCBFF] font-medium text-3xl my-2">
              Random Jokes
            </h2>
            <p className="text-[#6B7280] dark:text-white text-xs">
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>
            <div className="flex my-2 gap-2">
              <p className="text-[#3730A3] text-xs font-medium border border-[#3730A3] dark:text-[#8F88FF] dark:border-[#8F88FF] py-1 px-2 rounded">
                react
              </p>
              <p className="text-[#3730A3] text-xs font-medium border border-[#3730A3] dark:text-[#8F88FF] dark:border-[#8F88FF] py-1 px-2 rounded">
                redux
              </p>
              <p className="text-[#3730A3] text-xs font-medium border border-[#3730A3] dark:text-[#8F88FF] dark:border-[#8F88FF] py-1 px-2 rounded">
                axios
              </p>
            </div>
            <div className="flex justify-between">
              <a
                className="text-[#3730A3] dark:text-[#E1E1FF] font-medium underline"
                href=""
              >
                Github
              </a>
              <a
                className="text-[#3730A3] dark:text-[#E1E1FF] font-medium underline"
                href=""
              >
                View Site{" "}
              </a>
            </div>
          </div>
          <div className="w-3/5 md:w-1/4">
            <img
              className="w-full"
              src="./../../public/assets/projects-3.png"
              alt=""
            />
            <h2 className="text-[#4338CA] dark:text-[#CFCBFF] font-medium text-3xl my-2">
              Journey
            </h2>
            <p className="text-[#6B7280] dark:text-white text-xs">
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>
            <div className="flex my-2 gap-2">
              <p className="text-[#3730A3] text-xs font-medium border border-[#3730A3] dark:text-[#8F88FF] dark:border-[#8F88FF] py-1 px-2 rounded">
                react
              </p>
              <p className="text-[#3730A3] text-xs font-medium border border-[#3730A3] dark:text-[#8F88FF] dark:border-[#8F88FF] py-1 px-2 rounded">
                redux
              </p>
              <p className="text-[#3730A3] text-xs font-medium border border-[#3730A3] dark:text-[#8F88FF] dark:border-[#8F88FF] py-1 px-2 rounded">
                axios
              </p>
            </div>
            <div className="flex justify-between">
              <a
                className="text-[#3730A3] dark:text-[#E1E1FF] font-medium underline"
                href=""
              >
                Github
              </a>
              <a
                className="text-[#3730A3] dark:text-[#E1E1FF] font-medium underline"
                href=""
              >
                View Site{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
