
const Header = () => (
  <header
    // style={{ backdropFilter: 'blur(10px)' }}
    className='fixed top-0 left-0 right-0 z-11 p-[24px] pr-[42px] pl-[120px] flex justify-between'>
    <div
      style={{
        fontFamily: 'Zen Dots'
      }}
      className="flex flex-col items-center w-[170px]"
    >
      <span className="text-[#99400b] text-3xl">Ashcroft</span>
      <span className="text-xl">Lensworks</span>
    </div>

    <button
      className='bg-[#ad6332] text-white py-2 px-4 h-[46px]'
      style={{
        fontFamily: 'Zen Dots'
      }}
    >
      BUY NOW
    </button>
  </header>
)

export default Header