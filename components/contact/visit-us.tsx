import { MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";

export default function VisitUsSection() {
  return (
    <section className="flex items-center justify-center bg-black overflow-hidden">
      <div className="min-w-7xl text-center flex flex-row gap-6">
        <div className="w-1/2 h-96 relative">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
          ></iframe>
        </div>
        <div className="relative w-1/2 text-left m-8">
          <h2 className="text-3xl font-bold text-white mb-6">Visit LuxAuto</h2>
          <p className="text-lg w-2xl text-zinc-400 mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus, itaque. Maiores enim ab nam suscipit nemo, eius neque
            modi eum ad illum saepe inventore, illo harum voluptate vel quas
            voluptates!
          </p>
          <ul className="text-lg text-zinc-300">
            <li className="flex items-center gap-4">
              <MapPinIcon size={20} />
              1st Street, Dehiwala, SL 10350
            </li>
            <li className="flex items-center gap-4">
              <PhoneIcon size={20} />
              Phone: (+94) 123-4567
            </li>
            <li className="flex items-center gap-4">
              <MailIcon size={20} />
              Email: luxauto@email.com
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
