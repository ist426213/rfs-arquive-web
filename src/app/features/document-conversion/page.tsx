import { FaFileWord, FaFileExcel, FaFilePowerpoint, FaFilePdf, FaFileAlt, FaFileCode, FaFileArchive, FaFileImage, FaExchangeAlt } from 'react-icons/fa';
import { FiUpload, FiDownload, FiChevronRight, FiSettings } from 'react-icons/fi';
import Link from 'next/link';

const DocumentConversionPage = () => {
  const conversionTools = [
    {
      icon: <FaFileWord className="text-[#2b579a]" size={24} />,
      title: "Conversão de Word",
      description: "Converta para e desde formatos Word",
      gradient: "from-[#2b579a]/10 to-[#508f61]/10",
      tools: [
        { name: "DOCX para PDF", icon: <FaFilePdf /> },
        { name: "DOCX para TXT", icon: <FaFileAlt /> },
        { name: "DOCX para HTML", icon: <FaFileCode /> },
        { name: "Para DOCX", icon: <FaFileWord /> }
      ]
    },
    {
      icon: <FaFileExcel className="text-[#217346]" size={24} />,
      title: "Conversão de Excel",
      description: "Converta planilhas para vários formatos",
      gradient: "from-[#217346]/10 to-[#2b579a]/10",
      tools: [
        { name: "XLSX para PDF", icon: <FaFilePdf /> },
        { name: "XLSX para CSV", icon: <FaFileAlt /> },
        { name: "XLSX para HTML", icon: <FaFileCode /> },
        { name: "Para XLSX", icon: <FaFileExcel /> }
      ]
    },
    {
      icon: <FaFilePowerpoint className="text-[#d24726]" size={24} />,
      title: "Conversão de PowerPoint",
      description: "Transforme apresentações em outros formatos",
      gradient: "from-[#d24726]/10 to-[#217346]/10",
      tools: [
        { name: "PPTX para PDF", icon: <FaFilePdf /> },
        { name: "PPTX para JPG", icon: <FaFileImage /> },
        { name: "PPTX para HTML", icon: <FaFileCode /> },
        { name: "Para PPTX", icon: <FaFilePowerpoint /> }
      ]
    },
    {
      icon: <FaFilePdf className="text-[#c61828]" size={24} />,
      title: "Conversão de PDF",
      description: "Converta PDFs para formatos editáveis",
      gradient: "from-[#c61828]/10 to-[#d24726]/10",
      tools: [
        { name: "PDF para Word", icon: <FaFileWord /> },
        { name: "PDF para Excel", icon: <FaFileExcel /> },
        { name: "PDF para Texto", icon: <FaFileAlt /> },
        { name: "PDF para Imagens", icon: <FaFileImage /> }
      ]
    },
    {
      icon: <FaFileAlt className="text-[#002b7f]" size={24} />,
      title: "Conversão de Texto",
      description: "Transforme arquivos de texto simples",
      gradient: "from-[#002b7f]/10 to-[#c61828]/10",
      tools: [
        { name: "TXT para PDF", icon: <FaFilePdf /> },
        { name: "TXT para DOCX", icon: <FaFileWord /> },
        { name: "TXT para HTML", icon: <FaFileCode /> },
        { name: "Para TXT", icon: <FaFileAlt /> }
      ]
    },
    {
      icon: <FaFileArchive className="text-[#508f61]" size={24} />,
      title: "Outras Conversões",
      description: "Formatos especiais e arquivamento",
      gradient: "from-[#508f61]/10 to-[#002b7f]/10",
      tools: [
        { name: "HTML para PDF", icon: <FaFilePdf /> },
        { name: "Markdown para DOCX", icon: <FaFileWord /> },
        { name: "XML para XLSX", icon: <FaFileExcel /> },
        { name: "Conversão em Massa", icon: <FaExchangeAlt /> }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f9f9] to-[#f0f4ff]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#002b7f] to-[#508f61] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/document-pattern.svg')] bg-repeat opacity-20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <FaExchangeAlt size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Conversão de Documentos Profissional</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Converta entre todos os formatos populares com qualidade perfeita
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#002b7f] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all flex items-center gap-2 justify-center">
              <FiUpload size={18} />
              Converter Documento
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
            Conversão de Documentos
          </li>
        </ol>
      </nav>

      {/* Tools Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conversionTools.map((category, index) => (
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

      {/* Conversion Matrix */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Matriz de Conversão</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Veja todos os formatos que podem ser convertidos entre si
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-4 px-6 text-left font-semibold text-gray-700">De/Para</th>
                  <th className="py-4 px-6 text-center font-semibold text-gray-700">PDF</th>
                  <th className="py-4 px-6 text-center font-semibold text-gray-700">DOCX</th>
                  <th className="py-4 px-6 text-center font-semibold text-gray-700">XLSX</th>
                  <th className="py-4 px-6 text-center font-semibold text-gray-700">PPTX</th>
                  <th className="py-4 px-6 text-center font-semibold text-gray-700">TXT</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { format: "PDF", icon: <FaFilePdf className="text-[#c61828] mx-auto" /> },
                  { format: "DOCX", icon: <FaFileWord className="text-[#2b579a] mx-auto" /> },
                  { format: "XLSX", icon: <FaFileExcel className="text-[#217346] mx-auto" /> },
                  { format: "PPTX", icon: <FaFilePowerpoint className="text-[#d24726] mx-auto" /> },
                  { format: "TXT", icon: <FaFileAlt className="text-[#002b7f] mx-auto" /> }
                ].map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-4 px-6 border-b border-gray-200 font-medium flex items-center gap-2">
                      <span>{row.icon}</span>
                      <span>{row.format}</span>
                    </td>
                    {[
                      { supported: row.format === "PDF", self: true },
                      { supported: true },
                      { supported: true },
                      { supported: true },
                      { supported: true }
                    ].map((cell, cellIndex) => (
                      <td key={cellIndex} className="py-4 px-6 border-b border-gray-200 text-center">
                        {cell.self ? (
                          <span className="text-gray-400">-</span>
                        ) : cell.supported ? (
                          <span className="text-[#508f61]">✓</span>
                        ) : (
                          <span className="text-gray-300">✗</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#002b7f] to-[#508f61] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para Converter Seus Documentos?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Preserve a formatação e qualidade em todas as conversões
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#002b7f] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center">
              <FiUpload size={18} />
              Converter Agora
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

export default DocumentConversionPage;