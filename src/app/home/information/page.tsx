"use client";

import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import world from "../../../../public/assets/world.json";
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
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [dataToRender, setDataToRender] = useState<any>({});

  const { callback, data, loading } = useGetInformationDashboard();
  const countryColors: CountryColors = {
    Afghanistan: "#FF5733",
    "Åland Islands": "#33FF57",
    Albania: "#3357FF",
    Algeria: "#FF33A8",
    "American Samoa": "#33FFA8",
    Andorra: "#A833FF",
    Angola: "#FF8C33",
    Anguilla: "#33FF8C",
    Antarctica: "#8C33FF",
    "Antigua and Barbuda": "#FF3333",
    Argentina: "#0000FF",
    Armenia: "#3333FF",
    Aruba: "#FC4B08",
    Australia: "#33FFFF",
    Austria: "#FFFF33",
    Azerbaijan: "#FF6633",
    Bahamas: "#33FF66",
    Bahrain: "#6633FF",
    Bangladesh: "#FF3366",
    Barbados: "#66FF33",
    Belarus: "#3366FF",
    Belgium: "#FF9933",
    Belize: "#33FF99",
    Benin: "#9933FF",
    Bermuda: "#FF33CC",
    Bhutan: "#33FFCC",
    "Bolivia (Plurinational State of)": "#CC33FF",
    "Bonaire, Sint Eustatius and Saba": "#FC4B08",
    "Bosnia and Herzegovina": "#0000FF",
    Botswana: "#FF33A8",
    "Bouvet Island": "#33FFA8",
    Brazil: "#A833FF",
    "British Indian Ocean Territory": "#FF5733",
    "Brunei Darussalam": "#33FF57",
    Bulgaria: "#3357FF",
    "Burkina Faso": "#FF33A8",
    Burundi: "#33FFA8",
    "Cabo Verde": "#A833FF",
    Cambodia: "#FF8C33",
    Cameroon: "#33FF8C",
    Canada: "#8C33FF",
    "Cayman Islands": "#FF3333",
    "Central African Republic": "#0000FF",
    Chad: "#3333FF",
    Chile: "#FC4B08",
    China: "#33FFFF",
    "Christmas Island": "#FFFF33",
    "Cocos (Keeling) Islands": "#FF6633",
    Colombia: "#33FF66",
    Comoros: "#6633FF",
    Congo: "#FF3366",
    "Congo (Democratic Republic of the)": "#66FF33",
    "Cook Islands": "#3366FF",
    "Costa Rica": "#FF9933",
    Croatia: "#33FF99",
    Cuba: "#9933FF",
    Curaçao: "#FF33CC",
    Cyprus: "#33FFCC",
    Czechia: "#CC33FF",
    Denmark: "#FC4B08",
    Djibouti: "#0000FF",
    Dominica: "#FF33A8",
    "Dominican Republic": "#33FFA8",
    Ecuador: "#A833FF",
    Egypt: "#FF5733",
    "El Salvador": "#33FF57",
    "Equatorial Guinea": "#3357FF",
    Eritrea: "#FF33A8",
    Estonia: "#33FFA8",
    Eswatini: "#A833FF",
    Ethiopia: "#FF8C33",
    "Falkland Islands (Malvinas)": "#33FF8C",
    "Faroe Islands": "#8C33FF",
    Fiji: "#FF3333",
    Finland: "#0000FF",
    France: "#3333FF",
    "French Guiana": "#FC4B08",
    "French Polynesia": "#33FFFF",
    "French Southern Territories": "#FFFF33",
    Gabon: "#FF6633",
    Gambia: "#33FF66",
    Georgia: "#6633FF",
    Germany: "#FF3366",
    Ghana: "#66FF33",
    Gibraltar: "#3366FF",
    Greece: "#FF9933",
    Greenland: "#33FF99",
    Grenada: "#9933FF",
    Guadeloupe: "#FF33CC",
    Guam: "#33FFCC",
    Guatemala: "#CC33FF",
    Guernsey: "#FC4B08",
    Guinea: "#0000FF",
    "Guinea-Bissau": "#FF33A8",
    Guyana: "#33FFA8",
    Haiti: "#A833FF",
    "Heard Island and McDonald Islands": "#FF5733",
    "Holy See": "#33FF57",
    Honduras: "#3357FF",
    "Hong Kong": "#FF33A8",
    Hungary: "#33FFA8",
    Iceland: "#A833FF",
    India: "#FF8C33",
    Indonesia: "#33FF8C",
    "Iran (Islamic Republic of)": "#8C33FF",
    Iraq: "#FF3333",
    Ireland: "#0000FF",
    "Isle of Man": "#3333FF",
    Israel: "#FC4B08",
    Italy: "#33FFFF",
    Jamaica: "#FFFF33",
    Japan: "#FF6633",
    Jersey: "#33FF66",
    Jordan: "#6633FF",
    Kazakhstan: "#FF3366",
    Kenya: "#66FF33",
    Kiribati: "#3366FF",
    "Korea (Democratic People's Republic of)": "#FF9933",
    "Korea (Republic of)": "#33FF99",
    Kuwait: "#9933FF",
    Kyrgyzstan: "#FF33CC",
    "Lao People's Democratic Republic": "#33FFCC",
    Latvia: "#CC33FF",
    Lebanon: "#FC4B08",
    Lesotho: "#0000FF",
    Liberia: "#FF33A8",
    Libya: "#33FFA8",
    Liechtenstein: "#A833FF",
    Lithuania: "#FF5733",
    Luxembourg: "#33FF57",
    Macao: "#3357FF",
    Madagascar: "#FF33A8",
    Malawi: "#33FFA8",
    Malaysia: "#A833FF",
    Maldives: "#FF8C33",
    Mali: "#33FF8C",
    Malta: "#8C33FF",
    "Marshall Islands": "#FF3333",
    Martinique: "#0000FF",
    Mauritania: "#3333FF",
    Mauritius: "#FC4B08",
    Mayotte: "#33FFFF",
    Mexico: "#FFFF33",
    "Micronesia (Federated States of)": "#FF6633",
    "Moldova (Republic of)": "#33FF66",
    Monaco: "#6633FF",
    Mongolia: "#FF3366",
    Montenegro: "#66FF33",
    Montserrat: "#3366FF",
    Morocco: "#FF9933",
    Mozambique: "#33FF99",
    Myanmar: "#9933FF",
    Namibia: "#FF33CC",
    Nauru: "#33FFCC",
    Nepal: "#CC33FF",
    Netherlands: "#FC4B08",
    "New Caledonia": "#0000FF",
    "New Zealand": "#FF33A8",
    Nicaragua: "#33FFA8",
    Niger: "#A833FF",
    Nigeria: "#FF5733",
    Niue: "#33FF57",
    "Norfolk Island": "#3357FF",
    "Northern Mariana Islands": "#FF33A8",
    Norway: "#33FFA8",
    Oman: "#A833FF",
    Pakistan: "#FF8C33",
    Palau: "#33FF8C",
    "Palestine, State of": "#8C33FF",
    Panama: "#FF3333",
    "Papua New Guinea": "#0000FF",
    Paraguay: "#3333FF",
    Peru: "#FC4B08",
    Philippines: "#33FFFF",
    Pitcairn: "#FFFF33",
    Poland: "#FF6633",
    Portugal: "#33FF66",
    "Puerto Rico": "#6633FF",
    Qatar: "#FF3366",
    "Republic of North Macedonia": "#66FF33",
    Romania: "#3366FF",
    "Russian Federation": "#FF9933",
    Rwanda: "#33FF99",
    Réunion: "#9933FF",
    "Saint Barthélemy": "#FF33CC",
    "Saint Helena, Ascension and Tristan da Cunha": "#33FFCC",
    "Saint Kitts and Nevis": "#CC33FF",
    "Saint Lucia": "#FC4B08",
    "Saint Martin (French part)": "#0000FF",
    "Saint Pierre and Miquelon": "#FF33A8",
    "Saint Vincent and the Grenadines": "#33FFA8",
    Samoa: "#A833FF",
    "San Marino": "#FF5733",
    "Sao Tome and Principe": "#33FF57",
    "Saudi Arabia": "#3357FF",
    Senegal: "#FF33A8",
    Serbia: "#33FFA8",
    Seychelles: "#A833FF",
    "Sierra Leone": "#FF8C33",
    Singapore: "#33FF8C",
    "Sint Maarten (Dutch part)": "#8C33FF",
    Slovakia: "#FF3333",
    Slovenia: "#0000FF",
    "Solomon Islands": "#3333FF",
    Somalia: "#FC4B08",
    "South Africa": "#33FFFF",
    "South Georgia and the South Sandwich Islands": "#FFFF33",
    "South Sudan": "#FF6633",
    Spain: "#33FF66",
    "Sri Lanka": "#6633FF",
    Sudan: "#FF3366",
    Suriname: "#66FF33",
    "Svalbard and Jan Mayen": "#3366FF",
    Sweden: "#FF9933",
    Switzerland: "#33FF99",
    "Syrian Arab Republic": "#9933FF",
    "Taiwan, Province of China": "#FF33CC",
    Tajikistan: "#33FFCC",
    "Tanzania, United Republic of": "#CC33FF",
    Thailand: "#FC4B08",
    "Timor-Leste": "#0000FF",
    Togo: "#FF33A8",
    Tokelau: "#33FFA8",
    Tonga: "#A833FF",
    "Trinidad and Tobago": "#FF5733",
    Tunisia: "#33FF57",
    Turkey: "#3357FF",
    Turkmenistan: "#FF33A8",
    "Turks and Caicos Islands": "#33FFA8",
    Tuvalu: "#A833FF",
    Uganda: "#FF8C33",
    Ukraine: "#33FF8C",
    "United Arab Emirates": "#8C33FF",
    "United Kingdom of Great Britain and Northern Ireland": "#FF3333",
    "United States of America": "#0000FF",
    "United States Minor Outlying Islands": "#3333FF",
    Uruguay: "#FC4B08",
    Uzbekistan: "#33FFFF",
    Vanuatu: "#FFFF33",
    "Venezuela (Bolivarian Republic of)": "#FF6633",
    "Viet Nam": "#33FF66",
    "Virgin Islands (British)": "#6633FF",
    "Virgin Islands (U.S.)": "#FF3366",
    "Wallis and Futuna": "#66FF33",
    "Western Sahara": "#3366FF",
    Yemen: "#FF9933",
    Zambia: "#33FF99",
    Zimbabwe: "#9933FF",
  };

  useEffect(() => {
    if (currentUser && currentUser.company) {
      callback({ company: currentUser.company });
    }
  }, [currentUser, callback]);

  useEffect(() => {
    if (hoveredCountry) {
      let find = data?.countriesData?.find((el: any) => el.country === hoveredCountry);
      console.log(find);
      if (find) {
        setDataToRender(find);
      } else {
        setDataToRender({});
      }
    }
  }, [hoveredCountry]);

  return (
    <div>
      <div className="p-2 flex justify-around border-solid border-2 border-[#d6d6d6] rounded-[32px] mb-2 mr-5">
        {currentUser?.client_type === 1 ? (
          <Link className="text-black w-full justify-center py-2 flex rounded-[16px]" href="/home/pooles">
            Pooles
          </Link>
        ) : null}
        <Link className="text-black w-full justify-center py-2 flex rounded-[16px]" href="/home/operation">
          Operacion
        </Link>
        <Link className="text-black w-full justify-center py-2 flex rounded-[16px]" href="/home/business">
          Negocio
        </Link>
        <Link
          className="bg-[#E7FAFF] text-[#24A2CE] font-bold w-full justify-center py-2 flex rounded-[16px]"
          href="/home/information"
        >
          Información
        </Link>
      </div>
      <div className="flex min-h-[70%] min-w-[80%]">
        <div className="ml-2 min-w-[350px]">
          <div className="text-2xl text-[#777777]">Presencia de SIMs</div>
          {/* {data?.map((el: any) => (
            <p className="text-xl pl-2" key={el}>
              {el}
            </p>
          ))} */}
          {hoveredCountry && (
            <div className="text-xl pl-2 mt-4">
              <p>
                <strong>Pais:</strong> {hoveredCountry}
              </p>
              <p>
                <strong>Datos Totales:</strong> {dataToRender?.data?.toFixed(0) || 0} MB
              </p>
              <p>
                <strong>SMS enviados:</strong> {dataToRender?.sms?.toFixed(0) || 0} sms
              </p>
              <p>
                <strong>Llamadas de voz:</strong> {dataToRender?.voice?.toFixed(0) || 0} Min
              </p>
            </div>
          )}
        </div>
        <div className="w-full">
          <div className="relative" style={{ width: "85%", height: "85%" }}>
            <ComposableMap
              projection="geoMercator"
              style={{ objectFit: "contain", objectPosition: "top left", width: "100%", height: "100%" }}
            >
              <Geographies geography={world}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const countryName = (geo.properties as GeoProperties).admin;
                    const isHighlighted = data?.countries?.includes(countryName);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isHighlighted ? countryColors[countryName] : "#EAEAEC"}
                        stroke="#D6D6DA"
                        onMouseEnter={() => setHoveredCountry(countryName)}
                        onMouseLeave={() => setHoveredCountry(null)}
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
