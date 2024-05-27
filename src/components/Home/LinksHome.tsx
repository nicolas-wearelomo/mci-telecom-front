import Link from "next/link";

const LinksHome = () => {
  return (
    <>
      <div className="p-5 mr-5 flex justify-around border-solid border-2 border-[#d6d6d6] rounded-[32px] mb-7">
        <Link className="bg-[#24A2CE] text-white py-2 px-5 flex rounded-[16px]" href="/home/pooles">
          Pooles
        </Link>
        <Link className="bg-[#24A2CE] text-white py-2 px-5 flex rounded-[16px]" href="/home/operation">
          Operacion
        </Link>
        <Link className="bg-[#24A2CE] text-white py-2 px-5 flex rounded-[16px]" href="/home/business">
          Negocio
        </Link>
        <div className="bg-[#24A2CE] text-white py-2 px-5 flex rounded-[16px] cursor-pointer">INFORMACIÓN</div>
      </div>
    </>
  );
};

export default LinksHome;
