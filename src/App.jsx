import { useState } from "react"

function App() {
  const [empresa, setEmpresa] = useState("")
  const [motivo, setMotivo] = useState("")
  const [pantalla, setPantalla] = useState("inicio")
  const [pantallaAnterior, setPantallaAnterior] = useState("")
  const [datos, setDatos] = useState({nombre:"", dni:"", direccion:"", localidad:"", cliente:"", detalle:""})
  const generarReclamo = () => { return `RECLAMO - ${empresa}\nMotivo: ${motivo}\nNombre: ${datos.nombre}\nDNI: ${datos.dni}\nDirección: ${datos.direccion}\nLocalidad: ${datos.localidad}\nNúmero de cliente: ${datos.cliente}\nDetalle: ${datos.detalle}`; }
  if (pantalla === "electricidad") return <div style={{padding:"25px",fontFamily:"Arial"}}><h1>💡 Electricidad</h1><h2>Elegí tu empresa prestadora</h2><button style={boton} onClick={() => { setEmpresa("EDEA"); setPantalla("edea"); }}>EDEA</button><button style={boton} onClick={() => { setEmpresa("EDENOR"); setPantalla("edenor"); }}>Edenor</button><button style={boton} onClick={() => { setEmpresa("EDESUR"); setPantalla("edenor"); }}>Edesur</button><button style={boton}>Otra empresa</button></div>
  if (pantalla === "edea") return <div style={{padding:"25px",fontFamily:"Arial"}}><h1>💡 EDEA</h1><h2>¿Qué problema querés reclamar?</h2><button style={boton} onClick={() => { setMotivo("Corte de luz"); setPantalla("formulario-corte"); }}>⚡ Corte de luz</button><button style={boton} onClick={() => { setMotivo("Baja tensión"); setPantalla("formulario-corte"); }}>💡 Baja tensión</button><button style={boton} onClick={() => { setMotivo("Problema de facturación"); setPantallaAnterior("motivos-gas"); setPantalla("formulario-corte"); }}>🧾 Problema de facturación</button><button style={boton} onClick={() => { setMotivo("Problema con el medidor"); setPantallaAnterior("motivos-gas"); setPantalla("formulario-corte"); }}>🔌 Problema con el medidor</button><button style={boton}>🛠️ Demora en reparación</button><button style={boton} onClick={() => { setMotivo("Otro problema"); setPantallaAnterior("motivos-gas"); setPantalla("formulario-corte"); }}>➕ Otro problema</button></div>
  if (pantalla === "edenor") return <div style={{padding:"25px",fontFamily:"Arial"}}><h1>💡 Edenor</h1><h2>¿Qué problema querés reclamar?</h2><button style={boton} onClick={() => { setMotivo("Corte de luz"); setPantalla("formulario-corte"); }}>⚡ Corte de luz</button><button style={boton} onClick={() => { setMotivo("Baja tensión"); setPantalla("formulario-corte"); }}>💡 Baja tensión</button><button style={boton} onClick={() => { setMotivo("Problema de facturación"); setPantallaAnterior("motivos-gas"); setPantalla("formulario-corte"); }}>🧾 Problema de facturación</button><button style={boton} onClick={() => { setMotivo("Problema con el medidor"); setPantallaAnterior("motivos-gas"); setPantalla("formulario-corte"); }}>🔌 Problema con el medidor</button><button style={boton}>🛠️ Demora en reparación</button><button style={boton} onClick={() => { setMotivo("Otro problema"); setPantallaAnterior("motivos-gas"); setPantalla("formulario-corte"); }}>➕ Otro problema</button></div>
  if (pantalla === "formulario-corte") return <div style={{padding:"25px",fontFamily:"Arial"}}><button onClick={() => setPantalla(empresa === "CAMUZZI" || empresa === "CAMUZZI SUR" || empresa === "CAMUZZI PAMPEANA" ? "camuzzi-zona" : empresa === "NATURGY BAN" || empresa === "NATURGY NOA" ? "motivos-gas" : "electricidad")}></button><h1>{motivo}</h1><h2>Completá los datos del reclamo</h2><input placeholder="Nombre y apellido" style={campo} value={datos.nombre} onChange={(e) => setDatos({...datos,nombre:e.target.value})}/><input placeholder="DNI" style={campo} value={datos.dni} onChange={(e) => setDatos({...datos,dni:e.target.value})}/><input placeholder="Dirección del suministro" style={campo} value={datos.direccion} onChange={(e) => setDatos({...datos,direccion:e.target.value})}/><input placeholder="Localidad" style={campo} value={datos.localidad} onChange={(e) => setDatos({...datos,localidad:e.target.value})}/><input placeholder="Número de cliente" style={campo} value={datos.cliente} onChange={(e) => setDatos({...datos,cliente:e.target.value})}/><textarea placeholder="Contanos qué pasó..." style={campo} value={datos.detalle} onChange={(e) => setDatos({...datos,detalle:e.target.value})}></textarea><button style={boton} onClick={() => setPantalla("resumen")}>Continuar</button></div>
    console.log("EMPRESA AL ENTRAR AL FORMULARIO:", empresa);
  if (pantalla === "resumen") return <div style={{padding:"25px",fontFamily:"Arial"}}><button onClick={() => setPantalla("formulario-corte")}></button><h1>📋 Resumen del reclamo</h1><h2>Revisá los datos antes de enviarlo</h2><p>Empresa: {empresa}</p><p>Motivo: {motivo}</p><p><b>Nombre:</b> {datos.nombre}</p><p><b>DNI:</b> {datos.dni}</p><p><b>Dirección:</b> {datos.direccion}</p><p><b>Localidad:</b> {datos.localidad}</p><p><b>Número de cliente:</b> {datos.cliente}</p><p><b>Detalle:</b> {datos.detalle}</p><button style={boton} onClick={() => { window.open(`https://wa.me/${empresa==="EDENOR"?"5491139000000":empresa==="EDESUR"?"541161876995":empresa==="METROGAS"?"541131802222":empresa==="CAMUZZI"?"541139311234":empresa==="NATURGY BAN"?"5491133060800":empresa==="NATURGY NOA"?"5493813560060":"5492236343332"}?text=${encodeURIComponent(generarReclamo())}`, "_blank"); setPantalla("inicio") }}>Enviar reclamo</button></div>
  if (pantalla === "naturgy-zona") return <div style={{padding:"25px",fontFamily:"Arial"}}><h2>🔥 Naturgy</h2><p>Seleccioná tu zona:</p><button style={boton} onClick={() => { setEmpresa("NATURGY BAN"); setPantalla("motivos-gas"); }}>Naturgy BAN - Buenos Aires</button><button style={boton} onClick={() => { setEmpresa("NATURGY NOA"); setPantalla("motivos-gas"); }}>Naturgy NOA - Jujuy / Salta / Tucumán / Santiago del Estero</button><button style={boton} onClick={() => setPantalla("gas")}></button></div>
  if (pantalla === "camuzzi-zona") return <div style={{padding:"25px",fontFamily:"Arial"}}><h2>🔥 Camuzzi</h2><p>Seleccioná tu zona:</p><button style={boton} onClick={() => { setEmpresa("CAMUZZI PAMPEANA"); setPantalla("motivos-gas"); }}>Camuzzi Gas Pampeana</button><button style={boton} onClick={() => { setEmpresa("CAMUZZI SUR"); setPantalla("motivos-gas"); }}>Camuzzi Gas del Sur</button><button style={boton} onClick={() => setPantalla("gas")}></button></div>
  if (pantalla === "motivos-gas") return <div style={{padding:"25px",fontFamily:"Arial"}}><h2>🔥 {empresa}</h2><p>¿Cuál es el problema?</p><button style={boton} onClick={() => { setMotivo("Falta de suministro"); setPantallaAnterior("motivos-gas"); setPantalla("formulario-corte"); }}>🔥 Falta de suministro</button><button style={boton} onClick={() => { setMotivo("Problema de facturación"); setPantallaAnterior("motivos-gas"); setPantalla("formulario-corte"); }}>🧾 Problema de facturación</button><button style={boton} onClick={() => { setMotivo("Problema con el medidor"); setPantallaAnterior("motivos-gas"); setPantalla("formulario-corte"); }}>🔧 Problema con el medidor</button><button style={boton} onClick={() => { setMotivo("Demora en reparación"); setPantallaAnterior("motivos-gas"); setPantalla("formulario-corte"); }}>🛠️ Demora en reparación</button><button style={boton} onClick={() => { setMotivo("Otro problema"); setPantallaAnterior("motivos-gas"); setPantalla("formulario-corte"); }}>➕ Otro problema</button><button style={boton} onClick={() => setPantalla(empresa === "CAMUZZI" || empresa === "CAMUZZI SUR" || empresa === "CAMUZZI PAMPEANA" ? "camuzzi-zona" : empresa === "NATURGY BAN" || empresa === "NATURGY NOA" ? "naturgy-zona" : empresa === "METROGAS" ? "motivos-gas" : "electricidad")}></button></div>
  if (pantalla === "gas") return <div style={{padding:"25px",fontFamily:"Arial"}}><h2>🔥 Gas</h2><p>Seleccioná tu empresa:</p><button style={boton} onClick={() => { setEmpresa("METROGAS"); setPantallaAnterior("gas"); setPantalla("motivos-gas"); }}>Metrogas</button><button style={boton} onClick={() => { setPantalla("naturgy-zona"); }}>Naturgy</button><button style={boton} onClick={() => { setEmpresa("CAMUZZI"); setPantalla("camuzzi-zona"); }}>Camuzzi</button></div>
  if (pantalla === "enviado") return <div style={{padding:"25px",fontFamily:"Arial",textAlign:"center"}}><h1>✅ Reclamo preparado</h1><p>Los datos del reclamo fueron procesados correctamente.</p><p><b>Importante:</b> el reclamo fue derivado al canal de contacto de la empresa seleccionada.</p><button style={boton} onClick={() => setPantalla("inicio")}>Volver al inicio</button></div>
  return (
    <div style={{
      minHeight: "100vh",
      background: "#f4f6f8",
      fontFamily: "Arial, sans-serif"
    }}>
      <header style={{
        background: "#0d47a1",
        color: "white",
        padding: "22px",
        textAlign: "center"
      }}>
        <h1 style={{ margin: 0 }}>ReclamAR</h1>
        <p>Todos tus reclamos en un solo lugar</p>
      </header>

      <main style={{
        maxWidth: "500px",
        margin: "auto",
        padding: "25px"
      }}>
        <h2>¿Qué necesitás reclamar?</h2>

        <button style={boton} onClick={() => setPantalla("electricidad")}>💡 Luz / Electricidad</button>
        <button style={boton} onClick={() => setPantalla("gas")}>🔥 Gas</button>
        <button style={boton} onClick={() => setPantalla("agua")}>💧 Agua</button>
        <button style={boton}>📱 Telefonía e Internet</button>
        <button style={boton}>🏦 Bancos y tarjetas</button>
        <button style={boton}>🛒 Compras y comercios</button>
        <button style={boton}>🏛️ Servicios públicos</button>
        <button style={boton}>➕ Otro reclamo</button>
      </main>
    </div>
  )
}

  const campo = {display:"block",width:"100%",boxSizing:"border-box",padding:"14px",margin:"12px 0",fontSize:"16px",borderRadius:"8px",border:"1px solid #ccc"}
const boton = {
  display: "block",
  width: "100%",
  padding: "16px",
  margin: "12px 0",
  fontSize: "17px",
  textAlign: "left",
  border: "none",
  borderRadius: "10px",
  background: "white",
  color: "#222",
  boxShadow: "0 2px 8px #ccc"
}

export default App
