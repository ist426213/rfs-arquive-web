import { FaSearch, FaFilePdf, FaFileImage, FaFileWord, FaFileAlt, FaLanguage, FaFileInvoice, FaMagic, FaRobot } from 'react-icons/fa';
import { FiUpload, FiDownload, FiChevronRight, FiSettings, FiShare2 } from 'react-icons/fi';
import Link from 'next/link';

const OCRToolsPage = () => {
  const ocrTools = [
    {
      icon: <FaFilePdf className="text-[#c61828]" size={24} />,
      title: "OCR para PDF",
      description: "Extraia texto de documentos PDF digitalizados",
      gradient: "from-[#c61828]/10 to-[#002b7f]/10",
      tools: [
        { name: "PDF para Texto Pesquisável", icon: <FaSearch /> },
        { name: "PDF para Word Editável", icon: <FaFileWord /> },
        { name: "Preservar Layout Original", icon: <FaFilePdf /> },
        { name: "OCR em Lote para PDFs", icon: <FiSettings /> }
      ]
    },
    {
      icon: <FaFileImage className="text-[#508f61]" size={24} />,
      title: "OCR para Imagens",
      description: "Reconheça texto em fotos e imagens digitalizadas",
      gradient: "from-[#508f61]/10 to-[#c61828]/10",
      tools: [
        { name: "JPG/PNG para Texto", icon: <FaFileAlt /> },
        { name: "Reconhecimento de Receitas", icon: <FaFileInvoice /> },
        { name: "Digitalizar Documentos", icon: <FaFileImage /> },
        { name: "Processar Múltiplas Imagens", icon: <FiSettings /> }
      ]
    },
    {
      icon: <FaLanguage className="text-[#002b7f]" size={24} />,
      title: "OCR Multilíngue",
      description: "Suporte para diversos idiomas",
      gradient: "from-[#002b7f]/10 to-[#508f61]/10",
      tools: [
        { name: "30+ Idiomas Suportados", icon: <FaLanguage /> },
        { name: "Detecção Automática", icon: <FaSearch /> },
        { name: "Documentos Bilingues", icon: <FaLanguage /> },
        { name: "Tradução Integrada", icon: <FaLanguage /> }
      ]
    },
    {
      icon: <FaFileInvoice className="text-[#c61828]" size={24} />,
      title: "OCR para Documentos",
      description: "Processamento especializado por tipo de documento",
      gradient: "from-[#c61828]/10 to-[#002b7f]/10",
      tools: [
        { name: "Faturas e Recibos", icon: <FaFileInvoice /> },
        { name: "Cartões de Visita", icon: <FaFileInvoice /> },
        { name: "Documentos de Identidade", icon: <FaFileInvoice /> },
        { name: "Extratos Bancários", icon: <FaFileInvoice /> }
      ]
    },
    {
      icon: <FaMagic className="text-[#508f61]" size={24} />,
      title: "Pós-Processamento",
      description: "Melhore os resultados do OCR",
      gradient: "from-[#508f61]/10 to-[#c61828]/10",
      tools: [
        { name: "Correção Automática", icon: <FaMagic /> },
        { name: "Formatação Inteligente", icon: <FaMagic /> },
        { name: "Verificação Ortográfica", icon: <FaMagic /> },
        { name: "Exportar para Formatos", icon: <FiShare2 /> }
      ]
    },
    {
      icon: <FaRobot className="text-[#002b7f]" size={24} />,
      title: "OCR Avançado",
      description: "Tecnologia de ponta para necessidades complexas",
      gradient: "from-[#002b7f]/10 to-[#508f61]/10",
      tools: [
        { name: "Reconhecimento de Manuscrito", icon: <FaRobot /> },
        { name: "OCR com IA", icon: <FaRobot /> },
        { name: "Tabelas e Formulários", icon: <FaRobot /> },
        { name: "API para Desenvolvedores", icon: <FaRobot /> }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f9f9] to-[#f5f9ff]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#002b7f] to-[#508f61] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/ocr-pattern.svg')] bg-repeat opacity-20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <FaSearch size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">OCR (Reconhecimento Ótico de Caracteres)</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Transforme documentos digitalizados e imagens em texto editável e pesquisável
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#002b7f] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all flex items-center gap-2 justify-center">
              <FiUpload size={18} />
              Processar Documento
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
            Ferramentas OCR
          </li>
        </ol>
      </nav>

      {/* Tools Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ocrTools.map((category, index) => (
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
                      <Link href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                        <span className="text-[#002b7f] group-hover:text-[#508f61] transition-colors">
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
                  Ver todas opções
                  <FiChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* OCR Process Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Como Funciona Nosso OCR</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Carregamento do Documento",
                    description: "Envie seu PDF, imagem ou documento digitalizado"
                  },
                  {
                    step: "2",
                    title: "Análise e Reconhecimento",
                    description: "Nossa IA identifica e interpreta o texto na imagem"
                  },
                  {
                    step: "3",
                    title: "Pós-Processamento",
                    description: "Correção automática e formatação inteligente"
                  },
                  {
                    step: "4",
                    title: "Exportação",
                    description: "Obtenha seu texto em diversos formatos editáveis"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-[#002b7f] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      {item.step}
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
              <div className="bg-gray-100 rounded-xl p-8 border-2 border-dashed border-gray-300">
                <div className="flex justify-center mb-6">
                  <FaSearch size={64} className="text-[#508f61]" />
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4">Demonstração de OCR</h3>
                <div className="flex justify-between items-center bg-white p-4 rounded-lg mb-4">
                  <div className="flex items-center gap-3">
                    <FaFileImage size={24} className="text-[#c61828]" />
                    <span>Documento Original</span>
                  </div>
                  <FiChevronRight className="text-gray-400" />
                  <div className="flex items-center gap-3">
                    <FaFileWord size={24} className="text-[#2b579a]" />
                    <span>Texto Editável</span>
                  </div>
                </div>
                <p className="text-center text-gray-600">
                  Arraste um arquivo aqui ou clique para processar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#002b7f] to-[#508f61] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para Digitalizar Seus Documentos?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Converta instantaneamente imagens em texto editável com precisão
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#002b7f] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center">
              <FiUpload size={18} />
              Experimente Agora
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

export default OCRToolsPage;