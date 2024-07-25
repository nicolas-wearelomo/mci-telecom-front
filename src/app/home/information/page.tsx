"use client";

import React, { useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import southAmericaGeoJson from "../../../../public/assets/custom.geo.json";
import useGetInformationDashboard from "@/services/dashboard/useGetInformationDashboard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import Link from "next/link";

interface CountryColors {
  [key: string]: string;
}

interface GeoProperties {
  admin: string;
}

export default function Page() {
  const { currentUser } = useSelector((state: RootState) => state.auth);

  const { callback, data, loading } = useGetInformationDashboard();
  const countryColors: CountryColors = {
    Argentina: "#ffcc00",
    Chile: "#1f77b4",
    Peru: "#d62728",
    Uruguay: "#28a4cc",
    // Agrega más colores según sea necesario
  };

  useEffect(() => {
    if (currentUser && currentUser.company) {
      callback({ company: currentUser.company });
    }
  }, [currentUser, callback]);
  return (
    <div
      style={{
        height: "calc(100vh - 120px)",
        minWidth: "calc(100% - 20px)",
        maxWidth: "calc(100% - 20px)",
        overflow: "hidden", // Permite el desplazamiento en el eje Y
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#d6d6d6",
        borderRadius: "40px",
        backgroundColor: "white",
        padding: "30px",
      }}
    >
      <div className="p-5 flex justify-around border-solid border-2 border-[#d6d6d6] rounded-[32px] mb-7">
        <Link className="bg-[#24A2CE] text-white py-2 px-5 flex rounded-[16px]" href="/home/pooles">
          Pooles
        </Link>
        <Link className="bg-[#24A2CE] text-white py-2 px-5 flex rounded-[16px]" href="/home/operation">
          Operacion
        </Link>
        <Link className="bg-[#24A2CE] text-white py-2 px-5 flex rounded-[16px]" href="/home/business">
          Negocio
        </Link>
        <Link className="bg-[#24A2CE] text-white py-2 px-5 flex rounded-[16px]" href="/home/information">
          INFORMACIÓN
        </Link>
      </div>
      <div className="flex min-h-[70%] min-w-[80%]">
        <div className="ml-2 min-w-[250px]">
          <div className="text-2xl text-[#777777]">Presencia de SIMs</div>
          {data?.map((el: any) => (
            <p className="text-xl pl-2" key={el}>
              {el}
            </p>
          ))}
        </div>
        <div className="w-full mt-[-100px]">
          <div className="relative" style={{ width: "100%", height: "80%" }}>
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 270, // Ajusta este valor según sea necesario para aumentar el tamaño
                center: [-20, -30], // Centra el mapa en América del Sur
              }}
              style={{ objectFit: "contain", objectPosition: "top left", width: "100%", height: "100%" }}
            >
              <Geographies geography={southAmericaGeoJson}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const countryName = (geo.properties as GeoProperties).admin;
                    const isHighlighted = data.includes(countryName);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isHighlighted ? countryColors[countryName] : "#EAEAEC"}
                        stroke="#D6D6DA"
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          </div>
        </div>
      </div>
    </div>
  );
}
