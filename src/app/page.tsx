import Image from "next/image";
import Link from "next/link";
import { FiUpload, FiDownload, FiEdit, FiSettings, FiLock, FiUsers, FiShield } from "react-icons/fi";
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
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#f9f9f9] to-[#002b7f]/5">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
       
        {/* <div className="absolute inset-0 bg-gradient-to-br from-[#508f61]/30 to-[#002b7f]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div> */}
      </div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="max-w-5xl mx-auto text-center">
      <div className="mb-8">
        <span className="inline-block bg-[#002b7f]/10 text-[#002b7f] px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
          UTILIZADO POR EMPRESAS PORTUGUESAS
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
          Processamento de Ficheiros Profissional <br className="hidden md:block" />
          <span className="text-[#002b7f]">Sem Complexidade</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Ferramentas avançadas para conversão, OCR, compressão e edição de documentos - 
          disponível em soluções cloud e desktop.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-3 mb-20">
        <button className="bg-[#002b7f] text-white px-6 py-3.5 rounded-lg font-medium hover:bg-blue-900 transition-all duration-300 flex items-center gap-2 justify-center shadow-md hover:shadow-lg backdrop-blur-sm">
          <FiUpload size={18} />
          Processar Online
        </button>
        <button className="bg-white text-[#002b7f] px-6 py-3.5 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 justify-center border border-gray-200 shadow-sm hover:shadow-md backdrop-blur-sm">
          <FiDownload size={18} />
          Aplicação Desktop
        </button>
      </div>
      
      <div className="relative w-full max-w-4xl mx-auto h-96 bg-white/80 rounded-xl shadow-xl overflow-hidden border border-gray-100 backdrop-blur-sm">
        {/* App interface mockup */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-[#f9f9f9]/90">
          {/* Mock toolbar */}
          <div className="h-12 bg-[#002b7f] flex items-center px-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#c61828]"></div>
              <div className="w-3 h-3 rounded-full bg-[#f5ea57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#508f61]"></div>
            </div>
            <div className="ml-4 text-white text-sm font-medium">Área de Trabalho RFSArquive</div>
          </div>
          
          {/* Mock content */}
          <div className="p-6 grid grid-cols-3 gap-4 h-full">
            {/* Left panel */}
            <div className="bg-gray-50/70 rounded-lg p-4 border border-gray-200">
              <div className="space-y-3">
                <div className="h-8 bg-white rounded-md border border-gray-200"></div>
                <div className="h-8 bg-white rounded-md border border-gray-200"></div>
                <div className="h-8 bg-[#002b7f]/10 rounded-md border border-[#002b7f]/20"></div>
                <div className="h-8 bg-white rounded-md border border-gray-200"></div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="col-span-2 bg-white/70 rounded-lg border border-gray-200 flex flex-col">
              <div className="border-b border-gray-200 p-3 flex gap-2">
                <div className="w-24 h-8 rounded bg-gray-100"></div>
                <div className="w-24 h-8 rounded bg-gray-100"></div>
                <div className="w-24 h-8 rounded bg-[#002b7f]/10"></div>
              </div>
              <div className="flex-1 flex items-center justify-center p-6">
                <div className="text-center">
                  <FiEdit size={40} className="mx-auto text-[#002b7f] mb-3" />
                  <h3 className="text-lg font-medium text-gray-800">Arraste ficheiros para começar</h3>
                  <p className="text-sm text-gray-600 mt-1">Suporta PDF, DOCX, JPG, PNG e mais 20 formatos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Floating decorative elements */}
 {/*  <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#508f61]/10 blur-xl"></div>
  <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#002b7f]/10 blur-xl"></div> */}
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