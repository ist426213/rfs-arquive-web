import { FaLock, FaUnlock, FaShieldAlt, FaFileSignature, FaUserLock, FaWater, FaRedo, FaEyeSlash, FaFilePdf, FaFileWord, FaFileExcel } from 'react-icons/fa';
import { FiUpload, FiDownload, FiChevronRight, FiSettings, FiKey } from 'react-icons/fi';
import Link from 'next/link';

const SecurityToolsPage = () => {
  const securityTools = [
    {
      icon: <FaLock className="text-[#002b7f]" size={24} />,
      title: "Proteção por Senha",
      description: "Controle de acesso a seus documentos",
      gradient: "from-[#002b7f]/10 to-[#c61828]/10",
      tools: [
        { name: "Proteger PDF com Senha", icon: <FiKey /> },
        { name: "Proteger Arquivos Office", icon: <FaLock /> },
        { name: "Definir Permissões", icon: <FaUserLock /> },
        { name: "Remover Proteção", icon: <FaUnlock /> }
      ]
    },
    {
      icon: <FaFileSignature className="text-[#c61828]" size={24} />,
      title: "Assinaturas Digitais",
      description: "Autenticidade e integridade documental",
      gradient: "from-[#c61828]/10 to-[#508f61]/10",
      tools: [
        { name: "Assinar Digitalmente", icon: <FaFileSignature /> },
        { name: "Verificar Assinatura", icon: <FaShieldAlt /> },
        { name: "Certificado Digital", icon: <FiKey /> },
        { name: "Selo de Tempo", icon: <FaRedo /> }
      ]
    },
    {
      icon: <FaEyeSlash className="text-[#508f61]" size={24} />,
      title: "Redação de Documentos",
      description: "Remova informações sensíveis permanentemente",
      gradient: "from-[#508f61]/10 to-[#002b7f]/10",
      tools: [
        { name: "Redação de Texto", icon: <FaEyeSlash /> },
        { name: "Ocultar Metadados", icon: <FaEyeSlash /> },
        { name: "Remover Informações Ocultas", icon: <FaEyeSlash /> },
        { name: "Auditoria de Segurança", icon: <FaShieldAlt /> }
      ]
    },
    {
      icon: <FaWater className="text-[#002b7f]" size={24} />,
      title: "Marcas d'Água",
      description: "Proteção contra uso não autorizado",
      gradient: "from-[#002b7f]/10 to-[#c61828]/10",
      tools: [
        { name: "Adicionar Marca d'Água", icon: <FaWater /> },
        { name: "Marca d'Água Digital", icon: <FaWater /> },
        { name: "Marca d'Água Visível", icon: <FaWater /> },
        { name: "Remover Marcas d'Água", icon: <FaWater /> }
      ]
    },
    {
      icon: <FaShieldAlt className="text-[#c61828]" size={24} />,
      title: "Criptografia",
      description: "Proteção avançada para dados sensíveis",
      gradient: "from-[#c61828]/10 to-[#508f61]/10",
      tools: [
        { name: "Criptografar Arquivos", icon: <FaShieldAlt /> },
        { name: "AES-256 Encryption", icon: <FaShieldAlt /> },
        { name: "Criptografar Pastas", icon: <FaShieldAlt /> },
        { name: "Proteger com Certificado", icon: <FaShieldAlt /> }
      ]
    },
    {
      icon: <FaUserLock className="text-[#508f61]" size={24} />,
      title: "Controle de Acesso",
      description: "Gestão de permissões e usuários",
      gradient: "from-[#508f61]/10 to-[#002b7f]/10",
      tools: [
        { name: "Restringir Edição", icon: <FaUserLock /> },
        { name: "Definir Permissões", icon: <FaUserLock /> },
        { name: "Gestão de Usuários", icon: <FaUserLock /> },
        { name: "Auditoria de Acesso", icon: <FaUserLock /> }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f9f9] to-[#f5f9ff]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#002b7f] to-[#c61828] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/security-pattern.svg')] bg-repeat opacity-20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <FaShieldAlt size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ferramentas de Segurança Documental</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Proteção avançada para seus documentos confidenciais
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#002b7f] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all flex items-center gap-2 justify-center">
              <FiUpload size={18} />
              Proteger Documento
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
            Ferramentas de Segurança
          </li>
        </ol>
      </nav>

      {/* Tools Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityTools.map((category, index) => (
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
                  Ver todas opções
                  <FiChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Standards Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Padrões de Segurança Suportados</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Implementamos os mais altos padrões de segurança do setor
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { standard: "AES-256 Encryption", icon: <FaShieldAlt size={32} className="text-[#002b7f] mx-auto" /> },
              { standard: "Certificados Digitais", icon: <FiKey size={32} className="text-[#c61828] mx-auto" /> },
              { standard: "PDF 2.0 Security", icon: <FaFilePdf size={32} className="text-[#c61828] mx-auto" /> },
              { standard: "Office Encryption", icon: <FaFileWord size={32} className="text-[#2b579a] mx-auto" /> },
              { standard: "GDPR Compliance", icon: <FaUserLock size={32} className="text-[#508f61] mx-auto" /> },
              { standard: "Redação Permanente", icon: <FaEyeSlash size={32} className="text-[#002b7f] mx-auto" /> },
              { standard: "Assinatura PAdES", icon: <FaFileSignature size={32} className="text-[#c61828] mx-auto" /> },
              { standard: "Auditoria Completa", icon: <FaShieldAlt size={32} className="text-[#508f61] mx-auto" /> }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200 hover:border-[#002b7f] transition-colors">
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-800">{item.standard}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#002b7f] to-[#c61828] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Proteja Seus Documentos Confidenciais</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Garanta a segurança e privacidade de suas informações mais sensíveis
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#002b7f] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center">
              <FiUpload size={18} />
              Proteger Agora
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

export default SecurityToolsPage;