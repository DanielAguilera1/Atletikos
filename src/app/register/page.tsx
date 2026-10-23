import Link from "next/link";
import Image from "next/image";
import registerPhoto from "../../img/LoginRegisterPhoto.png";
import personIcon from "../../img/svg/person.svg";
import mailIcon from "../../img/svg/mail-svgrepo-com.svg";
import lockIcon from "../../img/svg/lock-svgrepo-com.svg";
import calendarIcon from "../../img/svg/calendar.svg";
import rulerIcon from "../../img/svg/ruler.svg";
import weightIcon from "../../img/svg/weight.svg";

export default function RegisterPage() {
  return (
    <body className="bg-black text-white">
      <div className="min-h-screen flex">
        <div className="w-1/2 hidden lg:flex relative bg-black">
          <Image
            src={registerPhoto}
            className="absolute inset-0 w-full h-full object-cover"
            alt="LoginRegisterPhoto"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 p-16 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold leading-tight italic">
                MÁS QUE CORRER,
                <br />
                <span className="text-lime-400 italic">SOMOS UN EQUIPO.</span>
              </h1>
              <p className="mt-4 text-gray-300">
                Únete a Atletikos Running Team <br />y lleva tu pasion al
                siguiente nivel.
              </p>
            </div>

            <Link className="w-48" href="/">
              <h2 className="text-3xl font-bold tracking-widest italic text-center">
                ATLETIKOS
              </h2>
              <span className="text-lime-400 text-1xl tracking-widest italic block text-center">
                RUNNING TEAM
              </span>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center px-8">
          <div className="w-full max-w-md">
            <p className="text-lime-400 text-sm font-bold">CREA TU CUENTA</p>

            <h2 className="text-3xl font-bold mb-2">Registrate</h2>
            <p className="text-gray-400 mb-4">
              Completa tus datos para comenzar
            </p>

            <form>
              <div className="mb-2 flex">
                <div>
                  <label className="block text-sm" htmlFor="firstName">
                    Nombre
                  </label>
                  <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-lg px-2 py-2 mr-2.5">
                    <Image
                      src={personIcon}
                      alt="Person"
                      className="h-6 w-6 mr-2"
                    />

                    <input
                      type="text"
                      id="firstName"
                      placeholder="Juan"
                      className="bg-transparent w-full outline-none text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm" htmlFor="surname">
                    Apellido
                  </label>
                  <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-lg px-2 py-2">
                    <Image src={mailIcon} alt="mail" className="h-6 w-6 mr-2" />

                    <input
                      type="text"
                      id="surname"
                      placeholder="Perez"
                      className="bg-transparent w-full outline-none text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-2">
                <label className="block text-sm mb-2">Correo electrónico</label>
                <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-lg px-2 py-2">
                  <Image src={mailIcon} alt="mail" className="h-6 w-6 mr-2" />

                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="bg-transparent w-full outline-none text-white"
                  />
                </div>
              </div>

              <div className="mb-2">
                <label className="block text-sm mb-2">Contraseña</label>
                <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-lg px-2 py-2">
                  <Image
                    src={lockIcon}
                    alt="Password"
                    className="h-6 w-6 mr-2"
                  />
                  <input
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    className="bg-transparent w-full outline-none text-white"
                  />
                  <span className="text-gray-400 cursor-pointer">👁️</span>
                </div>
              </div>

              <div className="mb-2">
                <label className="block text-sm mb-2" htmlFor="date">
                  Fecha de nacimiento
                </label>
                <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-lg px-2 py-2">
                  <Image
                    src={calendarIcon}
                    alt="Calendar"
                    className="h-6 w-6 mr-2"
                  />
                  <input
                    id="date"
                    type="date"
                    placeholder="Seleccionar tu fecha"
                    className="bg-transparent w-full outline-none text-white"
                  />
                </div>
              </div>

              <div className="mb-4 flex">
                <div>
                  <label className="block text-sm" htmlFor="Height">
                    Altura (cm)
                  </label>
                  <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-lg px-2 py-2 mr-2.5">
                    <Image
                      src={rulerIcon}
                      alt="Ruler"
                      className="h-6 w-6 mr-2"
                    />

                    <input
                      type="text"
                      id="Height"
                      placeholder="1.70"
                      className="bg-transparent w-full outline-none text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm" htmlFor="weight">
                    Peso (kg)
                  </label>
                  <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-lg px-2 py-2">
                    <Image
                      src={weightIcon}
                      alt="Weight"
                      className="h-6 w-6 mr-2"
                    />

                    <input
                      type="text"
                      id="weight"
                      placeholder="60"
                      className="bg-transparent w-full outline-none text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm mb-4">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-lime-400" />
                  <span>
                    Acepto los
                    <span className="text-lime-400">
                      Términos y condiciones
                    </span>
                  </span>
                </label>
              </div>

              <input
                type="submit"
                value="CREAR CUENTA"
                className="w-full bg-lime-400 text-black font-bold py-3 rounded-lg hover:bg-lime-300 transition"
              />
            </form>

            <div className="flex items-center my-6">
              <div className="grow h-px bg-zinc-700"></div>
              <span className="mx-4 text-gray-400 text-sm">
                o registrate con
              </span>
              <div className="grow h-px bg-zinc-700"></div>
            </div>

            <div className="flex gap-4">
              <button className="w-1/2 border border-zinc-700 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-800">
                <Image
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5"
                  width={64}
                  height={64}
                />
                Google
              </button>

              <button className="w-1/2 border border-zinc-700 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-800">
                <svg
                  fill="#ffffff"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"></path>
                  </g>
                </svg>
                Apple
              </button>
            </div>

            <p className="text-center text-sm text-gray-400 mt-6">
              ¿Ya tienes una cuenta?
              <Link
                href="/login"
                className="text-lime-400 hover:underline ml-2">
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}
