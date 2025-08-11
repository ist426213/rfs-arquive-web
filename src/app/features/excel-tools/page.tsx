import { FaFileExcel, FaTable, FaChartLine, FaFilter, FaSortAmountDown, FaSearch, FaLock, FaUnlock, FaFilePdf, FaFileCsv, FaFileImport, FaFileExport, FaMagic } from 'react-icons/fa';
import { FiUpload, FiDownload, FiChevronRight, FiSettings, FiShare2 } from 'react-icons/fi';
import Link from 'next/link';

const ExcelToolsPage = () => {


    
  const excelTools = [
    {
      icon: <FaTable className="text-[#217346]" size={24} />,
      title: "Manipulação de Dados",
      description: "Ferramentas avançadas para organizar seus dados",
      gradient: "from-[#217346]/10 to-[#2b579a]/10",
      tools: [
        { name: "Ordenar Dados", icon: <FaSortAmountDown /> },
        { name: "Filtrar Tabelas", icon: <FaFilter /> },
        { name: "Remover Duplicados", icon: <FaTable /> },
        { name: "Transpor Tabelas", icon: <FaTable /> }
      ]
    },
    {
      icon: <FaChartLine className="text-[#2b579a]" size={24} />,
      title: "Análise & Visualização",
      description: "Transforme dados em insights visuais",
      gradient: "from-[#2b579a]/10 to-[#d24726]/10",
      tools: [
        { name: "Gerar Gráficos", icon: <FaChartLine /> },
        { name: "Análise Rápida", icon: <FaSearch /> },
        { name: "Tabelas Dinâmicas", icon: <FaTable /> },
        { name: "Formatação Condicional", icon: <FaMagic /> }
      ]
    },
    {
      icon: <FaLock className="text-[#d24726]" size={24} />,
      title: "Proteção & Segurança",
      description: "Controle de acesso e privacidade",
      gradient: "from-[#d24726]/10 to-[#c61828]/10",
      tools: [
        { name: "Proteger Planilha", icon: <FaLock /> },
        { name: "Proteger Arquivo", icon: <FaLock /> },
        { name: "Remover Proteção", icon: <FaUnlock /> },
        { name: "Ocultar Fórmulas", icon: <FaLock /> }
      ]
    },
    {
      icon: <FaFileExport className="text-[#c61828]" size={24} />,
      title: "Conversão de Formatos",
      description: "Exporte para diversos formatos",
      gradient: "from-[#c61828]/10 to-[#002b7f]/10",
      tools: [
        { name: "Excel para PDF", icon: <FaFilePdf /> },
        { name: "Excel para CSV", icon: <FaFileCsv /> },
        { name: "Excel para HTML", icon: <FaFileExport /> },
        { name: "Importar para Excel", icon: <FaFileImport /> }
      ]
    },
    {
      icon: <FaMagic className="text-[#002b7f]" size={24} />,
      title: "Ferramentas Avançadas",
      description: "Automação e otimização",
      gradient: "from-[#002b7f]/10 to-[#508f61]/10",
      tools: [
        { name: "Limpar Dados", icon: <FaMagic /> },
        { name: "Dividir Colunas", icon: <FaTable /> },
        { name: "Combinar Arquivos", icon: <FaFileExport /> },
        { name: "Macros Automáticas", icon: <FiSettings /> }
      ]
    },
    {
      icon: <FiShare2 className="text-[#508f61]" size={24} />,
      title: "Colaboração",
      description: "Trabalhe em equipe com Excel",
      gradient: "from-[#508f61]/10 to-[#217346]/10",
      tools: [
        { name: "Compartilhar Planilha", icon: <FiShare2 /> },
        { name: "Comparar Arquivos", icon: <FaSearch /> },
        { name: "Controlar Alterações", icon: <FaLock /> },
        { name: "Comentários Colaborativos", icon: <FiShare2 /> }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f9f9] to-[#f0fff4]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#217346] to-[#2b579a] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/excel-pattern.svg')] bg-repeat opacity-20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <FaFileExcel size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ferramentas Profissionais para Excel</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Tudo o que você precisa para processar, analisar e otimizar suas planilhas
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#217346] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all flex items-center gap-2 justify-center">
              <FiUpload size={18} />
              Carregar Planilha
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
            <Link href="/" className="text-[#217346] hover:underline">
              Início
            </Link>
          </li>
          <li>
            <FiChevronRight size={14} className="text-gray-400" />
          </li>
          <li>
            <Link href="/features" className="text-[#217346] hover:underline">
              Funcionalidades
            </Link>
          </li>
          <li>
            <FiChevronRight size={14} className="text-gray-400" />
          </li>
          <li className="text-gray-600" aria-current="page">
            Ferramentas Excel
          </li>
        </ol>
      </nav>

      {/* Tools Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {excelTools.map((category, index) => (
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
                        <span className="text-[#217346] group-hover:text-[#2b579a] transition-colors">
                          {tool.icon}
                        </span>
                        <span className="flex-1 font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                          {tool.name}
                        </span>
                        <FiChevronRight className="text-gray-400 group-hover:text-[#217346] transition-colors" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Link href="#" className="text-[#217346] text-sm font-medium hover:underline flex items-center gap-1">
                  Ver todas ferramentas
                  <FiChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Supported Versions */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compatibilidade com Versões do Excel</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trabalhe com todas as versões do Microsoft Excel e alternativas
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { version: "Excel 365", year: "2019-2023", color: "bg-[#217346]/10 text-[#217346]" },
              { version: "Excel 2016", year: "2016", color: "bg-[#2b579a]/10 text-[#2b579a]" },
              { version: "Excel 2013", year: "2013", color: "bg-[#d24726]/10 text-[#d24726]" },
              { version: "Excel 2010", year: "2010", color: "bg-[#c61828]/10 text-[#c61828]" },
              { version: "Excel 2007", year: "2007", color: "bg-[#002b7f]/10 text-[#002b7f]" },
              { version: "Google Sheets", year: "Online", color: "bg-[#508f61]/10 text-[#508f61]" },
              { version: "LibreOffice Calc", year: "Open Source", color: "bg-[#217346]/10 text-[#217346]" },
              { version: "Outros Formatos", year: "CSV, ODS", color: "bg-gray-100 text-gray-800" }
            ].map((item, index) => (
              <div key={index} className={`p-5 rounded-xl ${item.color} flex flex-col items-center justify-center text-center`}>
                <FaFileExcel size={32} className="mb-3" />
                <h3 className="text-lg font-semibold">{item.version}</h3>
                <p className="text-sm opacity-80">{item.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#217346] to-[#2b579a] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para Potencializar Seu Excel?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Automatize tarefas repetitivas e ganhe horas de produtividade
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#217346] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center">
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

export default ExcelToolsPage;