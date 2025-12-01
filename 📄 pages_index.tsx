import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>Style Teller - Virtual Try-On</title>
      </Head>


      <main
        className="min-h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url(https://ibb.co/gMDjN4Mt)" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>


        <div className="relative flex items-center justify-center min-h-screen">
          <div className="bg-white/95 rounded-2xl shadow-2xl p-8 max-w-md w-full">
            <h1 className="text-3xl font-serif text-center mb-6">
              Style Teller
            </h1>


            <p className="text-center text-gray-600 mb-8">
              Ultra-realistic virtual try-on
            </p>


            <button className="w-full py-3 bg-gold text-white rounded-lg hover:bg-yellow-600 transition">
              Get Started
            </button>
          </div>
        </div>
      </main>
    </>
  );
}