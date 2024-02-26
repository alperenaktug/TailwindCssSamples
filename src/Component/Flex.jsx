function Flex() {
  return (
    <>
      <div className="flex justify-center bg-sky-600">Header</div>
      <div className="flex flex-row justify-around ">
        <div className="bg-pink-600 basic-1/2 m-2 rounded-sm p-2">Anapug</div>
        <div className="bg-pink-600 basic-1/4 m-2 rounded-sm p-2 grow">
          About
        </div>
        <div className="bg-pink-600 basic-1/4 m-2 rounded-sm p-2">Contact</div>
      </div>
    </>
  );
}

export default Flex;
