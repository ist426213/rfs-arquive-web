import { FiUpload, FiDownload, FiEdit, FiTrash2, FiSearch, FiPrinter, FiSave, FiLock, FiUnlock, FiFile, FiFolder, FiRotateCw } from 'react-icons/fi';
import { FaFilePdf, FaRegFilePdf, FaFileImport, FaFileExport } from 'react-icons/fa';
import { HiOutlineDocumentDuplicate, HiOutlineDocumentText } from 'react-icons/hi';
import { BsFillGearFill, BsThreeDotsVertical } from 'react-icons/bs';

export default function PDFEditorPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Top Toolbar */}
      <div className="bg-[#002b7f] text-white p-3 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaFilePdf size={22} />
            <span className="font-semibold">Edição e processamento de PDF</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded hover:bg-[#001f5f] transition-colors">
              <FiSearch size={18} />
            </button>
            <button className="p-2 rounded hover:bg-[#001f5f] transition-colors">
              <BsFillGearFill size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar - Document Navigation */}
        <div className="w-full lg:w-64 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold flex items-center">
              <FiFolder className="mr-2 text-[#508f61]" /> Documentos
            </h2>
            <button className="text-gray-500 hover:text-gray-700">
              <BsThreeDotsVertical />
            </button>
          </div>

          <div className="space-y-2 mb-6">
            <button className="w-full flex items-center px-3 py-2 rounded-lg bg-[#002b7f]/10 text-[#002b7f] font-medium">
              <FiUpload className="mr-2" /> Abrir PDF
            </button>
            <button className="w-full flex items-center px-3 py-2 rounded-lg hover:bg-gray-100">
              <FaFileImport className="mr-2" /> Importar
            </button>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Documentos Recentes</h3>
            <div className="space-y-2">
              {['Relatório Anual.pdf', 'Contrato Assinado.pdf', 'Fatura 2023.pdf'].map((doc, index) => (
                <div key={index} className="flex items-center p-2 rounded hover:bg-gray-100 cursor-pointer">
                  <FaRegFilePdf className="text-[#c61828] mr-2" />
                  <span className="text-sm truncate">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main PDF Canvas Area */}
        <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col">
          {/* PDF Toolbar */}
          <div className="bg-gray-100 p-2 border-b border-gray-200 flex items-center justify-between">
            <div className="flex space-x-2">
              <button className="p-2 rounded hover:bg-gray-200" title="Editar">
                <FiEdit size={16} />
              </button>
              <button className="p-2 rounded hover:bg-gray-200" title="Adicionar Texto">
                <HiOutlineDocumentText size={16} />
              </button>
              <button className="p-2 rounded hover:bg-gray-200" title="Proteger">
                <FiLock size={16} />
              </button>
              <button className="p-2 rounded hover:bg-gray-200" title="Imprimir">
                <FiPrinter size={16} />
              </button>
              <button className="p-2 rounded hover:bg-gray-200" title="Dividir">
                <HiOutlineDocumentDuplicate size={16} />
              </button>
            </div>
            <div className="text-sm text-gray-600">
              Página 1 de 12 | 100% | 2.4MB
            </div>
          </div>

          {/* PDF Display */}
          <div className="relative flex-1 flex items-center justify-center bg-gray-50 overflow-auto p-6">
            <div className="bg-white shadow-md border border-gray-200 w-full max-w-4xl">
              {/* PDF Mockup */}
              <div className="h-96 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="text-center p-6 max-w-md">
                  <div className="mx-auto w-16 h-16 bg-[#002b7f]/10 rounded-full flex items-center justify-center mb-4">
                    <FaFilePdf size={24} className="text-[#c61828]" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Arraste seu PDF aqui</h3>
                  <p className="text-gray-600 mb-4">Ou clique para procurar no seu computador</p>
                  <button className="bg-[#002b7f] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#001f5f] transition-colors">
                    Selecionar PDF
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Page Navigation */}
          <div className="bg-gray-100 p-2 border-t border-gray-200 flex items-center justify-center space-x-4">
            <button className="p-2 rounded hover:bg-gray-200 disabled:text-gray-400" disabled>
              &lt;
            </button>
            <span className="text-sm">Página <input type="number" className="w-12 text-center border border-gray-300 rounded p-1" value="1" /> de 12</span>
            <button className="p-2 rounded hover:bg-gray-200">
              &gt;
            </button>
          </div>
        </div>

        {/* Right Sidebar - Editing Tools */}
        <div className="w-full lg:w-72 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <FiEdit className="mr-2 text-[#c61828]" /> Ferramentas de Edição
          </h2>

          <div className="space-y-6">
            {/* Text Tools */}
            <div>
              <h3 className="font-medium mb-3">Texto</h3>
              <div className="grid grid-cols-2 gap-3 mb-2">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Fonte</label>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>Arial</option>
                    <option>Times New Roman</option>
                    <option>Calibri</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Tamanho</label>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>12</option>
                    <option>14</option>
                    <option>16</option>
                  </select>
                </div>
              </div>
              <div className="flex space-x-2 mb-3">
                <button className="p-2 border border-gray-200 rounded hover:bg-gray-100">
                  <span className="font-bold">B</span>
                </button>
                <button className="p-2 border border-gray-200 rounded hover:bg-gray-100">
                  <span className="italic">I</span>
                </button>
                <button className="p-2 border border-gray-200 rounded hover:bg-gray-100">
                  <span className="underline">U</span>
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <label className="text-sm">Cor:</label>
                <input type="color" className="w-8 h-8" value="#000000" />
              </div>
            </div>

            {/* Page Tools */}
            <div className="pt-4 border-t border-gray-200">
              <h3 className="font-medium mb-3">Páginas</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center">
                  <FiFile className="mr-2" /> Adicionar Página
                </button>
                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center">
                  <FiTrash2 className="mr-2" /> Remover Página
                </button>
                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center">
                  <FiRotateCw className="mr-2" /> Rodar Página
                </button>
              </div>
            </div>

            {/* Security Tools */}
            <div className="pt-4 border-t border-gray-200">
              <h3 className="font-medium mb-3">Segurança</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center">
                  <FiLock className="mr-2" /> Proteger com Senha
                </button>
                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center">
                  <FiUnlock className="mr-2" /> Remover Proteção
                </button>
              </div>
            </div>

            {/* Save Options */}
            <div className="pt-4 border-t border-gray-200">
              <h3 className="font-medium mb-3">Guardar</h3>
              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center justify-center p-2 border border-gray-200 rounded hover:bg-gray-100 text-sm">
                  <FiSave className="mr-1" /> Guardar
                </button>
                <button className="flex items-center justify-center p-2 border border-gray-200 rounded hover:bg-gray-100 text-sm">
                  <FaFileExport className="mr-1" /> Exportar
                </button>
              </div>
              <div className="mt-2">
                <label className="block text-sm text-gray-600 mb-1">Formato</label>
                <select className="w-full p-2 border border-gray-300 rounded text-sm">
                  <option>PDF (.pdf)</option>
                  <option>DOCX (.docx)</option>
                  <option>JPG (.jpg)</option>
                  <option>PNG (.png)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Batch Processing Panel */}
      <div className="container mx-auto p-4 mt-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <FaRegFilePdf className="mr-2 text-[#c61828]" /> Processamento em Lote
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <FiUpload size={32} className="mx-auto text-gray-400 mb-3" />
              <p className="text-gray-600 mb-4">Arraste múltiplos PDFs para processar em lote</p>
              <button className="bg-[#508f61] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#3e7a4f] transition-colors">
                Selecionar Pasta
              </button>
            </div>
            
            <div className="md:w-64 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Ação</label>
                <select className="w-full p-2 border border-gray-300 rounded text-sm">
                  <option>Unir PDFs</option>
                  <option>Dividir PDF</option>
                  <option>Comprimir</option>
                  <option>Converter para Word</option>
                  <option>Proteger com senha</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Opções</label>
                <select className="w-full p-2 border border-gray-300 rounded text-sm">
                  <option>Manter qualidade original</option>
                  <option>Otimizar para web</option>
                  <option>Otimizar para impressão</option>
                </select>
              </div>
              
              <button className="w-full bg-[#002b7f] text-white p-2 rounded-lg font-medium hover:bg-[#001f5f] transition-colors">
                Processar 0 PDFs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}