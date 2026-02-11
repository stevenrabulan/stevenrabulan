import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-dark">
      <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-24">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-72 h-[360px] md:w-[400px] relative overflow-hidden">
              <Image src="/images/2019-08-08-OpenSmile-Transparent-1200.webp" alt="Steven Rabulan" fill className="object-cover object-top" priority />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Hey, I&#39;m Steven</h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-lg">I help you get more customers on the internet</p>
            <a href="mailto:steven.rabulan@gmail.com" className="inline-block bg-primary hover:bg-primary-hover text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide font-heading">
              Shoot Me a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
