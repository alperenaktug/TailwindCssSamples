function Colors() {
  return (
    <>
      <div>
        <h1 className="text-slate-400">I am always in the top !!!</h1>
        <h1 className="text-red-600">I am always in the top !!!</h1>
        <h1 className="text-orange-400">I am always in the top !!!</h1>
        <h1 className="text-gray-200">I am always in the top !!!</h1>
        <h1 className="text-green-300">I am always in the top !!!</h1>
        <h1 className="text-purple-600">I am always in the top !!!</h1>
        <h1 className="text-stone-900">I am always in the top !!!</h1>
        <h1 className="text-amber-500">I am always in the top !!!</h1>
        <h1 className="text-pink-700">I am always in the top !!!</h1>
        <h1 className="text-sky-500">I am always in the top !!!</h1>
        <h1 className="text-blue-600">I am always in the top !!!</h1>
        <h1 className="text-neutral-500">I am always in the top !!!</h1>
        {/* {text-green : renk seçiminde  } */}
      </div>

      <div>
        <h1 className=" text-slate-50  bg-green-700">
          I am always in the top !!!
        </h1>
        <h1 className="text-slate-50  bg-pink-700">
          I am always in the top !!!
        </h1>
        <h1 className=" text-slate-50 bg-blue-700">
          I am always in the top !!!
        </h1>
        <h1 className=" text-slate-50 bg-red-700">
          I am always in the top !!!
        </h1>
        {/* {bg-pink arka plan renk seçiminde kullanılır} } */}
      </div>

      <h1 className="border-0 border-green-600 ">I am always in the top !!!</h1>
      <h1 className="border-2 border-blue-600 ">I am always in the top !!!</h1>
      <h1 className="border-4 border-red-600 ">I am always in the top !!!</h1>
      <h1 className="border-6 border-purple-600 ">
        I am always in the top !!!
      </h1>
      <h1 className="border-8 border-pink-600">I am always in the top !!!</h1>
      <h1 className="border-x-8 border-purple-600">
        I am always in the top !!!
      </h1>
      <h1 className="border-y-8 border-vuejs-100">
        I am always in the top !!!
      </h1>
      {/* {border-2 çerçevenin kalınlığını belirtir border-green-400 ise rengini belirtir
             border-x-8 bu sadece sağa ve sola çerçeve ekler 
             border-y-8 bu ise sadece yukarı ve aşağıya çerçeve ekler 
             talwind config dosyasında extend in içine kendimie ait özel oluşturarak bunları kullanabiliriz.} } */}

      <div></div>
    </>
  );
}

export default Colors;
