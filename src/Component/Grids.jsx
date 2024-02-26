function Grids() {
  return (
    <>
      <div>
        <h2 className="font-bold justify-center">Rappers</h2>
      </div>
      <div className=" grid grid-cols-4 gap-4 lg:grid-cols-4 md:grid-cols-2 ">
        <div className="bg-red-600 rounded">69</div>
        <div className="bg-purple-600 rounded">68</div>
        <div className="bg-yellow-400 rounded">67</div>
        <div className="bg-orange-600 rounded">66</div>
        <div className="bg-stone-600 rounded">65</div>
        <div className="bg-pink-600 rounded">64</div>
        <div className="bg-sky-600 rounded col-span-1">63</div>
        <div className="bg-blue-600 rounded">62</div>
        <div className="bg-lime-400 rounded">61</div>
        <div className=" bg-purple-600 rounded">60</div>
        <div className="bg-red-600 rounded">59</div>
      </div>
    </>
  );
}

export default Grids;
