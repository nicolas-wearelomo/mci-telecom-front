import HomeTable from "@/components/Home/HomeTable";
import LinksHome from "@/components/Home/LinksHome";
import RenderMap from "@/components/Home/RenderMap";
import TopTenMonofactures from "@/components/Home/TopTenManufactures";
import useGetTopTenManufactures from "@/services/home/useGetTopTenManufactures";
import { useEffect } from "react";

const HomeContainer = () => {
  const { data, loading, callback } = useGetTopTenManufactures();

  useEffect(() => {
    callback();
  }, []);

  return (
    <>
      <LinksHome />
      <div className="grid grid-cols-3 overflow-y-auto h-[calc(85vh-120px)]">
        <div className="h-full flex justify-center items-center">
          <RenderMap />
        </div>
        <div className="col-span-2 h-full">
          <div className="h-[50%] p-5">
            <TopTenMonofactures data={data} />
          </div>
          <div className="h-[50%] p-5">
            <HomeTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
