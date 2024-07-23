import NavbarComponent from "@/components/Navbar";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">

      <section className="bg-[#F8D800] h-screen w-full">
        <div className="relative w-[490px]">
          <div className="absolute  z-10 left-0 top-0 flex flex-col gap-6 ">
            <div className="flex w-[130px] md:w-[240px]">
              <div className="w-[17px] md:w-[30px]"></div>
              <p className="p-2 bg-white rounded-md shadow-md text-center text-[#425066] w-full">
                legal expert
              </p>
            </div>
            <div className="flex w-[130px] md:w-[240px]">

              <p className="p-2 bg-white rounded-md shadow-md text-center text-[#425066] w-full">
                legal expert
              </p>
              <div className="w-[17px] md:w-[30px]"></div>
            </div>
            <div className="flex w-[130px] md:w-[240px]">
              <div className="w-[17px] md:w-[30px]"></div>
              <p className="p-2 bg-white rounded-md shadow-md text-center text-[#425066] w-full">
                legal expert
              </p>
            </div>
            <div className="flex w-[130px] md:w-[240px]">

              <p className="p-2 bg-white rounded-md shadow-md text-center text-[#425066] w-full">
                legal expert
              </p>
              <div className="w-[17px] md:w-[30px]"></div>
            </div>
            <div className="flex w-[130px] md:w-[240px]">
              <div className="w-[17px] md:w-[30px]"></div>
              <p className="p-2 bg-white rounded-md shadow-md text-center text-[#425066] w-full">
                legal expert
              </p>
            </div>
          </div>

          <Image className="absolute  right-0 top-0 image-white-gray-border rounded-full w-[160px] h-[160px] md:w-[300px] md:h-[300px] " width={300} height={300} src='https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Image>

        </div> </section>

    </main>
  );
}
