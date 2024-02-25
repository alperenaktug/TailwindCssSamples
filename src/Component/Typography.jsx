function Typography() {
  return (
    <div>
      <h1 className="text-5xl font-style: italic ">
        They need rappers like me !!!
      </h1>
      <h1 className="text-3xl underline ">They need rappers like me !!!</h1>
      <h1 className="text-2xl hover:underline">
        They need rappers like me !!!
      </h1>
      <p className="text-xs font-sans  ">Katliam 3 Dashboard !!!</p>
      <p className="text-base font-serif ">Katliam 3 Dashboard !!!</p>
      <p className="text-sm font-mono underline decoration-red-700 ">
        Katliam 3 Dashboard !!!
      </p>
      <p className="text-md font-thin  decoration-double decoration-blue-600 underline">
        Katliam 3 Dashboard !!!
      </p>
      <p className="text-lg font-medium">Katliam 3 Dashboard !!!</p>
      <p className="text-xl font-bold line-through">Katliam 3 Dashboard !!!</p>
      <p className="text-3xl font-semibold overline">Katliam 3 Dashboard !!!</p>
      <p className="normal-case decoration-dashed underline">
        Katliam 3 Dashboard !!!
      </p>
      <p className="uppercase  decoration-wavy underline">
        Katliam 3 Dashboard !!!
      </p>
      <p className="lowercase">Katliam 3 Dashboard !!!</p>
      <p className="capitalize ">Katliam 3 Dashboard !!!</p>
      <p className="text-wrap">
        look if you had one shot one opportunity to size everything every one in
        one
      </p>
    </div>
  );
}

export default Typography;

/* font-sans diyerek dil ailelerini seçebiliyoruz , font-bold text i kalın yazdırıyor
       font-style : italic diyerek yazıyın italic yapıyoruz , underline diyerek altını çiziyoruz
      overline yazının üst tarafını çiziyor , line-througt direk yazının üstünü çiziyor  ,
      no-underline çizmiyor  normal-case normal şekilde uppercase bütün harfleri büyük 
      lowercase bütün harfleri küçük capitalize sadece baş harfleri büyük şeklinde tanımlama yapar
       text-wrap satır taşmadan bir alt satıra geçmesini non-wrap gittiği yere kadar gitsin 
       balance :Metni her satıra eşit olarak dağıtmak için text-balance kullanın.
       decoration-red-800 underline altını çizdiğimiz textin rengini değiştirir,
       decoration-double altını 2 defa çizer*/
