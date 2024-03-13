const Skills = () => {
  return (
    <div className="w-full bg-white dark:bg-[#252128]">
      <div className="w-4/5 max-w-4xl mx-auto flex flex-col mt-12">
        <h1 className="font-semibold text-5xl text-[#1F2937] dark:text-[#AEBCCF] mb-6 text-center md:text-start">
          Skills
        </h1>
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-0">
          <div className="w-3/5 md:w-1/4">
            <h2 className="font-medium text-3xl text-[#4338CA] dark:text-[#B7AAFF] mb-6">
              Java Script
            </h2>
            <p className="text-[#6B7280] dark:text-white text-xs">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="w-3/5 md:w-1/4">
            <h2 className="font-medium text-3xl text-[#4338CA] dark:text-[#B7AAFF] mb-6">
              React.Js
            </h2>
            <p className="text-[#6B7280] dark:text-white text-xs">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="w-3/5 md:w-1/4">
            <h2 className="font-medium text-3xl text-[#4338CA] dark:text-[#B7AAFF] mb-6">
              Node.Js
            </h2>
            <p className="text-[#6B7280] dark:text-white text-xs">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <hr className=" border-[#BAB2E7] w-full mx-auto my-8" />
      </div>
    </div>
  );
};

export default Skills;
