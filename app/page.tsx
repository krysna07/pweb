import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-[#343d42] flex flex-row items-center justify-center gap-12 z-50 h-14 shadow-md">
        <a
          href="#page1"
          className="text-gray-300 tracking-widest text-xs uppercase font-semibold hover:text-white transition-colors duration-200"
        >
          Profil
        </a>
        <a
          href="#page2"
          className="text-gray-300 tracking-widest text-xs uppercase font-semibold hover:text-white transition-colors duration-200"
        >
          Pendidikan
        </a>
        <a
          href="#page3"
          className="text-gray-300 tracking-widest text-xs uppercase font-semibold hover:text-white transition-colors duration-200"
        >
          Kontak
        </a>
      </nav>

      <main className="mt-14 bg-[#ffffff]">
        {/* Page 1 - Profil */}
        <section
          id="page1"
          className="min-h-screen flex items-center justify-center bg-[#ffffff] px-12 py-20"
        >
          <div className="flex flex-col items-center text-center gap-6 max-w-xl">
            {/* Profile Image */}
            <div className="relative w-40 h-56 rounded-2xl overflow-hidden border-4 border-blue-500 shadow-lg bg-gray-700">
              <Image
                src="/Foto%20Profil.jpeg"
                alt="my photo"
                fill
                className="object-cover"
              />
            </div>

            <h1 className="text-4xl font-bold text-white leading-tight">
              Halo, Saya <br />
              <span className="text-blue-400">I Gusti Krysna Devananda</span>
            </h1>

            <p className="text-lg font-medium text-blue-400">
              Mahasiswa Teknik Informatika - Universitas Primakara
            </p>

            <p className="text-gray-400 leading-relaxed">
              Saya adalah mahasiswa tingkat menengah yang antusias dengan
              pengembangan web dan UI/UX. Memiliki semangat belajar tinggi dan
              terbiasa bekerja dalam tim.
            </p>
          </div>
        </section>

        {/* Page 2 - Pendidikan & Keahlian */}
        <section
          id="page2"
          className="min-h-screen flex items-center justify-center bg-[#dce6e6] px-12 py-20"
        >
          <div className="w-full max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-10">
              Pendidikan & <span className="text-blue-500">Keahlian</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card Pendidikan */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-4">Kuliah</h3>
                <ul className="text-gray-600 text-sm mb-6 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-800 mt-0.5">•</span>
                    <div>
                      <strong className="text-gray-800">Universitas Primakara</strong>
                      <br />
                      Informatika
                    </div>
                  </li>
                </ul>
                <h3 className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-4">Tamatan</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-800 mt-0.5">•</span>
                    <div>
                      <strong className="text-gray-800">SMAN 4 Denpasar</strong>
                      <br />
                      MIPA (2022–2024)
                    </div>
                  </li>
                </ul>
              </div>

              {/* Card Skill */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-4">Skill Teknis</h3>

                <p className="text-sm text-gray-700 mb-1">HTML, CSS, JavaScript</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-5">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }} />
                </div>

                <p className="text-sm text-gray-700 mb-1">Python</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "75%" }} />
                </div>
              </div>

              {/* Card Hobi */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-4">Hobi</h3>
                <div className="flex flex-col gap-3">
                  {["Basket", "Bulu tangkis", "Tidur"].map((hobi) => (
                    <p key={hobi} className="text-gray-700 text-sm">{hobi}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Page 3 - Kontak */}
        <section
          id="page3"
          className="min-h-screen flex items-center justify-center bg-[#2b3135] px-12 py-20"
        >
          <div className="w-full max-w-lg text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Mari <span className="text-blue-400">Terhubung</span>
            </h2>

            <div className="bg-[#343d42] rounded-2xl shadow-lg p-8 flex flex-col gap-4 border border-white/10">
              <p className="text-gray-300 text-sm">
                Email: krysnadeva123@gmail.com
              </p>
              <p className="text-gray-300 text-sm">
                Telepon: +62 685 041 084
              </p>
              <p className="text-gray-300 text-sm">
                Alamat: Jl. Gunung Karang Gg Kubu Padi No.14
              </p>

              <hr className="border-white/10 my-2" />

              <div className="flex justify-center gap-4">
                {["LinkedIn", "GitHub", "Instagram"].map((sosial) => (
                  <a
                    key={sosial}
                    href="#"
                    className="border border-white/30 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-white/10 transition-colors duration-200"
                  >
                    {sosial}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}