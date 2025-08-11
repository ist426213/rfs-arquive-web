"use client"
import Image from "next/image";
import Link from "next/link";
import { FiUpload, FiDownload, FiEdit, FiSettings, FiLock, FiUsers, FiShield, FiImage, FiAward, FiHardDrive, FiPlus, FiFile } from "react-icons/fi";
import { FaFilePdf, FaFileImage, FaFileWord, FaFileExcel, FaFileAlt } from "react-icons/fa";
import React from "react";


export default function FileProApp() {

  const features = [
    {
      id: 'pdf-tools',
      path: '/features/pdf-tools',
      icon: <FaFilePdf size={32} className="text-[#c61828]" />,
      title: "Ferramentas PDF",
      description: "Unir, dividir, comprimir e converter PDFs com opções avançadas",
      features: ["Reconhecimento OCR", "Proteção por senha", "Gestão de páginas"]
    },
    {
      id: 'image-processing',
      path: '/features/image-processing',
      icon: <FaFileImage size={32} className="text-[#508f61]" />,
      title: "Processamento de Imagens",
      description: "Ferramentas profissionais de edição e conversão",
      features: ["Processamento em lote", "Melhorias com IA", "Conversão de formatos"]
    },
    {
      id: 'doc-conversion',
      path: '/features/document-conversion',
      icon: <FaFileWord size={32} className="text-[#002b7f]" />,
      title: "Conversão de Documentos",
      description: "Converter entre todos os principais formatos",
      features: ["Preservar formatação", "Conversão em lote", "Sincronização na cloud"]
    },
    {
      id: 'excel-tools',
      path: '/features/excel-tools',
      icon: <FaFileExcel size={32} className="text-[#508f61]" />,
      title: "Ferramentas para Folhas de Cálculo",
      description: "Converter, unir e otimizar ficheiros",
      features: ["CSV para Excel", "Preservar fórmulas", "Extrair dados"]
    },
    {
      id: 'ocr-tools',
      path: '/features/ocr-tools',
      icon: <FiSettings size={32} className="text-[#002b7f]" />,
      title: "OCR Avançado",
      description: "Extrair texto de imagens e documentos digitalizados",
      features: ["Suporte multilíngue", "Reconhecimento de manuscrito", "Opções de exportação"]
    },
    {
      id: 'security-tools',
      path: '/features/security-tools',
      icon: <FiShield size={32} className="text-[#c61828]" />,
      title: "Ferramentas de Segurança",
      description: "Proteger e gerir documentos sensíveis",
      features: ["Ferramentas de redação", "Marca d'água", "Assinaturas digitais"]
    }
  ];


  return (

    <div className="min-h-screen bg-[#f9f9f9] text-gray-900">
      
      {/* Seção Hero */}
      {/* Hero Section with Balanced Three-Color Gradient */}
     <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-r from-[#002b7f] to-[#c61828]"> {/* to-[#508f61] */}
  {/* Animated gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent opacity-90"></div>
  
  {/* Floating particles */}
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(15)].map((_, i) => (
      <div 
        key={i}
        className="absolute rounded-full bg-white/10"
        style={{
          width: `${Math.random() * 6 + 2}px`,
          height: `${Math.random() * 6 + 2}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `float ${Math.random() * 10 + 10}s linear infinite`,
          animationDelay: `${Math.random() * 5}s`
        }}
      />
    ))}
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-5xl mx-auto text-center">
      <div className="mb-6 animate-fade-in">
        <span className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10 hover:bg-white/30 transition-colors duration-300">
          <span className="inline-flex items-center gap-1.5">
            <FiAward className="text-[#f5ea57]" />
            UTILIZADO POR EMPRESAS PORTUGUESAS
          </span>
        </span>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight text-white drop-shadow-lg animate-slide-up">
        <span className="block mb-2">Processamento de Ficheiros</span>
        <span className="relative inline-block">
          <span className="relative z-10 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#f5ea57]">
            Profissional e Simples
          </span>
          <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-[#f5ea57]/60 rounded-full"></span>
        </span>
      </h1>
      
      <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-10 drop-shadow-sm leading-relaxed animate-fade-in delay-100">
        Soluções completas para PDF, imagens e documentos na cloud ou desktop. <br className="hidden md:block" />
        Tecnologia portuguesa para simplificar o seu fluxo de trabalho.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in delay-200">
        <button className="bg-white hover:bg-gray-100 text-[#002b7f] px-8 py-4 rounded-lg font-semibold flex items-center gap-3 justify-center shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
          <FiUpload size={20} className="shrink-0" />
          <span>Processar Online</span>
          {/* <span className="absolute -right-2 -top-2 bg-[#c61828] text-white text-xs px-2 py-1 rounded-full shadow">GRÁTIS</span> */}
        </button>
        <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 justify-center border border-white/30 backdrop-blur-sm transition-all hover:border-white/50 hover:-translate-y-0.5 active:translate-y-0">
          <FiDownload size={20} className="shrink-0" />
          <span>Aplicação Desktop</span>
        </button>
      </div>
      
      {/* Interactive App Preview */}
      <div className="relative w-full max-w-4xl mx-auto h-80 bg-white/15 rounded-2xl shadow-2xl overflow-hidden border border-white/30 backdrop-blur-sm transition-all hover:shadow-3xl hover:border-white/50 animate-fade-in delay-300">
        <div className="h-12 bg-[#002b7f] flex items-center px-4 border-b border-white/20">
          <div className="flex items-center gap-2 mr-3">
            <div className="w-3 h-3 rounded-full bg-[#c61828] hover:bg-[#ff3d3d] transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-[#f5ea57] hover:bg-[#fff27d] transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-[#508f61] hover:bg-[#6daf7e] transition-colors"></div>
          </div>
          <div className="text-white text-sm font-medium flex items-center gap-2">
            <FiHardDrive className="text-[#f5ea57]" />
            <span>RFSArquive</span>
            <span className="text-white/60 ml-2">v3.2.1</span>
          </div>
        </div>
        
        <div className="p-5 grid grid-cols-4 gap-5 h-[calc(100%-3rem)]">
          <div className="col-span-1 bg-white/10 rounded-xl border border-white/20 p-4 transition-all hover:bg-white/15">
            <div className="space-y-3">
              <div className="h-8 bg-white/20 rounded-lg border border-white/20 hover:bg-white/30 transition-colors"></div>
              <div className="h-8 bg-white/20 rounded-lg border border-white/20 hover:bg-white/30 transition-colors"></div>
              <div className="h-8 bg-[#508f61]/40 rounded-lg border border-[#508f61]/50 hover:bg-[#508f61]/50 transition-colors flex items-center px-3 text-white text-sm font-medium">
                <FiFile className="mr-2" /> Processar
              </div>
            </div>
          </div>
          
          <div className="col-span-3 bg-white/10 rounded-xl border border-white/20 flex flex-col transition-all hover:bg-white/15">
            <div className="border-b border-white/20 p-3 flex gap-3">
              <div className="w-24 h-9 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"></div>
              <div className="w-24 h-9 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"></div>
              <div className="w-24 h-9 rounded-lg bg-[#002b7f]/40 hover:bg-[#002b7f]/50 transition-colors flex items-center justify-center text-white text-sm font-medium">
                <FiPlus className="mr-1.5" /> Novo
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center p-6 group">
              <div className="text-center transform group-hover:scale-105 transition-transform">
                <div className="relative inline-block mb-4">
                  <FiImage size={40} className="mx-auto text-white/90 drop-shadow-sm" />
                  <FiUpload size={20} className="absolute -bottom-1 -right-1 bg-[#c61828] text-white p-1 rounded-full border-2 border-white/90" />
                </div>
                <p className="text-md text-white/90 drop-shadow-sm font-medium">Arraste ficheiros ou clique para carregar</p>
                <p className="text-sm text-white/70 mt-1">Suporta PDF, JPG, PNG, DOCX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Dynamic gradient accents */}
  <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#002b7f]/20 blur-[90px] opacity-80 animate-pulse-slow"></div>
  <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#c61828]/20 blur-[90px] opacity-80 animate-pulse-slow delay-1000"></div>
  <div className="absolute top-1/2 left-1/4 w-60 h-60 rounded-full bg-[#508f61]/15 blur-[70px] opacity-60"></div>

  <style jsx>{`
    @keyframes float {
      0% { transform: translateY(0) translateX(0); }
      50% { transform: translateY(-20px) translateX(10px); }
      100% { transform: translateY(0) translateX(0); }
    }
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.8; }
      50% { opacity: 0.5; }
    }
    .animate-pulse-slow {
      animation: pulse-slow 8s ease-in-out infinite;
    }
    .animate-fade-in {
      animation: fadeIn 0.8s ease-out forwards;
    }
    .animate-slide-up {
      animation: slideUp 0.8s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
  `}</style>
</section>

      
      {/* Funcionalidades */}
      <section id="features" className="py-20 bg-[#f9f9f9] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#002b7f]/10 blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-[#508f61]/10 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 relative inline-block">
              <span className="relative z-10">Funcionalidades Avançadas</span>
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#c61828]/30 -z-0"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tudo o que precisa para trabalhar com documentos, imagens e mais num só local
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link href={feature.path} key={feature.id} className="group">
                <div className="bg-white p-8 rounded-xl border border-gray-100 
                    transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    group-hover:scale-[1.03] 
                    group-hover:shadow-[0_20px_40px_-10px_rgba(0,43,127,0.15)]
                    relative overflow-hidden
                    before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:to-[#002b7f]/5 before:opacity-0 before:transition-opacity before:duration-300
                    group-hover:before:opacity-100">
                  
                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent 
                      group-hover:border-[#002b7f]/10 transition-all duration-500 pointer-events-none"></div>
                  
                  {/* Icon with gradient background */}
                  <div className="mb-6 relative">
                    <div className="absolute -left-2 -top-2 w-14 h-14 rounded-xl bg-gradient-to-br from-[#002b7f]/10 to-[#508f61]/10 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      {React.cloneElement(feature.icon, {
                        className: `${feature.icon.props.className} transition-transform duration-300 group-hover:scale-110`
                      })}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 relative">
                    <span className="relative z-10">{feature.title}</span>
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#c61828] transition-all duration-300 group-hover:w-full"></span>
                  </h3>
                  
                  <p className="text-gray-600 mb-5 transition-colors duration-300 group-hover:text-gray-800">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#508f61] mr-2 mt-0.5">✓</span>
                        <span className="text-gray-700 transition-colors duration-300 group-hover:text-gray-900">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Animated "view more" indicator */}
                  <div className="absolute bottom-6 right-6 text-[#002b7f] opacity-0 
                      group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 
                      transition-all duration-300 flex items-center">
                    <span className="text-sm font-medium mr-1">Ver mais</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="inline">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fluxo de Trabalho */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Otimize o Seu Fluxo de Trabalho</h2>
              <p className="text-xl text-gray-600 mb-8">
                Automatize tarefas repetitivas e integre com as suas ferramentas para poupar horas de trabalho.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Processamento em Lote",
                    description: "Processe centenas de ficheiros de uma vez com configurações consistentes"
                  },
                  {
                    title: "Acesso API",
                    description: "Integre o RFSArquive nas suas aplicações com a nossa API"
                  },
                  {
                    title: "Armazenamento na Cloud",
                    description: "Ligação direta a Dropbox, Google Drive e OneDrive"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-[#002b7f] text-white p-2 rounded-lg mr-4">
                      <FiSettings size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-gray-100 rounded-xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <FiUsers size={48} className="mx-auto text-[#508f61] mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Automação de Fluxos</h3>
                  <p className="text-gray-600">Construtor visual de fluxos em breve</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      


      {/* Planos */}
      <section id="pricing" className="py-20 bg-[#fdfadd]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Planos Flexíveis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o plano que melhor se adapta às suas necessidades
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Básico",
                price: "Grátis",
                description: "Para utilizadores individuais",
                features: ["5 ficheiros/dia", "Ferramentas básicas", "Acesso web apenas", "Suporte comunitário"],
                cta: "Começar",
                color: "bg-[#508f61]"
              },
              {
                name: "Profissional",
                price: "€4.99",
                period: "/mês",
                description: "Para utilizadores avançados e profissionais",
                features: ["Ficheiros ilimitados", "Todas as ferramentas", "Aplicação desktop", "Suporte prioritário", "Acesso API"],
                cta: "Escolher Profissional",
                color: "bg-[#002b7f]",
                popular: true
              },
              {
                name: "Empresa",
                price: "Personalizado",
                description: "Para equipas e organizações",
                features: ["Tudo do Profissional", "Gestão de equipas", "Suporte dedicado", "Opções on-premise", "SLAs garantidos"],
                cta: "Contactar Vendas",
                color: "bg-[#c61828]"
              }
            ].map((plan, index) => (
              <div key={index} className={`rounded-xl overflow-hidden shadow-lg ${plan.popular ? "transform md:-translate-y-4" : ""}`}>
                {plan.popular && (
                  <div className="bg-[#f5ea57] text-center py-2 text-sm font-semibold">
                    Mais Popular
                  </div>
                )}
                <div className="bg-white p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 ml-1">{plan.period}</span>}
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#508f61] mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full ${plan.color} text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity`}>
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Empresas */}
      <section className="py-20 bg-[#002b7f] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Precisa de Soluções Empresariais?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            A nossa equipa pode desenvolver fluxos e integrações personalizados para a sua organização.
          </p>
          <button className="bg-white text-[#002b7f] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Contactar Equipa Comercial
          </button>
        </div>
      </section>

      {/* Seção de Clientes */}

     {/*  <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 mb-8">Confiança de empresas como</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {["EDP", "NOS", "Galp", "CTT", "Sonae"].map((company) => (
              <div key={company} className="h-12 w-32 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-medium">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      
    </div>
  );
}