const Profile = () => {
  return (
    <div className="w-full bg-white text-black">
      <div className="w-4/5 max-w-4xl mx-auto flex flex-col ">
        <h1 className="text-[#1F2937] font-semibold text-5xl mb-6 text-center md:text-start">
          Profile
        </h1>
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className=" w-3/5 md:w-3/8">
            <h2 className="text-[#4338CA] font-medium text-3xl mb-4">
              Profile
            </h2>
            <div className="flex mb-2">
              <p className="w-1/2 font-semibold">Doğum tarihi</p>
              <p className="w-1/2">24.03.1996</p>
            </div>
            <div className="flex mb-2">
              <p className="w-1/2 font-semibold">İkamet Şehri</p>
              <p className="w-1/2">Ankara</p>
            </div>
            <div className="flex mb-2">
              <p className="w-1/2 font-semibold">Eğitim Durumu</p>
              <p className="w-1/2">Hacettepe Ünv. Biyoloji Lisans, 2016</p>
            </div>
            <div className="flex">
              <p className="w-1/2 font-semibold">Tercih Ettiği Rol</p>
              <p className="w-1/2">Frontend, UI</p>
            </div>
          </div>
          <div className="w-3/5 md:w-1/2">
            <h2 className="text-[#4338CA] font-medium text-3xl mb-4">
              About Me
            </h2>
            <p className="text-[#6B7280] mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>
            <p className="text-[#6B7280]">
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!{" "}
            </p>
          </div>
        </div>
        <hr className="bg-[#BAB2E7] border border-[#BAB2E7] w-full mx-auto my-8" />
      </div>
    </div>
  );
};

export default Profile;
