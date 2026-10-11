import React from 'react'
import Navbar from "antd";

const MainLayout = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 container mx-auto px-4 py-8 md:px-6">
        {/* Child components/pages get injected here dynamically */}
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}

export default MainLayout
