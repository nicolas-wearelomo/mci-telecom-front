"use client";
import SmartMovistarFilters from "@/components/Sims/SmartMovistar/SmartMovistarFilters";
import SmartTable from "@/components/SmartTable";
import useSmartMovistarColumn from "@/components/SmartTable/columns/useSmartMovistarColumns";
import { RootState } from "@/redux/types";
import useGetAllMovistarSims from "@/services/sims/movistar/useGetAllMovistarSims";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

const SmartEntelContainer = () => {
  const [subscriptionGruop, setSubscriptionGruop] = useState([]);
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const [dataToRender, setDataToRender] = useState([]);
  const { callback, data, loading } = useGetAllMovistarSims({
    company: currentUser?.company,
    service_provider: "Entel",
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
            title="SIMs Entel"
            data={data}
            setData={setDataToRender}
            redirect="smart-entel"
            sub={subscriptionGruop}
          />
          <SmartTable columns={columns} rows={dataToRender} step1 />
        </>
      )}
    </div>
  );
};

export default SmartEntelContainer;
