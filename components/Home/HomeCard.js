function HomeCard(props) {
  return (
    <>
      <div className='bg-white shadow-md rounded-2xl px-6 py-3 hover:shadow-lg'>
        <div className='mb-2 flex justify-between items-center'>
          <div>
            <h1 className='text-lg font-bold'>{props.title}</h1>
            <hr className='w-full m-auto border-black border-[1px] rounded-sm' />
          </div>
          <div className='py-2 px-2 flex items-center bg-cyan-500 text-white rounded-full'>
            {props.icon}
          </div>
        </div>
        <p className='text-sm text-gray-500'>{props.content}</p>
      </div>
    </>
  );
}
export default HomeCard;
