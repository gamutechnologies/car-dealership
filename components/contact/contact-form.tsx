import Image from "next/image";

export default function ContactFormSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="min-w-7xl flex flex-row">
        <div className="w-1/2 p-12 rounded-lg">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-300"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="bg-zinc-800 text-white placeholder:text-zinc-500 border border-zinc-600 rounded-full pl-3 py-1 mt-2 w-3/4"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-300"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="bg-zinc-800 text-white placeholder:text-zinc-500 border border-zinc-600 rounded-full pl-3 py-1 mt-2 w-3/4"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-300"
              >
                Contact No:
              </label>
              <input
                type="number"
                id="contactNo"
                className="bg-zinc-800 text-white placeholder:text-zinc-500 border border-zinc-600 rounded-full pl-3 py-1 mt-2 w-3/4"
                placeholder="077 123 4567"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={8}
                className="bg-zinc-800 text-white placeholder:text-zinc-500 border border-zinc-600 rounded-lg pl-3 py-1 mt-2 w-3/4"
                placeholder="Your message"
              ></textarea>
            </div>
            <input type="submit" value="Submit" className="bg-black text-yellow-500 hover:bg-yellow-500 hover:text-black transform-transition px-6 py-3 font-bold text-xl rounded-xl border border-yellow-500"  />
          </form>
        </div>
        <div className="w-1/2">
            <Image
             src="/images/contact-us.png"
             alt="Contact Us"
             width={750}
             height={500}
             className="m-10" />
        </div>
      </div>
    </section>
  );
}
