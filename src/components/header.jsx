export const Header = () => {
  return (
    <div className="bg-white w-full h-screen p-4">
      <div className="w-4/5 max-w-5xl mx-auto flex justify-end gap-4 font-inter font-bold">
        <div className="text-[#777777]">
          <input type="checkbox" />
          DARK MODE
        </div>
        <p className="text-[#777777]">|</p>
        <p className="text-[#777777]">
          <span className="text-[#4731D3]">TÜRKÇE</span>'YE GEÇ
        </p>
      </div>
      <div className="w-4/5 max-w-5xl mx-auto flex text-black justify-between mt-4">
        <div className="text-[7B61FF] font-semibold py-3 px-4 rounded-full bg-[#EEEBFF]">
          A
        </div>
        <nav className="flex items-center font-inter gap-12 text-lg text-[#6B7280] font-medium">
          <div>Skills</div>
          <div>Projects</div>
          <div className="text-[#3730A3] py-2 px-4 border border-[#3730A3] rounded">
            Hire me
          </div>
        </nav>
      </div>
      <div className="w-4/5 max-w-5xl mx-auto flex mt-12">
        <div className="flex flex-col">
          <p className="text-[#4338CA]">-------- Almila Su</p>
          <h1 className="text-[#1F2937]">Creative thinker Minimalism lover</h1>
          <h2 className="text-[#6B7280]">
            Hi, I’m Almila. I’m a full-stack developer. If you are looking for a
            Developer who to craft solid and scalable frontend products with
            great user experiences. Let’s shake hands with me.
          </h2>
          <div className="text-[#3730A3]">
            <button>Hire me</button>
            <button>Github</button>
            <button>Linkedin</button>
          </div>
        </div>
        <div className="">
          <img
            className="w-full"
            src="./../../public/assets/hero-right.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
