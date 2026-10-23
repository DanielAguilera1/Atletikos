import Image from "next/image";
import Link from "next/link";
import mainPhoto from "../img/MainPhoto.png";
import comunidadPhoto from "../img/svg/people-svgrepo-com.svg";
import shoePhoto from "../img/svg/shoes-4-svgrepo-com.svg";
import mountainPhoto from "../img/svg/mountain-svgrepo-com.svg";
import heartPhoto from "../img/svg/heart-svgrepo-com.svg";

export default function Home() {
  return (
    <body className="bg-black text-white">
      <nav className="bg-black fixed w-full z-20 top-0 inset-s-0">
        <div className="max-w-full flex flex-wrap items-center justify-between p-4 mx-7 max-[1000px]:mx-0">
          <button
            type="button"
            className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
            <h1 className="text-xl font-bold tracking-widest italic">
              ATLETIKOS
              <span className="text-lime-400 text-sm block">RUNNING TEAM</span>
            </h1>
          </button>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link
              className="bg-lime-400 text-black px-6 py-3 font-semibold inline-block"
              href="/login">
              ACCEDER
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base min-[850px]:hidden min-[850px]:w-auto hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
              aria-controls="navbar-sticky"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                aria-hidden="true"
                className="w-6 h-6"
                viewBox="0 0 24 24">
                <path
                  stroke="#9ae600"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full min-[850px]:flex min-[850px]:w-auto md:order-1"
            id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-brand rounded-sm hover:text-lime-400 md:bg-transparent md:text-fg-brand md:p-0"
                  aria-current="page">
                  INICIO
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:text-lime-400 md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">
                  CALENDARIO
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:text-lime-400 md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">
                  SOBRE NOSOTROS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:text-lime-400 md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">
                  CONTACTO
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center px-10">
        <Image
          src={mainPhoto}
          alt="Atletas corriendo juntos"
          fill
          className="object-cover opacity-80"
          priority
        />

        <div className="relative max-w-xl">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight italic">
            CORREMOS <br />
            <span className="text-lime-400">JUNTOS</span>
            <br />
            SOMOS MÁS
            <br />
            <span className="text-lime-400">FUERTES</span>
          </h2>

          <p className="mt-5 text-gray-300">
            Más que un equipo, somos una comunidad <br />
            que entrena, se motiva y supera límites juntos.
          </p>

          <Link
            className="mt-6 bg-lime-400 text-black px-6 py-3 font-semibold inline-block"
            href="/register">
            ÚNETE AL TEAM →
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-4 gap-6 px-10 py-16 bg-[#0a0a0a] text-center bg-topografia">
        <div>
          <Image
            src={comunidadPhoto}
            alt="Comunidad de corredores"
            width={64}
            height={64}
            className="w-full h-16"
          />
          <h4 className="font-semibold mt-3">COMUNIDAD</h4>
          <p className="text-gray-400 text-sm mt-2">Conectamos corredores</p>
        </div>

        <div>
          <Image
            src={shoePhoto}
            alt="Entrenamiento para corredores"
            width={64}
            height={64}
            className="w-full h-16"
          />
          <h4 className="font-semibold mt-3">ENTRENAMIENTO</h4>
          <p className="text-gray-400 text-sm mt-2">Planes para todos</p>
        </div>

        <div>
          <Image
            src={mountainPhoto}
            alt="Superación y aventura"
            width={64}
            height={64}
            className="w-full h-16"
          />
          <h4 className="font-semibold mt-3">SUPERACIÓN</h4>
          <p className="text-gray-400 text-sm mt-2">Rompe tus límites</p>
        </div>

        <div>
          <Image
            src={heartPhoto}
            alt="Pasión por correr"
            width={64}
            height={64}
            className="w-full h-16"
          />
          <h4 className="font-semibold mt-3">PASIÓN</h4>
          <p className="text-gray-400 text-sm mt-2">Amamos correr</p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-10 px-10 py-20 items-center">
        <Image
          src="https://images.unsplash.com/photo-1502904550040-7534597429ae"
          alt="Corredor entrenando al aire libre"
          width={800}
          height={1000}
          className="rounded-lg grayscale"
          unoptimized
        />

        <div>
          <p className="text-lime-400 text-sm">SOBRE NOSOTROS</p>
          <h2 className="text-4xl font-bold mt-2">ATLETIKOS ES ACTITUD</h2>

          <p className="text-gray-400 mt-4">
            Nacimos con la idea de formar un equipo donde el running sea el
            medio para construir algo más grande: disciplina, comunidad y estilo
            de vida.
          </p>

          <button className="mt-6 border border-lime-400 px-5 py-2 hover:bg-lime-400 hover:text-black">
            CONOCE NUESTRA HISTORIA →
          </button>
        </div>
      </section>

      <section className="px-10 py-20 bg-[#0a0a0a]">
        <h2 className="text-3xl font-bold mb-10">VAMOS POR MÁS</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-5 rounded-lg">
            <p className="text-lime-400 font-bold">25 MAY</p>
            <h3 className="text-xl mt-2">LONG RUN</h3>
            <p className="text-gray-400 text-sm">Cerro de la silla</p>
          </div>

          <div className="bg-gray-900 p-5 rounded-lg">
            <p className="text-lime-400 font-bold">08 JUN</p>
            <h3 className="text-xl mt-2">TRACK NIGHT</h3>
            <p className="text-gray-400 text-sm">Velocidad</p>
          </div>

          <div className="bg-gray-900 p-5 rounded-lg">
            <p className="text-lime-400 font-bold">22 JUN</p>
            <h3 className="text-xl mt-2">21K</h3>
            <p className="text-gray-400 text-sm">Carrera Monterrey</p>
          </div>
        </div>
      </section>

      <section className="bg-lime-400 text-black px-10 py-10 flex flex-col md:flex-row justify-between items-center gap-5">
        <p className="font-semibold">
          Recibe novedades y entrenamientos en tu correo
        </p>

        <div className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Tu correo"
            className="px-4 py-2 w-full text-black outline-none"
          />
          <button className="bg-black text-white px-6">SUSCRIBIRME</button>
        </div>
      </section>

      <footer className="px-10 py-10 text-gray-400 text-sm grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-white font-bold">ATLETIKOS</h3>
          <p className="mt-2">Running Team</p>
        </div>

        <div>
          <h4 className="text-white font-semibold">Navegación</h4>
          <ul className="mt-2 space-y-1">
            <li className="hover:text-lime-400">Inicio</li>
            <li className="hover:text-lime-400">Sobre nosotros</li>
            <li className="hover:text-lime-400">Entrenamientos</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold">Legal</h4>
          <ul className="mt-2 space-y-1">
            <li className="hover:text-lime-400">Términos</li>
            <li className="hover:text-lime-400">Privacidad</li>
          </ul>
        </div>
      </footer>
    </body>
  );
}
