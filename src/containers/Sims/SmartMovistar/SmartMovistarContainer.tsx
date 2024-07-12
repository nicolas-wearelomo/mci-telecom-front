"use client";
import SmartMovistarFilters from "@/components/Sims/SmartMovistar/SmartMovistarFilters";
import SmartMovistarTable from "@/components/Sims/SmartMovistar/SmartMovistartable";
import SmartTable from "@/components/SmartTable";
import useSmartMovistarColumn from "@/components/SmartTable/columns/useSmartMovistarColumns";
import { RootState } from "@/redux/types";
import useGetAllMovistarSims from "@/services/sims/movistar/useGetAllMovistarSims";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

const SmartMovistarContainer = () => {
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const [dataToRender, setDataToRender] = useState([]);
  const [subscriptionGruop, setSubscriptionGruop] = useState([]);
  const { callback, data, loading } = useGetAllMovistarSims({
    company: currentUser?.company,
    service_provider: "Movistar",
  });
  const columns = useSmartMovistarColumn();

  useEffect(() => {
    callback();
  }, [callback]);

  useEffect(() => {
    setDataToRender(data);

    let sub = data
      .map((item: any) => item.commercial_group)
      .filter((value: any, index: any, self: any) => self.indexOf(value) === index);

    setSubscriptionGruop(sub);
  }, [data]);

  return (
    <div className="containerSmart">
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <>
          <SmartMovistarFilters
            title="SIMs Movistar"
            data={data}
            setData={setDataToRender}
            redirect="smart-movistar"
            sub={subscriptionGruop}
          />
          <SmartTable columns={columns} rows={dataToRender} step1 step2 step3 />
        </>
      )}
    </div>
  );
};

export default SmartMovistarContainer;
