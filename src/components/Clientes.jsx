export default function Clientes() {
  return (
    <>


      <section className="clientes-container flex justify-center items-center flex-col pt-16 pb-16">

        <div className="flex items-center justify-center">
          <span style={{ width: "109px" }} className="h-px bg-black"></span>
          <h2 className="px-6">Clientes</h2>
          <span style={{ width: "109px" }} className="h-px bg-black"></span>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:gap-10 lg:my-16">
        <a href="https://www.instagram.com/niniolobo/?hl=es" target="_blank">  <img width="300px" src="/nino-lobo.webp" alt="Logo de Niño Lobo" /> </a>
        <a href="https://www.instagram.com/humo.patiodecarnes/" target="_blank">  <img width="200px" src="/humo.webp" alt="Logo de Humo" /> </a>
      </div>
      </section>

    </>
  )
}