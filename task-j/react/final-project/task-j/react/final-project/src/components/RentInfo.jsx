export default function RentInfo() {
  return (
    <section className="relative isolate min-h-[70vh] flex items-center justify-center px-4">
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-black/15"></div>
            <img src="/images/cello2test.jpeg" className="h-[70vh] w-4/5 object-contain items-center" alt="Cello"/>
        </div>

      <div className="bg-black/30 backdrop-blur-md p-8 rounded-2xl max-w-4xl mx-auto">
            <p className="text-center font-serif text-orange-100 font-medium text-2xl">
            Getting started is simple and affordable: just choose the instrument that inspires you from our wide selection, fill out a quick rental form, and take it home to enjoy making music right away. Whether you're a beginner, a student, or a performer, we make it easy to access high-quality instruments without the upfront cost so you can focus on playing, practicing, and performing.
            </p>
        </div>
    </section>
  );
}
