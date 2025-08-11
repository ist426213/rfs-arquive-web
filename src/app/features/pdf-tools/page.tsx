import { FaFilePdf, FaExchangeAlt, FaCompress, FaLock, FaUnlock, FaSearch, FaFileWord, FaFileExcel, FaFileImage, FaFileArchive, FaFileSignature, FaWater, FaCut, FaObjectGroup, FaSortNumericDown, FaPen, FaQrcode } from 'react-icons/fa';
import { FiUpload, FiDownload, FiShare2, FiSettings, FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';

const PDFToolsPage = () => {
  const pdfTools = [
    {
      icon: <FaExchangeAlt className="text-[#c61828]" size={24} />,
      title: "Converter PDF",
      description: "Converta PDF para outros formatos ou vice-versa",
      gradient: "from-[#c61828]/10 to-[#002b7f]/10",
      tools: [
        { name: "PDF para Word", icon: <FaFileWord /> },
        { name: "PDF para Excel", icon: <FaFileExcel /> },
        { name: "PDF para Imagem", icon: <FaFileImage /> },
        { name: "Outros para PDF", icon: <FaFilePdf /> }
      ]
    },
    {
      icon: <FaCompress className="text-[#002b7f]" size={24} />,
      title: "Comprimir PDF",
      description: "Reduza o tamanho do arquivo sem perder qualidade",
      gradient: "from-[#002b7f]/10 to-[#508f61]/10",
      tools: [
        { name: "Compressão Básica", icon: <FiSettings /> },
        { name: "Compressão Avançada", icon: <FiSettings /> },
        { name: "Otimizar para Web", icon: <FiShare2 /> },
        { name: "Reduzir Imagens", icon: <FaFileImage /> }
      ]
    },
    {
      icon: <FaCut className="text-[#508f61]" size={24} />,
      title: "Organizar PDF",
      description: "Modifique a estrutura do seu documento",
      gradient: "from-[#508f61]/10 to-[#c61828]/10",
      tools: [
        { name: "Dividir PDF", icon: <FaCut /> },
        { name: "Unir PDFs", icon: <FaObjectGroup /> },
        { name: "Extrair Páginas", icon: <FiDownload /> },
        { name: "Reorganizar", icon: <FaSortNumericDown /> }
      ]
    },
    {
      icon: <FaLock className="text-[#c61828]" size={24} />,
      title: "Proteger PDF",
      description: "Gerencie a segurança do seu documento",
      gradient: "from-[#c61828]/10 to-[#002b7f]/10",
      tools: [
        { name: "Proteger com Senha", icon: <FaLock /> },
        { name: "Remover Proteção", icon: <FaUnlock /> },
        { name: "Assinar Digitalmente", icon: <FaFileSignature /> },
        { name: "Redação de Texto", icon: <FaPen /> }
      ]
    },
    {
      icon: <FaSearch className="text-[#002b7f]" size={24} />,
      title: "OCR PDF",
      description: "Extraia texto de documentos digitalizados",
      gradient: "from-[#002b7f]/10 to-[#508f61]/10",
      tools: [
        { name: "Reconhecimento de Texto", icon: <FaSearch /> },
        { name: "PDF Pesquisável", icon: <FaSearch /> },
        { name: "Reconhecer Múltiplos Idiomas", icon: <FaSearch /> },
        { name: "Corrigir Texto", icon: <FaPen /> }
      ]
    },
    {
      icon: <FaWater className="text-[#508f61]" size={24} />,
      title: "Melhorar PDF",
      description: "Ferramentas avançadas de edição",
      gradient: "from-[#508f61]/10 to-[#c61828]/10",
      tools: [
        { name: "Adicionar Marca d'Água", icon: <FaWater /> },
        { name: "Adicionar Números de Página", icon: <FaSortNumericDown /> },
        { name: "Rotacionar Páginas", icon: <FiSettings /> },
        { name: "Adicionar QR Code", icon: <FaQrcode /> }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f9f9] to-[#f0f4ff]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#002b7f] to-[#c61828] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pdf-pattern.svg')] bg-repeat opacity-20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <FaFilePdf size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ferramentas PDF Profissionais</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Todas as soluções para trabalhar com PDFs em um só lugar
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#002b7f] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all flex items-center gap-2 justify-center">
              <FiUpload size={18} />
              Carregar PDF
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all flex items-center gap-2 justify-center">
              <FiDownload size={18} />
              Aplicação Desktop
            </button>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <nav className="container mx-auto px-6 py-6">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="text-[#002b7f] hover:underline">
              Início
            </Link>
          </li>
          <li>
            <FiChevronRight size={14} className="text-gray-400" />
          </li>
          <li>
            <Link href="/features" className="text-[#002b7f] hover:underline">
              Funcionalidades
            </Link>
          </li>
          <li>
            <FiChevronRight size={14} className="text-gray-400" />
          </li>
          <li className="text-gray-600" aria-current="page">
            Ferramentas PDF
          </li>
        </ol>
      </nav>

      {/* Tools Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pdfTools.map((category, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100`}
            >
              <div className={`p-6 bg-gradient-to-r ${category.gradient}`}>
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">{category.title}</h2>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {category.tools.map((tool, toolIndex) => (
                    <li key={toolIndex}>
                      <Link href="/features/pdf-tools/editor" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                        <span className="text-[#002b7f] group-hover:text-[#c61828] transition-colors">
                          {tool.icon}
                        </span>
                        <span className="flex-1 font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                          {tool.name}
                        </span>
                        <FiChevronRight className="text-gray-400 group-hover:text-[#002b7f] transition-colors" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Link href="#" className="text-[#002b7f] text-sm font-medium hover:underline flex items-center gap-1">
                  Ver todas ferramentas
                  <FiChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Como Trabalhar com PDFs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Processamento rápido e seguro, sem necessidade de registo
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Carregar Documento",
                description: "Arraste ou selecione seu PDF para começar",
                icon: <FiUpload size={24} className="text-[#002b7f]" />
              },
              {
                step: "2",
                title: "Escolher Ferramenta",
                description: "Selecione entre nossas opções profissionais",
                icon: <FiSettings size={24} className="text-[#c61828]" />
              },
              {
                step: "3",
                title: "Transferir Resultado",
                description: "Receba seu documento processado em segundos",
                icon: <FiDownload size={24} className="text-[#508f61]" />
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-200">
                  <span className="text-2xl font-bold text-[#002b7f]">{item.step}</span>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-[#002b7f] to-[#c61828] rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#002b7f] to-[#c61828] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para Transformar Seus PDFs?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experimente gratuitamente ou adquira a versão profissional para recursos ilimitados
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#002b7f] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center">
              <FiUpload size={18} />
              Processar Online
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center gap-2 justify-center">
              <FiDownload size={18} />
              Transferir Aplicação
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFToolsPage;