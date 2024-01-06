import Image from "next/image";
import Parent from "./components/Parent";
import { Quicksand } from "next/font/google";
import ImageOne from "../public/Image1.png";

const inter = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Parent>
        <section className="w-full flex place-items-center h-[300px] rounded-xl mt-[150px] bg-[#f99f1c]">
          <div className="pl-[10%]">
            <h1
              className={`${inter.className} leading-[50px] font-[700] w-[90%] text-white text-[44px]`}
            >
              Deliver Food To Your Door Step
            </h1>
            <h2
              className={`${inter.className} mt-[20px] text-[20px] text-white/75`}
            >
              Authentic Food, Quick Service, Fast Delivery
            </h2>
          </div>
          <div className="mr-[30px] mt-[0px]">
            <Image alt="" src={ImageOne} height={600} width={600} />
          </div>
        </section>
      </Parent>
    </main>
  );
}
