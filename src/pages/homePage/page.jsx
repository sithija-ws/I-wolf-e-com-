import React from 'react'

const HomePage = () => {
  return (
    <div>
      <section className='relative flex-1  overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black'>
        
        <div
        className="absolute inset-0 opacity-40"
            style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1643665338709-97718d23787d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b2xmJTIwYWJzdHJhY3QlMjBhcnR8ZW58MXx8fHwxNzc4ODU5Mjk3fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',
            }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        </section>
    </div>
  )
}

export default HomePage
