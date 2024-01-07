import Image from "next/image";
import Parent from "./components/Parent";
import { Quicksand } from "next/font/google";
import ImageOne from "../public/Image1.png";
import Popular from "./components/Popular";
import Recommended from "./components/Recommended";

const inter = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Parent>
        <section className="w-full overflow-hidden flex laptop:flex-row mobile:flex-col place-items-center mobile:h-auto laptop:h-[300px] rounded-xl mobile:mt-[50px] laptop:mt-[150px] mobile:bg-none laptop:bg-[#f99f1c]">
          <div className="mobile:pl-[5%] flex flex-col laptop:place-items-start mobile:place-items-center laptop:pl-[5%]">
            <h1
              className={`${inter.className} laptop:text-left mobile:text-center mobile:leading-[40px] laptop:leading-[50px] font-[700] w-[90%] mobile:text-[#00122A] laptop:text-white mobile:text-[28px] laptop:text-[44px]`}
            >
              Deliver Food To Your Door Step
            </h1>
            <h2
              className={`${inter.className} mobile:text-[14px] laptop:text-[20px] mt-[20px] laptop:text-left mobile:text-center text-[20px] mobile:text-[#00122A]/75 laptop:text-white/75`}
            >
              Authentic Food, Quick Service, Fast Delivery
            </h2>
          </div>
          <div className="relative mobile:mr-0 laptop:mr-[30px] ">
            <div className="absolute bottom-0 z-[-1] h-[180px] w-full rounded-xl bg-[#FD9460]" />
            <Image
              alt=""
              className=""
              src={ImageOne}
              height={600}
              width={600}
            />
          </div>
        </section>
        <Popular />
        <Recommended />
      </Parent>
    </main>
  );
}
