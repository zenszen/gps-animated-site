import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function GPSScrollAnimation() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const y = useTransform(scrollYProgress, [0, 1], [0, 2000]);
  const vehicleType = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["car", "van", "truck", "truck", "truck"]);

  const vehicleIcons = {
    car: "/car.png",
    van: "/van.png",
    truck: "/truck.png",
  };

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-gradient-to-b from-blue-500 to-blue-800">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <motion.div style={{ y }} className="absolute w-32 h-32 z-10">
          <motion.img
            src={vehicleIcons[vehicleType.get()]}
            alt="vehicle"
            className="w-full h-full object-contain"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 6 }}
          />
        </motion.div>

        <motion.div className="absolute w-1 bg-white top-0 left-1/2" style={{ height: y }} />

        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 text-center text-white">
          <h2 className="text-3xl font-bold">1. Pełna kontrola nad flotą</h2>
        </div>
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 text-center text-white">
          <h2 className="text-3xl font-bold">2. Oszczędność czasu i pieniędzy</h2>
        </div>
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 text-center text-white">
          <h2 className="text-3xl font-bold">3. Automatyczne raporty i alerty</h2>
        </div>
        <div className="absolute top-[85%] left-1/2 -translate-x-1/2 text-center text-white">
          <h2 className="text-3xl font-bold">4. Całodobowe wsparcie techniczne</h2>
        </div>
        <div className="absolute top-[115%] left-1/2 -translate-x-1/2 w-full max-w-md p-6 bg-white rounded-xl shadow-xl">
          <h2 className="text-xl font-bold text-center text-blue-800 mb-4">Skontaktuj się z nami</h2>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Imię i nazwisko" className="p-2 rounded border border-gray-300" />
            <input type="email" placeholder="Adres e-mail" className="p-2 rounded border border-gray-300" />
            <textarea placeholder="Wiadomość" rows={4} className="p-2 rounded border border-gray-300" />
            <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Wyślij
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}