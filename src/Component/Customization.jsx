function Customization() {
  return (
    <div>
      <h1 className="text-sm bg-green-500">I am always in the top!!!</h1>
      <h1 className="text-md bg-blue-500">I am always in the top!!!</h1>
      <h1 className="text-lg bg-red-500">I am always in the top!!!</h1>
      <h1 className="text-xl bg-orange-500 mb-1">I am always in the top!!!</h1>

      <p className="text-sm sm:text-base md:text-lg lg:text-3xl">
        you are mad I am back big mad !!!
      </p>

      {/* sm : 480px , md : 768px , lg : 976px , xl: 1440px  boyutunu belirtiyor 
          mb-1 alt satıra istenilen aralıkta boşluk bırakıyor
          */}
    </div>
  );
}

export default Customization;
