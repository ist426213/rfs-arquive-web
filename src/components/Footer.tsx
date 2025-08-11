import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <>
      {/* Rodapé */}
        <footer className="bg-gray-900 text-gray-400 py-16">
            <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                    <Image src="/logo_white.png" alt="RFSArquive Logo" width={48} height={48} />
                    <span className="text-2xl font-bold text-white">RFSArquive</span>
                </div>
                <p className="mb-6">
                    Ferramentas avançadas de processamento de ficheiros para particulares, equipas e empresas.
                </p>
                <div className="flex gap-4">
                    {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                    <a key={social} href="#" className="hover:text-white transition-colors">
                        {social}
                    </a>
                    ))}
                </div>
                </div>
                
                <div>
                <h3 className="text-white font-semibold mb-4">Produto</h3>
                <ul className="space-y-2">
                    {["Funcionalidades", "Soluções", "Preços", "Transferências", "Integrações"].map((item) => (
                    <li key={item}>
                        <a href="#" className="hover:text-white transition-colors">{item}</a>
                    </li>
                    ))}
                </ul>
                </div>
                
                <div>
                <h3 className="text-white font-semibold mb-4">Recursos</h3>
                <ul className="space-y-2">
                    {["Documentação", "Referência API", "Tutoriais", "Blog", "Comunidade"].map((item) => (
                    <li key={item}>
                        <a href="#" className="hover:text-white transition-colors">{item}</a>
                    </li>
                    ))}
                </ul>
                </div>
                
                <div>
                <h3 className="text-white font-semibold mb-4">Empresa</h3>
                <ul className="space-y-2">
                    {["Sobre", "Carreiras", "Contactos", "Legal", "Privacidade"].map((item) => (
                    <li key={item}>
                        <a href="#" className="hover:text-white transition-colors">{item}</a>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p>&copy; {new Date().getFullYear()} RFSArquive. Todos os direitos reservados.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Termos</a>
                <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
                </div>
            </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
