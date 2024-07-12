"use client";
import CustomTable from "@/components/CustomTable";
import OrderFilters from "@/components/Orders/Filters/OrderFilters";
import { ModelTableOrders } from "@/models/orders/modelOrders";
import { RootState } from "@/redux/types";
import useGetOrders from "@/services/orders/useGetOrders";
import { Button } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const OrderContainer = () => {
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const { callback, data, loading } = useGetOrders();
  const [dataToRender, setDataToRender] = useState<any>({});

  useEffect(() => {
    if (currentUser) {
      callback({ company: currentUser?.company });
    }
  }, [currentUser]);

  interface HomeTable {
    id: number;
    type: string;
    total: number;
  }

  console.log(data);

  const smsTableData: ModelTableOrders<HomeTable> = {
    columns: [
      { header: "N°", field: "id", width: 50 },
      { header: "Tipo", field: "shipping_type", width: 200 },
      { header: "Estado", field: "stage", width: 100 },
      { header: "Fecha Ingreso", field: "created_on", width: 200 },
      { header: "Fecha Actualización", field: "modified_on", width: 200 },
    ],
    rows: data,
  };

  return (
    <div className="container">
      {/* <OrderFilters /> */}
      {/* <CustomTable dataTable={smsTableData} /> */}
      <div className="flex justify-between mb-5">
        <h3>Listado de pedidos</h3>
        <Button variant="outlined">
          <Link href="/orders/new-orders">Nuevo Pedido</Link>
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <div className={`flex bg-[#E7FAFF] text-[#24A2CE] font-bold py-2`}>
            {smsTableData.columns.map((column) => (
              <div key={column.field} className={`w-[${column.width}px]`}>
                {column.header}
              </div>
            ))}
          </div>
          {smsTableData.rows.map((row, rowIndex) => (
            <div key={rowIndex} className={`flex cursor-pointer`} onClick={() => setDataToRender(row)}>
              {smsTableData.columns.map((column) => (
                <p
                  key={`${rowIndex}-${column.field}`}
                  className={` w-[${column.width}px]  py-2 border-solid border-b-2 border-[#F5F5F5]`}
                >
                  {(row as any)[column.field]}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div>
          {Object.keys(dataToRender).length ? (
            <div>
              <div className="">
                <p className="font-bold text-xl mb-2">Detalle</p>
                <p className="font-bold">Información de solicitud</p>
                <div className="grid grid-cols-2 text-[#777777]">
                  <div>
                    <div>
                      <p className="font-bold">Número</p>
                      <p>{dataToRender?.id}</p>
                    </div>
                    <div>
                      <p className="font-bold">Estado</p>
                      <p>{dataToRender?.stage}</p>
                    </div>
                    <div>
                      <p className="font-bold">Fecha de actualización</p>
                      <p>{dataToRender?.modified_on}</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="font-bold">Solicitante</p>
                      {/* <p className="text-red-600 font-bold">De donde sale este dato?</p> */}
                      <p className="text-red-600 font-bold">-</p>
                    </div>
                    <div>
                      <p className="font-bold">Fecha de solicitud</p>
                      <p>{dataToRender?.created_on}</p>
                    </div>
                  </div>
                </div>
              </div>
              {dataToRender.ordersData.length ? (
                <div>
                  <p className="font-bold mt-4">Datos del pedido</p>
                  <div className=" text-[#777777]">
                    <div>
                      <div>
                        <div className="grid grid-cols-4">
                          <p className="font-bold col-span-2">Tipo de plan</p>
                          <p className="font-bold">Cantidad</p>
                          <p className="font-bold">Tamaño</p>
                        </div>
                        <p>
                          {dataToRender.ordersData.map((el: any) => (
                            <div className="grid grid-cols-4" key={el.id}>
                              <div className="col-span-2">
                                {el.opertor_sim} de {el.name}
                              </div>
                              <div>{el.quantity}</div>
                              <div>{el.sim_size === 1 ? "Estándar" : el.sim_size === 2 ? "Micro" : "Nano"}</div>
                            </div>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="font-bold mt-4">Información para el envío</p>
                  <div className="grid grid-cols-2 text-[#777777]">
                    <div>
                      <p className="font-bold">Pais</p>
                      <p>{dataToRender.country || "S/D"}</p>
                    </div>
                    <div>
                      <div>
                        <p className="font-bold">Comuna</p>
                        <p>{dataToRender.commune || "S/D"}</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 text-[#777777]">
                    <div>
                      <p className="font-bold">Dirección</p>
                      <p>{dataToRender.address || "S/D"}</p>
                    </div>
                    <div>
                      <div>
                        <p className="font-bold">Número / Departamento / Oficina</p>
                        <p>{dataToRender.number_address || "S/D"}</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 text-[#777777]">
                    <div>
                      <p className="font-bold">Comentario</p>
                      <p>{dataToRender.comments || "S/D"}</p>
                    </div>
                    <div>
                      <div>
                        <p className="font-bold">Teléfono de contacto</p>
                        <p>{dataToRender.contact_phone_number || "S/D"}</p>
                      </div>
                    </div>
                  </div>
                  <div className=" text-[#777777]">
                    <div>
                      <p className="font-bold">Nombre de contacto</p>
                      <p>{dataToRender.contact_name || "S/D"}</p>
                    </div>
                  </div>
                  <p className="font-bold mt-4">Información para seguimiento de entrega</p>
                  <p className="font-bold text-[#777777]">Código de seguimiento</p>
                  <p className="text-[#777777]"> {dataToRender.tracking_number || "S/D"}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderContainer;
