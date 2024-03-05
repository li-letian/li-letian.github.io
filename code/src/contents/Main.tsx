import React from 'react';


export default function Main({ children }: { children?: React.ReactNode }) {
  return (
    <main className="container mx-auto flex flex-1 flex-col justify-center px-10 py-10" id="main">
      {children}
    </main>
  )
}
