"use client";
import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface URLBoxProps {
  url: string;
}

const URLBox: React.FC<URLBoxProps> = ({ url }) => (
  <TextField
    fullWidth
    variant="outlined"
    value={url}
    sx={{ marginTop: 1, marginBottom: 1 }}
    InputProps={{
      readOnly: true,
      style: {
        fontFamily: "monospace",
        color: "#000",
      },
    }}
  />
);
interface JSONBoxProps {
  jsonText: string;
}

const JSONBox: React.FC<JSONBoxProps> = ({ jsonText }) => {
  return (
    <Box
      component="pre"
      sx={{
        marginTop: 2,
        marginBottom: 2,
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f5f5f5",
        fontFamily: "monospace",
        whiteSpace: "pre-wrap",
        overflow: "auto",
      }}
    >
      <Typography variant="body1">{jsonText}</Typography>
    </Box>
  );
};

export default function Page() {
  const [selected, setSelected] = useState<number>(1);

  const [apiSelected, setApiSelected] = useState(1);

  return (
    <div className="pr-5 overflow-y-hidden h-[85vh] border-solid border-2 border-[#d6d6d6] rounded-[32px] p-5 mr-5">
      <h3 className="text-[#24A2CE] text-2xl">¿Qué tipo de ayuda necesitas?</h3>
      <div className="grid grid-cols-2 py-2 border-solid border-2 border-gray-300 rounded-full mt-5">
        <div
          className={`text-center cursor-pointer py-2 ${
            selected === 1 && "bg-[#E7FAFF] text-[#24A2CE] rounded-full mx-2 font-bold"
          }`}
          onClick={() => setSelected(1)}
        >
          Ayuda plataforma MCI Telecom
        </div>
        <div
          className={`text-center cursor-pointer py-2 ${
            selected === 2 && "bg-[#E7FAFF] text-[#24A2CE] rounded-full mx-2 font-bold"
          }`}
          onClick={() => setSelected(2)}
        >
          Ayuda API Rest Clientes
        </div>
      </div>
      <div className="mt-5">
        {selected === 1 ? (
          <div>
            <p className="font-bold">Pasos recomendados para la solución de problemas</p>
            <p className="text-gray-400">
              La solución de problemas involucra una seria de pruebas para aislar el incidente a unos pocos puntos de
              falla. Gracias a estas pruebas se podrá identificar la causa de la incidecia y su posterior solución.
              Estas pruebas deben hacerse antes de contactar al{" "}
              <span className="font-bold text-black">soprte de MCI Telecom</span>
            </p>
            <div className="grid grid-cols-2 gap-20">
              <div>
                <div className="mt-5">
                  <p className="font-bold">Provisión</p>
                  <p className="text-gray-400">
                    1. Revise en la plataforma de MCItelecom si el estado de la SIM le permite traficar datos. Los
                    estados que permiten traficar datos son:
                  </p>
                  <p className="text-gray-400 pl-2">a. &quot;TEST&quot; </p>
                  <p className="text-gray-400 pl-2">b. &quot;LISTA PARA ACTIVACIÓN&quot;</p>
                  <p className="text-gray-400 pl-2">c. &quot;ACTIVA&quot;</p>
                </div>
                <div className="mt-5">
                  <p className="font-bold">Cobertura</p>
                  <p className="text-gray-400">
                    1. Revise que la SIM está en un lugar donde hay cobertura celular, puede verificar la cobertura en
                    este link.
                  </p>
                  <p className="text-gray-400">
                    2. ¿Hay más dispositivos trabajando en la misma área? Si es así, no hay problemas de cobertura.
                  </p>
                  <p className="text-gray-400">
                    3. Tener en cuenta que la ubicación del dispositivo dentro de un local o caja metálica puede afectar
                    la calidad de la señal.
                  </p>
                </div>
                <div className="mt-5">
                  <p className="font-bold">Dispositivo</p>
                  <p className="text-gray-400">
                    1. Revise si el dispositivo ha sido configurado con el APN correcto (m2m.movistar.cl)
                  </p>
                  <p className="text-gray-400">2. Reinicie el dispositivo.</p>
                  <p className="text-gray-400">
                    Use la SIM en otro dispositivo, si esta vez funciona entonces el problema está en el dispositivo.
                  </p>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <p className="font-bold">SIM</p>
                  <p className="text-gray-400">1. Revise si la SIM está correctamente asentada.</p>
                  <p className="text-gray-400">
                    2. Pruebe otra SIM en el mismo dispositivo. Si esta vez funciona entonces el problema está en la
                    SIM.
                  </p>
                </div>
                <div className="mt-5">
                  <p className="font-bold">Información Histórica</p>
                  <p className="text-gray-400">
                    1. Confirmar si la SIM ha transmitido alguna vez. Si es así, ¿Cuándo dejó de funcionar
                    correctamente? Para verificar esto, debe ingresar al listado de sus SIMs, en la columna Panel se
                    encuentra el ícono que le permite seleccionar la opción: “Ver estado de ciclo de vida de esta SIM”.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-5">
            <div>
              <p
                className={`cursor-pointer mt-2 ${apiSelected === 1 ? "text-black font-bold" : "text-gray-400"}`}
                onClick={() => setApiSelected(1)}
              >
                Introduccion
              </p>
              <p className="text-gray-400 mt-2">Métodos API</p>
              <div className="pl-6">
                <p
                  className={`cursor-pointer mt-2 ${apiSelected === 2 ? "text-black font-bold" : "text-gray-400"}`}
                  onClick={() => setApiSelected(2)}
                >
                  Listar SIM
                </p>
                <p
                  className={`cursor-pointer mt-2 ${apiSelected === 3 ? "text-black font-bold" : "text-gray-400"}`}
                  onClick={() => setApiSelected(3)}
                >
                  Detalles SIM
                </p>
                <p
                  className={`cursor-pointer mt-2 ${apiSelected === 4 ? "text-black font-bold" : "text-gray-400"}`}
                  onClick={() => setApiSelected(4)}
                >
                  Detalles SIM IMEI
                </p>
                <p
                  className={`cursor-pointer mt-2 ${apiSelected === 5 ? "text-black font-bold" : "text-gray-400"}`}
                  onClick={() => setApiSelected(5)}
                >
                  Reset SIM
                </p>
                <p
                  className={`cursor-pointer mt-2 ${apiSelected === 6 ? "text-black font-bold" : "text-gray-400"}`}
                  onClick={() => setApiSelected(6)}
                >
                  Status SIM
                </p>
                <p
                  className={`cursor-pointer mt-2 ${apiSelected === 7 ? "text-black font-bold" : "text-gray-400"}`}
                  onClick={() => setApiSelected(7)}
                >
                  Status SIM IMEI
                </p>
                <p
                  className={`cursor-pointer mt-2 ${apiSelected === 8 ? "text-black font-bold" : "text-gray-400"}`}
                  onClick={() => setApiSelected(8)}
                >
                  Activar / Desactivar SIM
                </p>
                <p
                  className={`cursor-pointer mt-2 ${apiSelected === 9 ? "text-black font-bold" : "text-gray-400"}`}
                  onClick={() => setApiSelected(9)}
                >
                  Estado SMS
                </p>
                <p
                  className={`cursor-pointer mt-2 ${apiSelected === 10 ? "text-black font-bold" : "text-gray-400"}`}
                  onClick={() => setApiSelected(10)}
                >
                  Enviar SMS
                </p>
              </div>
            </div>
            <div className="col-span-4 max-h-[65vh] overflow-auto">
              {apiSelected === 1 ? (
                <div>
                  <h2 className="font-bold">Introducción</h2>
                  <h5 className="font-bold mt-5">URL Servicios</h5>
                  <p className="pl-5 mt-2">La API REST de Control Center está disponible de manera segura por HTTPS.</p>
                  <p className="pl-5 mt-2">
                    La URL base para todas las llamadas de API es la siguiente:
                    https://sim.mcitelecom.com/init/services/v1/
                  </p>
                  <p className="pl-5 mt-2">La versión actual de API es la version v1.</p>

                  <h5 className="font-bold mt-5">Autenticación</h5>
                  <p className="pl-5 mt-2">
                    Todas las llamadas de API pueden autenticarse a través del esquema de autenticación HTTP
                    &quot;Basic&quot;. Para ello, se utiliza el encabezado &quot;Authorization&quot; para envíar la API
                    Key como parte del mensaje en las solicitudes a la API. El valor definido en
                    &quot;Authorization&quot; debe corresponder al texto &quot;Basic &quot; + la API Key (con solo un
                    espacio entre ambos).
                  </p>
                  <p className="pl-5 mt-2">
                    La API Key es proporcioanda por MCI Telecom, las solicitudes pueden realizarse a través de esta
                    misma plataforma accediendo al menú &quot;SIMs&quot; y opción &quot;Orders&quot;.
                  </p>

                  <h5 className="font-bold mt-5">Recursos</h5>
                  <p className="pl-5 mt-2">Los métodos disponibles en la API son los siguientes:</p>
                  <p className="pl-10 mt-2">Listar SIM</p>
                  <p className="pl-10 mt-2">Detalles SIM</p>
                  <p className="pl-10 mt-2">Reset SIM</p>
                  <p className="pl-10 mt-2">Status SIM</p>
                  <p className="pl-10 mt-2">Activar / Desactivar SIM</p>
                  <p className="pl-10 mt-2">Estado SMS</p>
                  <p className="pl-10 mt-2">Enviar SMS</p>

                  <h5 className="font-bold mt-5">Prácticas recomendadas</h5>
                  <p className="pl-5 mt-2">
                    Con el objetivo de preservar un correcto funcionamiento y desempeño de la API Rest Clientes deben
                    tenerse en cuenta recomendaciones que se presentan a continuación.
                  </p>
                  <p className="pl-5 mt-2 font-bold">Conexiones concurrentes</p>
                  <p className="pl-5 mt-2">
                    En lo posible, limite la cantidad de llamadas a máximo una a la vez. Llamadas concurrentes pueden
                    afectar los tiempos de respuesta.
                  </p>
                  <p className="pl-5 mt-2 font-bold">Límite de llamadas por periodo de tiempo</p>
                  <p className="pl-5 mt-2">
                    La API posee un mecanismo de control para limitar la cantidad de transacciones por periodo de
                    tiempo.
                  </p>
                  <p className="pl-5 mt-2">
                    En caso de superar el límite definido de máximo <span className="font-bold">120 llamadas</span> en
                    un periodo de <span className="font-bold">120 segundos</span>, API podría restringir el acceso
                    enviando respuestas de error para cualquier llamada subsiguiente a la API dentro del periodo de
                    moderación definido en <span className="font-bold">120 segundos</span>.
                  </p>
                  <p className="pl-5 mt-2">En estos casos el error a recibir será:</p>
                  <p className="pl-10 mt-2">
                    <span className="text-red-600">429</span> TOO MANY REQUESTS
                  </p>
                  <p className="pl-5 mt-2">
                    Adicionalmente, se debe tener en cuenta que cada compañia proveedora de servicio podría establecer
                    restricciones particulares. En este sentido, se recomienda como regla general, no superar las
                    <span className="font-bold">5 llamadas por segundo. </span>
                  </p>
                  <p className="pl-5 mt-2 mb-10">
                    En caso de dudas, se recomienda ponerse en contacto con soporte de MCItelecom
                  </p>
                </div>
              ) : null}
              {apiSelected === 2 ? (
                <div>
                  <h2 className="font-bold">Método Listar SIM</h2>
                  <h5 className="font-bold mt-5">Descripción</h5>
                  <p className="pl-5 mt-2">
                    Muestra el listado de SIMs incluyendo todos los proveedores de servicio. Los resultados son
                    paginados.
                  </p>
                  <h5 className="font-bold mt-5">URL</h5>
                  <URLBox url={"GET https://sim.mcitelecom.com/init/services/v1/sim?page=1"} />
                  <URLBox url={"GET https://sim.mcitelecom.com/init/services/v1/sim?page=1&sp=1"} />
                  <URLBox url={"GET https://sim.mcitelecom.com/init/services/v1/sim?page=1&sp=2"} />
                  <h5 className="font-bold mt-5">Parámetros de entrada</h5>
                  <div className="flex font-semibold mt-2">
                    <div className="w-[15%]">Parámetro</div>
                    <div className="w-[10%]">Tipo</div>
                    <div className="w-[15%]">Opcional</div>
                    <div className="w-[60%]">Descripción</div>
                  </div>
                  <div className="flex mt-2 text-gray-600">
                    <div className="w-[15%]">page</div>
                    <div className="w-[10%]">int</div>
                    <div className="w-[15%]">si</div>
                    <div className="w-[60%]">
                      Permite indicar el número de página requerido, el valor predeterminado es 1
                    </div>
                  </div>
                  <div className="flex mt-2 text-gray-600">
                    <div className="w-[15%]">sp</div>
                    <div className="w-[10%]">int</div>
                    <div className="w-[15%]">si</div>
                    <div className="w-[60%]">1 (SIMs movistar) 2 (SIMs entel) 4 (SIMs tele2)</div>
                  </div>
                  <h5 className="font-bold mt-5">Ejemplo mensaje de entrada</h5>
                  <p className="font-mono pl-10 mt-2">GET /init/services/v1/sim?page=1</p>
                  <p className="font-mono pl-10">Content-Type: application/json</p>
                  <p className="font-mono pl-10">Accept: application/json</p>
                  <p className="font-mono pl-10">
                    Authorization: Basic c2lsdmlvLTIxQGxvY2FsaG9zdDpkMzBiMDQxZi01YjJhLTQ5Y2QtODcxOS01MjU0NGJmNmQwODI=
                  </p>
                  <p className="font-mono pl-10">Connection: Keep-Alive</p>
                  <p className="font-mono pl-10">Host: sim.mcitelecom.com</p>
                  <h5 className="font-bold mt-5">Ejemplo de invocación</h5>
                  <p className="font-mono pl-10 mt-2">
                    curl -X GET --header &quot;Content-Type: application/json&quot; --header &quot;Accept:
                    application/json&quot;
                  </p>
                  <p className="font-mono pl-10">
                    --header &quot;Authorization: Basic
                    c2lsdmlvLTIxQGxvY2FsaG9zdDpkMzBiMDQxZi01YjJhLTQ5Y2QtODcxOS01MjU0NGJmNmQwODI=&quot;
                  </p>
                  <p className="font-mono pl-10"> &quot;https://sim.mcitelecom.com/init/services/v1/sim?page=1&quot;</p>
                  <h5 className="font-bold mt-5">Ejemplo mensaje respuesta</h5>
                  <p className="pl-5 mt-2">
                    Los mensajes de respuesta incluyen el parámetro &quot;result&quot; (true o false), que indica si la
                    consulta fue exitosa.
                  </p>
                  <JSONBox
                    jsonText={`
{
    "devices": [
        {
            "grupo de suscripcion": "GPS_D2049_CL_60M",
            "icc": "8956078100000533281",
            "imei": "864180036630001",
            "msisdn": "56953890123",
            "plan comercial": "60 MB | Local Smart M2M",
            "service_provider": "Movistar",
            "status": "ACTIVE"
        },
        {
            "grupo de suscripcion": "GPS_D2049_CL_60M",
            "icc": "8956078100000533299",
            "imei": "864035050434567",
            "msisdn": "56953876543",
            "plan comercial": "60 MB | Local Smart M2M",
            "service_provider": "Movistar",
            "status": "DEACTIVATED"
        },
        {
            "grupo de suscripcion": "GPS_D2049_CL_60M",
            "icc": "8956078100000533273",
            "imei": "864180036639012",
            "msisdn": "56954321098",
            "plan comercial": "60 MB | Local Smart M2M",
            "service_provider": "Movistar",
            "status": "DEACTIVATED"
        },
        {
            "grupo de suscripcion": "GPS_D1805_CL_15M",
            "icc": "8956078100000534396",
            "imei": "353836056345611",
            "msisdn": "56974123456",
            "plan comercial": "15 MB | Local Smart M2M",
            "service_provider": "Movistar",
            "status": "DEACTIVATED"
        },
        ...
    ]
    "lastPage": false,
    "pageNumber": 1, 
    "result": true
}
                    `}
                  />
                </div>
              ) : null}
              {apiSelected === 3 ? (
                <div>
                  <h2 className="font-bold">Método Detalles SIM</h2>
                  <h5 className="font-bold mt-5">Descripción</h5>
                  <p className="pl-5 mt-2">Muestra información detallada acerca de una SIM específica.</p>
                  <h5 className="font-bold mt-5">URL</h5>
                  <URLBox url={"GET https://sim.mcitelecom.com/init/services/v1/sim/icc/{icc}"} />
                  <URLBox url={"GET https://sim.mcitelecom.com/init/services/v1/sim/msisdn/{msisdn}"} />
                  <p className="pl-5 mt-2">
                    Este método, al igual que todos los otros métodos que permiten realizar acciones individuales sobre
                    una SIM, puede ser llamado indicando icc, imei o msisdn. Para consultas por IMEI revise la
                    documentación específica para ese tipo de consultas (Detalles SIM IMEI).
                  </p>
                  <h5 className="font-bold mt-5">Ejemplo mensaje de entrada</h5>
                  <p className="font-mono pl-10 mt-2">GET /init/services/v1/sim/icc/8912345678900001234</p>
                  <p className="font-mono pl-10 mt-2">HTTP/1.1</p>
                  <p className="font-mono pl-10 mt-2">Content-Type: application/json</p>
                  <p className="font-mono pl-10 mt-2">Accept: application/json</p>
                  <p className="font-mono pl-10 mt-2">
                    Authorization: Basic c2lsdmlvLTIxQGxvY2FsaG9zdDpkMzBiMDQxZi01YjJhLTQ5Y2QtODcxOS01MjU0NGJmNmQwODI=
                  </p>
                  <p className="font-mono pl-10 mt-2">Host: sim.mcitelecom.com</p>
                  <p className="font-mono pl-10 mt-2">Connection: Keep-Alive</p>

                  <h5 className="font-bold mt-5">Ejemplo de invocación</h5>
                  <p className="font-mono pl-10 mt-2">
                    curl -X GET --header &quot;Content-Type: application/json&quot; --header &quot;Accept:
                    application/json&quot;
                  </p>
                  <p className="font-mono pl-10 mt-2">
                    --header &quot;Authorization: Basic
                    c2lsdmlvLTIxQGxvY2FsaG9zdDpkMzBiMDQxZi01YjJhLTQ5Y2QtODcxOS01MjU0NGJmNmQwODI=&quot;
                  </p>
                  <p className="font-mono pl-10 mt-2">
                    https://sim.mcitelecom.com/init/services/v1/sim/icc/8912345678900001234
                  </p>

                  <h5 className="font-bold mt-5">Parámetros de entrada</h5>
                  <div className="flex font-semibold mt-2">
                    <div className="w-[15%]">Parámetro</div>
                    <div className="w-[15%]">Tipo</div>
                    <div className="w-[70%]">Descripción</div>
                  </div>
                  <div className="flex mt-2 text-gray-600">
                    <div className="w-[15%]">status</div>
                    <div className="w-[15%]">texto</div>
                    <div className="w-[70%]">
                      Estado de ciclo de vida de SIM: “INACTIVE_NEW”, “TEST”, “ACTIVATION_PENDANT”, “ACTIVATION_READY”,
                      “DEACTIVATED”, “ACTIVE”, “SUSPENDED”, “RETIRED”, “RESTORE”
                    </div>
                  </div>
                  <div className="flex mt-2 text-gray-600">
                    <div className="w-[15%]">gpr_status</div>
                    <div className="w-[15%]">int</div>
                    <div className="w-[70%]">
                      0: &quot;Sin Datos&quot; 1: &quot;Activa&quot; 2: &quot;Desactivada&quot;
                    </div>
                  </div>
                  <div className="flex mt-2 text-gray-600">
                    <div className="w-[15%]">rat_type</div>
                    <div className="w-[15%]">int</div>
                    <div className="w-[70%]">
                      Última tecnología de acceso por radio detectada (1: 3G, 2:2G, 5:3.5G, 6:4G, 8:NB-IoT)
                    </div>
                  </div>
                  <h5 className="font-bold mt-5">Ejemplo mensaje respuesta</h5>
                  <p className="pl-5 mt-2">
                    Los mensajes de respuesta incluyen el parámetro &quot;result&quot; (true o false), que indica si la
                    consulta fue exitosa.
                  </p>
                  <p className="pl-5 mt-2">Respuesta para consulta SIM Movistar:</p>
                  <JSONBox
                    jsonText={`
{
    "activation_date": "2019-01-05", 
    "comm_module_manufacturer": "Shenzhen Coban Electronics Co Ltd", 
    "comm_module_model": "302", 
    "commercial_group": "GPS_D2049_CL_60M", 
    "consumption_daily_data_limit": 0.0, 
    "consumption_daily_data_val": 0.0, 
    "consumption_daily_sms_limit": 0, 
    "consumption_daily_sms_val": 0, 
    "consumption_daily_voice_limit": 0, 
    "consumption_daily_voice_val": 0, 
    "consumption_monthly_data_limit": 60.0, 
    "consumption_monthly_data_val": 0.0, 
    "consumption_monthly_sms_limit": 0, 
    "consumption_monthly_sms_val": 0, 
    "consumption_monthly_voice_limit": 0, 
    "consumption_monthly_voice_val": 0, 
    "country": null, 
    "datahome": true, 
    "dataroaming": false, 
    "gpr_last_conn_start": null, 
    "gpr_last_conn_stop": null, 
    "gpr_status": 0, 
    "icc": "8912345678900001234", 
    "imei": "864180076543210", 
    "imei_last_change": null, 
    "imsi": "730071010063322", 
    "ip": "", 
    "last_con": null, 
    "latitude": -33.38884, 
    "longitude": -70.650616, 
    "lte_enabled": true, 
    "msisdn": "56954321098", 
    "operator_sim": null, 
    "plan_comercial": "60 MB | Local Smart M2M", 
    "rat_type": 2, 
    "result": true, 
    "service_provider": "Movistar", 
    "sim_apn": "m2m.movistar.cl", 
    "sim_global": false, 
    "sim_model": "Gemalto", 
    "smsoriginatedhome": false, 
    "smsoriginatedinternational": false, 
    "smsoriginatedroaming": false, 
    "smsterminatedhome": false, 
    "smsterminatedroaming": false, 
    "static_ip": "", 
    "status": "DEACTIVATED", 
    "voiceoriginatedhome": false, 
    "voiceoriginatedinternational": false, 
    "voiceoriginatedroaming": false, 
    "voiceterminatedhome": false, 
    "voiceterminatedroaming": false
} `}
                  />
                  <p className="pl-5 mt-2">Respuesta para consulta SIM Entel:</p>
                  <JSONBox
                    jsonText={`
{
    "activation_date": "2022-06-20", 
    "comm_module_manufacturer": "", 
    "comm_module_model": "", 
    "commercial_group": "ENTEL_M2M_50M", 
    "consumption_daily_data_limit": null, 
    "consumption_daily_data_val": null, 
    "consumption_daily_sms_limit": null, 
    "consumption_daily_sms_val": null, 
    "consumption_daily_voice_limit": null, 
    "consumption_daily_voice_val": null, 
    "consumption_monthly_data_val": 0, 
    "consumption_monthly_sms_val": 0, 
    "consumption_monthly_voice_val": 0, 
    "country": "CL", 
    "gpr_last_conn_start": "2022-09-15 16:02:00", 
    "gpr_last_conn_stop": "2022-09-15 16:02:00", 
    "gpr_status": 2, 
    "icc": "8912345678900001234", 
    "imei": "864180076543210", 
    "imsi": "56954321098", 
    "ip": "10.51.113.67", 
    "latitude": null, 
    "longitude": null, 
    "lte_enabled": "", 
    "msisdn": "56974981183", 
    "plan_comercial": "50 MB | Local Smart Entel", 
    "rat_type": "", 
    "result": true, 
    "service_provider": "Entel", 
    "sim_apn": "m2m.entel.cl", 
    "sim_global": false, 
    "sim_model": "", 
    "static_ip": "", 
    "status": "ACTIVE"
}`}
                  />
                </div>
              ) : null}
              {apiSelected === 4 ? (
                <div>
                  <h2 className="font-bold">Método Detalles SIM IMEI</h2>
                  <h5 className="font-bold mt-5">Descripción</h5>
                  <p className="pl-5 mt-2">Muestra información detallada acerca de una SIM específica.</p>
                  <h5 className="font-bold mt-5">URL</h5>
                  <URLBox url={"GET https://sim.mcitelecom.com/init/services/v1/sim/imei/{imei}"} />

                  <p className="pl-5 mt-2">
                    Este método, al igual que todos los otros métodos que permiten realizar acciones individuales sobre
                    una SIM, puede ser llamado indicando icc, imei o msisdn.
                  </p>
                  <p className="pl-5 mt-2">
                    Para consultas por IMEI se debe tener en consideración que puede existir más de una SIM asociada a
                    un mismo IMEI. En esos casos, se retornará la información de cada una de las SIMs asociadas al IMEI.
                  </p>
                  <h5 className="font-bold mt-5">Ejemplo mensaje de entrada</h5>
                  <p className="font-mono pl-10 mt-2">GET /init/services/v1/sim/imei/864180076543210</p>
                  <p className="font-mono pl-10 mt-2">HTTP/1.1</p>
                  <p className="font-mono pl-10 mt-2">Content-Type: application/json</p>
                  <p className="font-mono pl-10 mt-2">Accept: application/json</p>
                  <p className="font-mono pl-10 mt-2">
                    Authorization: Basic c2lsdmlvLTIxQGxvY2FsaG9zdDpkMzBiMDQxZi01YjJhLTQ5Y2QtODcxOS01MjU0NGJmNmQwODI=
                  </p>
                  <p className="font-mono pl-10 mt-2">Host: sim.mcitelecom.com</p>
                  <p className="font-mono pl-10 mt-2">Connection: Keep-Alive</p>

                  <h5 className="font-bold mt-5">Ejemplo de invocación</h5>
                  <p className="font-mono pl-10 mt-2">
                    curl -X GET --header &quot;Content-Type: application/json&quot; --header &quot;Accept:
                    application/json&quot;
                  </p>
                  <p className="font-mono pl-10 mt-2">
                    --header &quot;Authorization: Basic
                    c2lsdmlvLTIxQGxvY2FsaG9zdDpkMzBiMDQxZi01YjJhLTQ5Y2QtODcxOS01MjU0NGJmNmQwODI=&quot;
                  </p>
                  <p className="font-mono pl-10 mt-2">
                    https://sim.mcitelecom.com/init/services/v1/sim/imei/864180076543210
                  </p>

                  <h5 className="font-bold mt-5">Detalles mensaje de respuesta</h5>
                  <div className="flex font-semibold mt-2">
                    <div className="w-[15%]">Parámetro</div>
                    <div className="w-[15%]">Tipo</div>
                    <div className="w-[70%]">Descripción</div>
                  </div>
                  <div className="flex mt-2 text-gray-600">
                    <div className="w-[15%]">status</div>
                    <div className="w-[15%]">texto</div>
                    <div className="w-[70%]">
                      Estado de ciclo de vida de SIM: “INACTIVE_NEW”, “TEST”, “ACTIVATION_PENDANT”, “ACTIVATION_READY”,
                      “DEACTIVATED”, “ACTIVE”, “SUSPENDED”, “RETIRED”, “RESTORE”
                    </div>
                  </div>
                  <div className="flex mt-2 text-gray-600">
                    <div className="w-[15%]">gpr_status</div>
                    <div className="w-[15%]">int</div>
                    <div className="w-[70%]">
                      0: &quot;Sin Datos&quot; 1: &quot;Activa&quot; 2: &quot;Desactivada&quot;
                    </div>
                  </div>
                  <div className="flex mt-2 text-gray-600">
                    <div className="w-[15%]">rat_type</div>
                    <div className="w-[15%]">int</div>
                    <div className="w-[70%]">
                      Última tecnología de acceso por radio detectada (1: 3G, 2:2G, 5:3.5G, 6:4G, 8:NB-IoT)
                    </div>
                  </div>
                  <h5 className="font-bold mt-5">Ejemplo mensaje respuesta</h5>
                  <p className="pl-5 mt-2">
                    Los mensajes de respuesta incluyen el parámetro &quot;result&quot; (true o false), que indica si la
                    consulta fue exitosa.
                  </p>
                  <p className="pl-5 mt-2">Respuesta para consulta SIM Movistar:</p>
                  <JSONBox
                    jsonText={`
{
    "devices": [
        {
            "activation_date": "2019-01-05", 
            "comm_module_manufacturer": "Shenzhen Coban Electronics Co Ltd", 
            "comm_module_model": "302", 
            "commercial_group": "GPS_D2049_CL_60M", 
            "consumption_daily_data_limit": 0.0, 
            "consumption_daily_data_val": 0.0, 
            "consumption_daily_sms_limit": 0, 
            "consumption_daily_sms_val": 0, 
            "consumption_daily_voice_limit": 0, 
            "consumption_daily_voice_val": 0, 
            "consumption_monthly_data_limit": 60.0, 
            "consumption_monthly_data_val": 0.0, 
            "consumption_monthly_sms_limit": 0, 
            "consumption_monthly_sms_val": 0, 
            "consumption_monthly_voice_limit": 0, 
            "consumption_monthly_voice_val": 0, 
            "country": null, 
            "datahome": true, 
            "dataroaming": false, 
            "gpr_last_conn_start": null, 
            "gpr_last_conn_stop": null, 
            "gpr_status": 0, 
            "icc": "8912345678900001234", 
            "imei": "864180076543210", 
            "imei_last_change": null, 
            "imsi": "730071010063322", 
            "ip": "", 
            "last_con": null, 
            "latitude": -33.38884, 
            "longitude": -70.650616, 
            "lte_enabled": true, 
            "msisdn": "56954321098", 
            "operator_sim": null, 
            "plan_comercial": "60 MB | Local Smart M2M", 
            "rat_type": 2, 
            "service_provider": "Movistar", 
            "sim_apn": "m2m.movistar.cl", 
            "sim_global": false, 
            "sim_model": "Gemalto", 
            "smsoriginatedhome": false, 
            "smsoriginatedinternational": false, 
            "smsoriginatedroaming": false, 
            "smsterminatedhome": false, 
            "smsterminatedroaming": false, 
            "static_ip": "", 
            "status": "DEACTIVATED", 
            "voiceoriginatedhome": false, 
            "voiceoriginatedinternational": false, 
            "voiceoriginatedroaming": false, 
            "voiceterminatedhome": false, 
            "voiceterminatedroaming": false
        }
    ], 
    "result": true
} `}
                  />
                  <p className="pl-5 mt-2">Respuesta para consulta SIM Entel:</p>
                  <JSONBox
                    jsonText={`
{
    "devices": [
        {
            "activation_date": "2022-06-20", 
            "comm_module_manufacturer": "", 
            "comm_module_model": "", 
            "commercial_group": "ENTEL_M2M_50M", 
            "consumption_daily_data_limit": null, 
            "consumption_daily_data_val": null, 
            "consumption_daily_sms_limit": null, 
            "consumption_daily_sms_val": null, 
            "consumption_daily_voice_limit": null, 
            "consumption_daily_voice_val": null, 
            "consumption_monthly_data_val": 0, 
            "consumption_monthly_sms_val": 0, 
            "consumption_monthly_voice_val": 0, 
            "country": "CL", 
            "gpr_last_conn_start": "2022-09-15 16:02:00", 
            "gpr_last_conn_stop": "2022-09-15 16:02:00", 
            "gpr_status": 2, 
            "icc": "8912345678900001234", 
            "imei": "864180076543210", 
            "imsi": "56954321098", 
            "ip": "10.51.113.67", 
            "latitude": null, 
            "longitude": null, 
            "lte_enabled": "", 
            "msisdn": "56974981183", 
            "plan_comercial": "50 MB | Local Smart Entel", 
            "rat_type": "", 
            "service_provider": "Entel", 
            "sim_apn": "m2m.entel.cl", 
            "sim_global": false, 
            "sim_model": "", 
            "static_ip": "", 
            "status": "ACTIVE"
        }
    ], 
    "result": true
}`}
                  />
                </div>
              ) : null}
              {apiSelected === 5 ? (
                <div>
                  <h2 className="font-bold">Método Reset SIM</h2>
                  <h5 className="font-bold mt-5">Descripción</h5>
                  <p className="pl-5 mt-2">
                    Permite realizar un reinicio de la SIM desactivando la SIM y luego volviendo a activarla.
                  </p>
                  <h5 className="font-bold mt-5">URL</h5>
                  <URLBox url={"GET https://sim.mcitelecom.com/init/services/v1/sim/reset/icc/{icc}"} />
                  <URLBox url={"GET https://sim.mcitelecom.com/init/services/v1/sim/reset/msisdn/{msisdn}"} />
                  <URLBox url={"GET https://sim.mcitelecom.com/init/services/v1/sim/reset/imei/{imei}"} />

                  <p className="pl-5 mt-2">
                    Este método, al igual que todos los otros métodos que permiten realizar acciones individuales sobre
                    una SIM, puede ser llamado indicando icc, imei o msisdn.
                  </p>
                  <p className="pl-5 mt-2">
                    Para consultas por IMEI se debe tener en consideración que puede existir más de una SIM asociada a
                    un mismo IMEI. En esos casos, retornará error y se indicará que la acción debe realizarse indicando
                    icc o msisdn.
                  </p>
                  <h5 className="font-bold mt-5">Ejemplo mensaje de entrada</h5>
                  <p className="font-mono pl-10 mt-2">GET /init/services/v1/sim/reset/icc/8912345678900001234</p>
                  <p className="font-mono pl-10 mt-2">HTTP/1.1</p>
                  <p className="font-mono pl-10 mt-2">Content-Type: application/json</p>
                  <p className="font-mono pl-10 mt-2">Accept: application/json</p>
                  <p className="font-mono pl-10 mt-2">
                    Authorization: Basic c2lsdmlvLTIxQGxvY2FsaG9zdDpkMzBiMDQxZi01YjJhLTQ5Y2QtODcxOS01MjU0NGJmNmQwODI=
                  </p>
                  <p className="font-mono pl-10 mt-2">Host: sim.mcitelecom.com</p>
                  <p className="font-mono pl-10 mt-2">Connection: Keep-Alive</p>

                  <h5 className="font-bold mt-5">Ejemplo de invocación</h5>
                  <p className="font-mono pl-10 mt-2">
                    curl -X GET --header &quot;Content-Type: application/json" --header "Accept: application/json&quot;
                  </p>
                  <p className="font-mono pl-10 mt-2">
                    --header &quot;Authorization: Basic
                    c2lsdmlvLTIxQGxvY2FsaG9zdDpkMzBiMDQxZi01YjJhLTQ5Y2QtODcxOS01MjU0NGJmNmQwODI=&quot;
                  </p>
                  <p className="font-mono pl-10 mt-2">
                    https://sim.mcitelecom.com/init/services/v1/sim/reset/icc/8912345678900001234
                  </p>

                  <h5 className="font-bold mt-5">Ejemplo mensaje respuesta</h5>
                  <p className="pl-5 mt-2">
                    Los mensajes de respuesta incluyen el parámetro &quot;result&quot; (true o false), que indica si la
                    consulta fue exitosa.
                  </p>
                  <p className="pl-5 mt-2">Respuesta para consulta SIM Movistar:</p>
                  <JSONBox
                    jsonText={`
{
    "new_status": "ACTIVE", 
    "message": "SIM reiniciada", 
    "result": true
}`}
                  />
                  <p className="pl-5 mt-2">Ejemplo respuestas de error</p>
                  <JSONBox
                    jsonText={`
{
    "error": "Estado 'DEACTIVATED' de Sim icc 8912345678900001234 no admite realizar reinicio", 
    "result": false
}`}
                  />
                  <JSONBox
                    jsonText={`
{
    "error": "IMEI 864180076543210 tiene mas de una SIM asociada. Para realizar reset utilice icc o msisdn", 
    "result": false
}`}
                  />
                </div>
              ) : null}
              {apiSelected === 6 ? (
                <div>
                  <h2 className="font-bold">Método Status SIM</h2>
                  <h5 className="font-bold mt-5">Descripción</h5>
                  <p className="pl-5 mt-2">Muestra información del estado de una SIM específica.</p>
                  <h5 className="font-bold mt-5">URL</h5>
                  <URLBox url={"GET https://sim.mcitelecom.com/init/services/v1/sim/status/icc/{icc}"} />
                  <URLBox url={"GET https://sim.mcitelecom.com/init/services/v1/sim/status/msisdn/{msisdn}"} />

                  <p className="pl-5 mt-2">
                    Este método, al igual que todos los otros métodos que permiten realizar acciones individuales sobre
                    una SIM, puede ser llamado indicando icc, imei o msisdn.
                  </p>
                  <p className="pl-5 mt-2">
                    Para consultas por IMEI revise la documentación específica para ese tipo de consultas (Status SIM
                    IMEI).
                  </p>
                  <h5 className="font-bold mt-5">Ejemplo mensaje de entrada</h5>
                  <p className="font-mono pl-10 mt-2">GET /init/services/v1/sim/status/icc/8912345678900001234</p>
                  <p className="font-mono pl-10 mt-2">HTTP/1.1</p>
                  <p className="font-mono pl-10 mt-2">Content-Type: application/json</p>
                  <p className="font-mono pl-10 mt-2">Accept: application/json</p>
                  <p className="font-mono pl-10 mt-2">
                    Authorization: Basic c2lsdmlvLTIxQGxvY2FsaG9zdDpkMzBiMDQxZi01YjJhLTQ5Y2QtODcxOS01MjU0NGJmNmQwODI=
                  </p>
                  <p className="font-mono pl-10 mt-2">Host: sim.mcitelecom.com</p>
                  <p className="font-mono pl-10 mt-2">Connection: Keep-Alive</p>

                  <h5 className="font-bold mt-5">Ejemplo de invocación</h5>
                  <p className="font-mono pl-10 mt-2">
                    curl -X GET --header &quot;Content-Type: application/json&quot; --header &quot;Accept:
                    application/json&quot;
                  </p>
                  <p className="font-mono pl-10 mt-2">
                    --header &quot;Authorization: Basic
                    c2lsdmlvLTIxQGxvY2FsaG9zdDpkMzBiMDQxZi01YjJhLTQ5Y2QtODcxOS01MjU0NGJmNmQwODI=&quot;
                  </p>
                  <p className="font-mono pl-10 mt-2">
                    https://sim.mcitelecom.com/init/services/v1/sim/status/icc/8912345678900001234
                  </p>

                  <h5 className="font-bold mt-5">Ejemplo mensaje respuesta</h5>
                  <p className="pl-5 mt-2">
                    Los mensajes de respuesta incluyen el parámetro &quot;result&quot; (true o false), que indica si la
                    consulta fue exitosa.
                  </p>
                  <p className="pl-5 mt-2">Respuesta para consulta SIM Movistar:</p>
                  <JSONBox
                    jsonText={`
{
    "icc": "8912345678900001234", 
    "imei": "864180076543210", 
    "result": true, 
    "service_provider": "Movistar", 
    "status": "DEACTIVATED"
}`}
                  />
                  <JSONBox
                    jsonText={`
{
    "icc": "8912345678900001234", 
    "imei": "864180076543210", 
    "result": true, 
    "service_provider": "Entel", 
    "status": "ACTIVE"
}`}
                  />
                </div>
              ) : null}
              {apiSelected === 7 ? (
                <div>
                  <h2 className="font-bold">Método Status SIM IMEI</h2>
                  <h5 className="font-bold mt-5">Descripción</h5>
                  <p className="pl-5 mt-2">Muestra información del estado de una SIM específica.</p>
                  <h5 className="font-bold mt-5">URL</h5>
                  <URLBox url={"GET https://sim.mcitelecom.com/init/services/v1/sim/status/imei/{imei}"} />

                  <p className="pl-5 mt-2">
                    Este método, al igual que todos los otros métodos que permiten realizar acciones individuales sobre
                    una SIM, puede ser llamado indicando icc, imei o msisdn.
                  </p>
                  <p className="pl-5 mt-2">
                    Para consultas por IMEI se debe tener en consideración que puede existir más de una SIM asociada a
                    un mismo IMEI. En esos casos, se retornará la información de cada una de las SIMs asociadas al IMEI.
                  </p>
                  <h5 className="font-bold mt-5">Ejemplo mensaje de entrada</h5>
                  <p className="font-mono pl-10 mt-2">GET /init/services/v1/sim/status/imei/864180076543210</p>
                  <p className="font-mono pl-10 mt-2">HTTP/1.1</p>
                  <p className="font-mono pl-10 mt-2">Content-Type: application/json</p>
                  <p className="font-mono pl-10 mt-2">Accept: application/json</p>
                  <p className="font-mono pl-10 mt-2">
                    Authorization: Basic c2lsdmlvLTIxQGxvY2FsaG9zdDpkMzBiMDQxZi01YjJhLTQ5Y2QtODcxOS01MjU0NGJmNmQwODI=
                  </p>
                  <p className="font-mono pl-10 mt-2">Host: sim.mcitelecom.com</p>
                  <p className="font-mono pl-10 mt-2">Connection: Keep-Alive</p>

                  <h5 className="font-bold mt-5">Ejemplo de invocación</h5>
                  <p className="font-mono pl-10 mt-2">
                    curl -X GET --header &quot;Content-Type: application/json&quot; --header &quot;Accept:
                    application/json&quot;
                  </p>
                  <p className="font-mono pl-10 mt-2">
                    --header &quot;Authorization: Basic
                    c2lsdmlvLTIxQGxvY2FsaG9zdDpkMzBiMDQxZi01YjJhLTQ5Y2QtODcxOS01MjU0NGJmNmQwODI=&quot;
                  </p>
                  <p className="font-mono pl-10 mt-2">
                    https://sim.mcitelecom.com/init/services/v1/sim/status/imei/864180076543210
                  </p>

                  <h5 className="font-bold mt-5">Ejemplo mensaje respuesta</h5>
                  <p className="pl-5 mt-2">
                    Los mensajes de respuesta incluyen el parámetro &quot;result&quot; (true o false), que indica si la
                    consulta fue exitosa.
                  </p>
                  <p className="pl-5 mt-2">Respuesta para consulta SIM Movistar:</p>
                  <JSONBox
                    jsonText={`
{
    "devices": [
        {
            "icc": "8912345678900001234", 
            "imei": "864180076543210", 
            "service_provider": "Movistar", 
            "status": "DEACTIVATED"
        }
    ], 
    "result": true
}`}
                  />
                  <JSONBox
                    jsonText={`
{
    "devices": [
        {
            "icc": "8912345678900001234", 
            "imei": "864180076543210", 
            "service_provider": "Entel", 
            "status": "ACTIVE"
        }
    ], 
    "result": true
}`}
                  />
                </div>
              ) : null}
              {apiSelected === 8 ? (
                <div>
                  <h2 className="font-bold">Método Activar / Desactivar SIM</h2>
                  <h5 className="font-bold mt-5">Descripción</h5>
                  <p className="pl-5 mt-2">
                    Permite cambiar el estado de una SIM cambiando de estado activo a desactivado y viceversa.
                  </p>
                  <h5 className="font-bold mt-5">URL</h5>
                  <URLBox url={"PUT https://sim.mcitelecom.com/init/services/v1sim/status/icc/{icc}"} />
                  <URLBox url={"PUT https://sim.mcitelecom.com/init/services/v1sim/status/msisdn/{msisdn}"} />
                  <URLBox url={"PUT https://sim.mcitelecom.com/init/services/v1sim/status/imei/{imei}"} />

                  <p className="pl-5 mt-2">
                    Este método, al igual que todos los otros métodos que permiten realizar acciones individuales sobre
                    una SIM, puede ser llamado indicando icc, imei o msisdn.
                  </p>
                  <p className="pl-5 mt-2">
                    Para consultas por IMEI se debe tener en consideración que puede existir más de una SIM asociada a
                    un mismo IMEI. En esos casos, retornará error y se indicará que la acción debe realizarse indicando
                    icc o msisdn.
                  </p>

                  <h5 className="font-bold mt-5">Parámetros de entrada</h5>
                  <div className="flex font-semibold mt-2">
                    <div className="w-[15%]">Parámetro</div>
                    <div className="w-[15%]">Tipo</div>
                    <div className="w-[15%]">Opcional</div>
                    <div className="w-[55%]">Descripción</div>
                  </div>
                  <div className="flex mt-2 text-gray-600">
                    <div className="w-[15%]">status</div>
                    <div className="w-[15%]">texto</div>
                    <div className="w-[15%]">no</div>
                    <div className="w-[55%]">
                      Se admiten solo los valores &quot;ACTIVE&quot; y &quot;DEACTIVATED&quot; para Activar o Desactivar
                      SIM respectivamente.
                    </div>
                  </div>

                  <h5 className="font-bold mt-5">Ejemplo mensaje de entrada</h5>
                  <p className="font-mono pl-10 mt-2">PUT /init/services/v1/sim/status/icc/8912345678900001234</p>
                  <p className="font-mono pl-10 mt-2">HTTP/1.1</p>
                  <p className="font-mono pl-10 mt-2">Content-Type: application/json</p>
                  <p className="font-mono pl-10 mt-2">Content-Length: nnnn</p>
                  <p className="font-mono pl-10 mt-2">Accept: application/json</p>
                  <p className="font-mono pl-10 mt-2">
                    Authorization: Basic c2lsdmlvLTIxQGxvY2FsaG9zdDpkMzBiMDQxZi01YjJhLTQ5Y2QtODcxOS01MjU0NGJmNmQwODI=
                  </p>
                  <p className="font-mono pl-10 mt-2">Host: sim.mcitelecom.com</p>
                  <p className="font-mono pl-10 mt-2">Connection: Keep-Alive</p>
                  <p className="font-mono pl-10 mt-2">{`{"status": "DEACTIVATED"}`}</p>

                  <h5 className="font-bold mt-5">Ejemplo de invocación</h5>
                  <p className="font-mono pl-10 mt-2">
                    curl -X PUT --header &quot;Content-Type: application/json&quot; --header &quot;Accept:
                    application/json&quot;
                  </p>
                  <p className="font-mono pl-10 mt-2">
                    --header &quot;Authorization: Basic
                    c2lsdmlvLTIxQGxvY2FsaG9zdDpkMzBiMDQxZi01YjJhLTQ5Y2QtODcxOS01MjU0NGJmNmQwODI=&quot;
                  </p>
                  <p className="font-mono pl-10 mt-2">
                    {` -d "{ "status": "DEACTIVATED"}" https://sim.mcitelecom.com/init/services/v1/sim/status/icc/8912345678900001234`}
                  </p>

                  <h5 className="font-bold mt-5">Ejemplo mensaje respuesta</h5>
                  <p className="pl-5 mt-2">
                    Los mensajes de respuesta incluyen el parámetro &quot;result&quot; (true o false), que indica si la
                    consulta fue exitosa.
                  </p>
                  <p className="pl-5 mt-2">Respuesta para consulta SIM Movistar:</p>
                  <JSONBox
                    jsonText={`
{
    "new_status": "DEACTIVATED", 
    "message": "Cambio estado sim", 
    "result": true
}`}
                  />
                  <p className="pl-5 mt-2">Ejemplo respuestas de error</p>
                  <JSONBox
                    jsonText={`
{
    "error": "Valor invalido para paramtro 'status'", 
    "result": false
}`}
                  />
                  <JSONBox
                    jsonText={`
{
    "error": "Sim icc 8912345678900001234 ya se encuentra en estado 'ACTIVE'", 
    "result": false
}`}
                  />
                  <JSONBox
                    jsonText={`
{
    "error": "IMEI 864180076543210 tiene mas de una SIM asociada. Para Activar/Desactivar utilice icc o msisdn", 
    "result": false
}`}
                  />
                </div>
              ) : null}
              {apiSelected === 9 ? (
                <div>
                  <h2 className="font-bold">Método Estado SMS</h2>
                  <h5 className="font-bold mt-5">Descripción</h5>
                  <p className="pl-5 mt-2">Muestra información de un mensaje SMS en particular.</p>
                  <h5 className="font-bold mt-5">URL</h5>
                  <URLBox url={"GET https://sim.mcitelecom.com/init/services/v1/sms/{smsMsgId}"} />
                  <h5 className="font-bold mt-5">Ejemplo mensaje de entrada</h5>
                  <p className="font-mono pl-10 mt-2">GET /init/services/v1/sms/aa6536c73f814fc387ca766f003e527c</p>
                  <p className="font-mono pl-10 mt-2">HTTP/1.1</p>
                  <p className="font-mono pl-10 mt-2">Content-Type: application/json</p>
                  <p className="font-mono pl-10 mt-2">Accept: application/json</p>
                  <p className="font-mono pl-10 mt-2">
                    Authorization: Basic c2lsdmlvLTIxQGxvY2FsaG9zdDpkMzBiMDQxZi01YjJhLTQ5Y2QtODcxOS01MjU0NGJmNmQwODI=
                  </p>
                  <p className="font-mono pl-10 mt-2">Host: sim.mcitelecom.com</p>
                  <p className="font-mono pl-10 mt-2">Connection: Keep-Alive</p>

                  <h5 className="font-bold mt-5">Ejemplo de invocación</h5>
                  <p className="font-mono pl-10 mt-2">
                    curl -X GET --header &quot;Content-Type: application/json&quot; --header &quot;Accept:
                    application/json&quot;
                  </p>
                  <p className="font-mono pl-10 mt-2">
                    --header "Authorization: Basic
                    c2lsdmlvLTIxQGxvY2FsaG9zdDpkMzBiMDQxZi01YjJhLTQ5Y2QtODcxOS01MjU0NGJmNmQwODI="
                  </p>
                  <p className="font-mono pl-10 mt-2">
                    https://sim.mcitelecom.com/init/services/v1/sms/aa6536c73f814fc387ca766f003e527c
                  </p>

                  <h5 className="font-bold mt-5">Ejemplo mensaje respuesta</h5>
                  <p className="pl-5 mt-2">
                    Los mensajes de respuesta incluyen el parámetro &quot;result&quot; (true o false), que indica si la
                    consulta fue exitosa.
                  </p>
                  <JSONBox
                    jsonText={`{
    "dateModified": "2022-09-29 01:07:54.083-0700", 
    "dateSent": "2022-09-26 04:22:54.096-0700", 
    "icc": "8912345678900001234", 
    "messageText": "26/09/2022 08:21 sim Entel", 
    "msgType": "MT", 
    "senderLogin": "765324440568", 
    "sentFrom": "Server", 
    "sentTo": "56954321098", 
    "smsMsgId": 13918359914, 
    "status": "Failed"
}`}
                  />
                  <JSONBox
                    jsonText={`{
    "dateModified": "2022-08-11 07:35:28.023-0700", 
    "dateReceived": "2022-08-11 07:35:28.013-0700", 
    "dateSent": "2022-08-11 07:35:25.596-0700", 
    "icc": "8912345678900001234", 
    "messageText": "Prueba mensaje", 
    "msgType": "MT", 
    "sentFrom": "Server", 
    "smsMsgId": aa6536c73f814fc387ca766f003e527c, 
    "status": "Delivered"
}`}
                  />
                  <h5 className="font-bold mt-5">Ejemplo respuesta de error</h5>
                  <JSONBox
                    jsonText={`{
    "result": false,
    "error": "Identificador unico del mensaje SMS (aa6536c73f814fc387ca766f003e527c) no encontrado"
}`}
                  />
                </div>
              ) : null}
              {apiSelected === 10 ? (
                <div>
                  <h2 className="font-bold">Método Enviar SMS</h2>
                  <h5 className="font-bold mt-5">Descripción</h5>
                  <p className="pl-5 mt-2">Envía un mensaje SMS a la SIM indicada.</p>
                  <h5 className="font-bold mt-5">URL</h5>
                  <URLBox url={"POST https://sim.mcitelecom.com/init/services/v1/sms/icc/{icc}"} />
                  <URLBox url={"POST https://sim.mcitelecom.com/init/services/v1/sms/msisdn/{msisdn}"} />
                  <URLBox url={"POST https://sim.mcitelecom.com/init/services/v1/sms/imei/{imei}"} />

                  <p className="pl-5 mt-2">
                    Este método, al igual que todos los otros métodos que permiten realizar acciones individuales sobre
                    una SIM, puede ser llamado indicando icc, imei o msisdn.
                  </p>
                  <p className="pl-5 mt-2">
                    Para consultas por IMEI se debe tener en consideración que puede existir más de una SIM asociada a
                    un mismo IMEI. En esos casos, retornará error y se indicará que la acción debe realizarse indicando
                    icc o msisdn.
                  </p>

                  <h5 className="font-bold mt-5">Parámetros de entrada</h5>
                  <div className="flex font-semibold mt-2">
                    <div className="w-[15%]">Parámetro</div>
                    <div className="w-[15%]">Tipo</div>
                    <div className="w-[15%]">Opcional</div>
                    <div className="w-[55%]">Descripción</div>
                  </div>
                  <div className="flex mt-2 text-gray-600">
                    <div className="w-[15%]">messageText</div>
                    <div className="w-[15%]">texto</div>
                    <div className="w-[15%]">no</div>
                    <div className="w-[55%]">Texto a enviar</div>
                  </div>

                  <h5 className="font-bold mt-5">Ejemplo mensaje de entrada</h5>
                  <p className="font-mono pl-10 mt-2">POST /init/services/v1/sms/icc/8912345678900001234</p>
                  <p className="font-mono pl-10 mt-2">HTTP/1.1</p>
                  <p className="font-mono pl-10 mt-2">Content-Type: application/json</p>
                  <p className="font-mono pl-10 mt-2">Content-Length: nnnn</p>
                  <p className="font-mono pl-10 mt-2">Accept: application/json</p>
                  <p className="font-mono pl-10 mt-2">
                    Authorization: Basic c2lsdmlvLTIxQGxvY2FsaG9zdDpkMzBiMDQxZi01YjJhLTQ5Y2QtODcxOS01MjU0NGJmNmQwODI=
                  </p>
                  <p className="font-mono pl-10 mt-2">Host: sim.mcitelecom.com</p>
                  <p className="font-mono pl-10 mt-2">Connection: Keep-Alive</p>
                  <p className="font-mono pl-10 mt-2">{`{"messageText": "Hello world"}`}</p>

                  <h5 className="font-bold mt-5">Ejemplo de invocación</h5>
                  <p className="font-mono pl-10 mt-2">
                    curl -X POST --header &quot;Content-Type: application/json&quot; --header &quot;Accept:
                    application/json&quot;
                  </p>
                  <p className="font-mono pl-10 mt-2">
                    --header "Authorization: Basic
                    c2lsdmlvLTIxQGxvY2FsaG9zdDpkMzBiMDQxZi01YjJhLTQ5Y2QtODcxOS01MjU0NGJmNmQwODI="
                  </p>
                  <p className="font-mono pl-10 mt-2">
                    {` -d "{ "messageText": "Hello world"}" https://sim.mcitelecom.com/init/services/v1/sms/icc/8912345678900001234
`}
                  </p>

                  <h5 className="font-bold mt-5">Ejemplo mensaje respuesta</h5>
                  <p className="pl-5 mt-2">
                    Los mensajes de respuesta incluyen el parámetro &quot;result&quot; (true o false), que indica si la
                    consulta fue exitosa.
                  </p>
                  <p className="pl-5 mt-2">Respuesta para consulta SIM Movistar:</p>
                  <JSONBox
                    jsonText={`{
    "messageText": "Hello world", 
    "msgType": "MT", 
    "sentFrom": "Server", 
    "smsMsgId": "aa6536c73f814fc387ca766f003e527c",
    "status": ""
}`}
                  />
                  <p className="pl-5 mt-2">Ejemplo respuestas de error</p>
                  <JSONBox
                    jsonText={`{
    "error": "Sim icc 8912345678900001234 no encontrada", 
    "result": false
}`}
                  />
                  <JSONBox
                    jsonText={`{
    "error": "Sim icc 8912345678900001234 ya se encuentra en estado 'ACTIVE'", 
    "result": false
}`}
                  />
                  <JSONBox
                    jsonText={`{
    "error": "IMEI 864180076543210 tiene mas de una SIM asociada. Para enviar SMS utilice icc o msisdn", 
    "result": false
}`}
                  />
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
