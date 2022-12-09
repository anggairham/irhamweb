function Tags(props) {
  const { tags = [] } = props;
  return (
    <>
      <div className='flex flex-wrap gap-1'>
        {tags.map((data, index) => (
          <p
            key={index}
            className='text-sm font-semibold from-blue-600 to-sky-600 bg-gradient-to-r bg-clip-text text-transparent'
          >
            #{data}
          </p>
        ))}
      </div>
    </>
  );
}

export default Tags;
