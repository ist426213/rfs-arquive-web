import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiDownload, FiLock } from 'react-icons/fi'

function Header() {
  return (
    <>
        {/* Cabeçalho */}
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
                <Image src="/logo.png" alt="RFSArquive Logo" width={48} height={48} />
                <span className="text-2xl font-bold text-[#002b7f]">RFSArquive</span>
            </Link>
            
            <nav className="hidden lg:flex gap-8 items-center">
                <Link href="#features" className="font-medium hover:text-[#002b7f] transition-colors">Funcionalidades</Link>
                <Link href="#solutions" className="font-medium hover:text-[#002b7f] transition-colors">Soluções</Link>
                <Link href="#pricing" className="font-medium hover:text-[#002b7f] transition-colors">Preços</Link>
                <Link href="#resources" className="font-medium hover:text-[#002b7f] transition-colors">Recursos</Link>
                <Link href="#enterprise" className="font-medium hover:text-[#002b7f] transition-colors">Empresas</Link>
            </nav>
            
            <div className="flex items-center gap-4">
                <button className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-[#002b7f] font-medium hover:bg-blue-50 rounded-lg transition-colors">
                <FiLock size={16} />
                Entrar
                </button>
                <button className="bg-[#c61828] text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center gap-2">
                Começar
                <FiDownload size={16} />
                </button>
            </div>
            </div>
        </header>
        
    </>
  )
}

export default Header
