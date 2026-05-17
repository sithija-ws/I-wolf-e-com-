import React from 'react'

const Header = () => {
  return (
    <div className='flex w-[100vw] h-[12vh] h-20 bg-white'>

        {/*i wolf logo */}
        <div className="flex items-center p-9 gap-2">
              <div className="w-10 h-10  bg-primary rounded-lg flex items-center justify-center bg-black">
                <span className="text-white font-bold text-lg">IW</span>
              </div>
              <span className="font-bold text-xl tracking-tight">I Wolf</span>
        </div>
    </div>
  )
}

export default Header
