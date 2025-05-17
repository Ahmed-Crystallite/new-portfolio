export default function Skills() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden lg:py-[100px] py-[50px]">
        <div className="container">
          <div className="text-center">
            <h2 className="lg:text-[50px] text-[40px] font-bold">My Skills</h2>
            <div className="relative z-10 mt-4">
              <span className="h-[3px] sm:w-[4%] w-[7%] bg-fuchsia-600 absolute top-[20px] xl:left-[39%] lg:left-[36%] md:left-[34%] sm:left-[30%] left-[17%] rounded"></span>
              <span className="block font-sans text-[30px] leading-tigth">
              What I Know
              </span>
              <span className="h-[3px] sm:w-[4%] w-[7%] bg-fuchsia-600 absolute top-[20px] xl:right-[39%] lg:right-[36%] md:right-[34%] sm:right-[30%] right-[17%] rounded"></span>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8 items-center md:pt-[60px] pt-[50px]">
          </div>
        </div>
      </div>
    </section>
  );
}
