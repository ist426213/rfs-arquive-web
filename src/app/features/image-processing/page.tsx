import { FaFileImage, FaCropAlt, FaAdjust, FaFilter, FaCompress, FaExpand, FaPalette, FaEyeDropper, FaObjectGroup, FaMagic, FaRegSmile, FaQrcode, FaTextHeight, FaSearch, FaWater } from 'react-icons/fa';
import { FiUpload, FiDownload, FiShare2, FiSettings, FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';

const ImageProcessingPage = () => {
  const imageTools = [
    {
      icon: <FaCropAlt className="text-[#508f61]" size={24} />,
      title: "Edição Básica",
      description: "Ferramentas essenciais para ajustar suas imagens",
      gradient: "from-[#508f61]/10 to-[#002b7f]/10",
      tools: [
        { name: "Cortar Imagem", icon: <FaCropAlt /> },
        { name: "Redimensionar", icon: <FaExpand /> },
        { name: "Rotacionar", icon: <FiSettings /> },
        { name: "Espelhar", icon: <FaObjectGroup /> }
      ]
    },
    {
      icon: <FaAdjust className="text-[#c61828]" size={24} />,
      title: "Ajustes de Cor",
      description: "Melhore cores e iluminação das suas fotos",
      gradient: "from-[#c61828]/10 to-[#508f61]/10",
      tools: [
        { name: "Brilho/Contraste", icon: <FaAdjust /> },
        { name: "Saturação", icon: <FaPalette /> },
        { name: "Balanço de Cores", icon: <FaEyeDropper /> },
        { name: "Filtro Preto e Branco", icon: <FaFilter /> }
      ]
    },
    {
      icon: <FaMagic className="text-[#002b7f]" size={24} />,
      title: "Efeitos & Filtros",
      description: "Aplique efeitos artísticos às suas imagens",
      gradient: "from-[#002b7f]/10 to-[#c61828]/10",
      tools: [
        { name: "Filtros Artísticos", icon: <FaMagic /> },
        { name: "Desfoque", icon: <FaFilter /> },
        { name: "Nitidez", icon: <FaSearch /> },
        { name: "Efeitos de Luz", icon: <FaAdjust /> }
      ]
    },
    {
      icon: <FaCompress className="text-[#508f61]" size={24} />,
      title: "Otimização",
      description: "Prepare imagens para web e dispositivos",
      gradient: "from-[#508f61]/10 to-[#002b7f]/10",
      tools: [
        { name: "Comprimir Imagem", icon: <FaCompress /> },
        { name: "Reduzir Tamanho", icon: <FaExpand /> },
        { name: "Converter Formato", icon: <FaFileImage /> },
        { name: "Otimizar para Web", icon: <FiShare2 /> }
      ]
    },
    {
      icon: <FaRegSmile className="text-[#c61828]" size={24} />,
      title: "Retoques",
      description: "Melhorias avançadas para fotos",
      gradient: "from-[#c61828]/10 to-[#508f61]/10",
      tools: [
        { name: "Remover Defeitos", icon: <FaMagic /> },
        { name: "Suavizar Pele", icon: <FaRegSmile /> },
        { name: "Redução de Ruído", icon: <FaFilter /> },
        { name: "Correção de Olhos Vermelhos", icon: <FaRegSmile /> }
      ]
    },
    {
      icon: <FaTextHeight className="text-[#002b7f]" size={24} />,
      title: "Texto & Elementos",
      description: "Adicione elementos às suas imagens",
      gradient: "from-[#002b7f]/10 to-[#c61828]/10",
      tools: [
        { name: "Adicionar Texto", icon: <FaTextHeight /> },
        { name: "Marca d'Água", icon: <FaWater /> },
        { name: "Formas Geométricas", icon: <FaObjectGroup /> },
        { name: "Adicionar QR Code", icon: <FaQrcode /> }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f9f9] to-[#f0fff4]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#508f61] to-[#002b7f] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/image-pattern.svg')] bg-repeat opacity-20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <FaFileImage size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Processamento de Imagem Profissional</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ferramentas avançadas para edição, conversão e otimização de imagens
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#508f61] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all flex items-center gap-2 justify-center">
              <FiUpload size={18} />
              Carregar Imagem
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
            <Link href="/" className="text-[#508f61] hover:underline">
              Início
            </Link>
          </li>
          <li>
            <FiChevronRight size={14} className="text-gray-400" />
          </li>
          <li>
            <Link href="/features" className="text-[#508f61] hover:underline">
              Funcionalidades
            </Link>
          </li>
          <li>
            <FiChevronRight size={14} className="text-gray-400" />
          </li>
          <li className="text-gray-600" aria-current="page">
            Processamento de Imagem
          </li>
        </ol>
      </nav>

      {/* Tools Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imageTools.map((category, index) => (
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
                      <Link href="/features/image-processing/editor" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                        <span className="text-[#508f61] group-hover:text-[#002b7f] transition-colors">
                          {tool.icon}
                        </span>
                        <span className="flex-1 font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                          {tool.name}
                        </span>
                        <FiChevronRight className="text-gray-400 group-hover:text-[#508f61] transition-colors" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Link href="#" className="text-[#508f61] text-sm font-medium hover:underline flex items-center gap-1">
                  Ver todas ferramentas
                  <FiChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Supported Formats */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Formatos Suportados</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trabalhe com todos os principais formatos de imagem
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "JPEG", icon: "🖼️", color: "bg-blue-100 text-blue-800" },
              { name: "PNG", icon: "📸", color: "bg-orange-100 text-orange-800" },
              { name: "GIF", icon: "🎞️", color: "bg-purple-100 text-purple-800" },
              { name: "WEBP", icon: "🌐", color: "bg-green-100 text-green-800" },
              { name: "SVG", icon: "🖍️", color: "bg-yellow-100 text-yellow-800" },
              { name: "BMP", icon: "💾", color: "bg-red-100 text-red-800" },
              { name: "TIFF", icon: "🏷️", color: "bg-indigo-100 text-indigo-800" },
              { name: "RAW", icon: "🎨", color: "bg-pink-100 text-pink-800" }
            ].map((format, index) => (
              <div key={index} className={`flex items-center gap-3 px-6 py-3 rounded-full ${format.color}`}>
                <span className="text-xl">{format.icon}</span>
                <span className="font-medium">{format.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#508f61] to-[#002b7f] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para Editar Suas Imagens?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experimente gratuitamente ou adquira a versão profissional para recursos ilimitados
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#508f61] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center">
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

export default ImageProcessingPage;