import { FiUpload, FiDownload, FiSettings, FiSliders, FiImage, FiCrop, FiRotateCw, FiFilter, FiLayers, FiSave } from 'react-icons/fi';
import { FaFileImage, FaRegImages, FaPalette } from 'react-icons/fa';
import { RiContrastLine, /* RiBlurLine */ } from 'react-icons/ri';
import { IoMdColorFill } from 'react-icons/io';

export default function ImageProcessingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Toolbar */}
      <div className="bg-[#002b7f] text-white p-3 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <FiImage size={20} />
            <span className="font-semibold ml-1">Edição e Processamento de Imagem</span>
          </div>
          <div className="flex space-x-4">
            <button className="p-2 rounded hover:bg-[#001f5f] transition-colors">
              <FiSettings size={18} />
            </button>
            <button className="p-2 rounded hover:bg-[#001f5f] transition-colors">
              <FiSliders size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-64 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <FaRegImages className="mr-2 text-[#508f61]" /> Ferramentas
          </h2>
          
          <div className="space-y-2">
            <button className="w-full flex items-center px-3 py-2 rounded-lg bg-[#002b7f]/10 text-[#002b7f] font-medium">
              <FiUpload className="mr-2" /> Abrir Imagem
            </button>
            <button className="w-full flex items-center px-3 py-2 rounded-lg hover:bg-gray-100">
              <FiSave className="mr-2" /> Guardar
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
              <FiCrop className="mr-1" /> Transformação
            </h3>
            <div className="space-y-1">
              <button className="w-full text-left px-3 py-1.5 rounded hover:bg-gray-100 flex items-center">
                <FiCrop className="mr-2 text-sm" /> Cortar
              </button>
              <button className="w-full text-left px-3 py-1.5 rounded hover:bg-gray-100 flex items-center">
                <FiRotateCw className="mr-2 text-sm" /> Rodar
              </button>
              <button className="w-full text-left px-3 py-1.5 rounded hover:bg-gray-100 flex items-center">
                <FiLayers className="mr-2 text-sm" /> Redimensionar
              </button>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
              <FiFilter className="mr-1" /> Ajustes
            </h3>
            <div className="space-y-1">
              <button className="w-full text-left px-3 py-1.5 rounded hover:bg-gray-100 flex items-center">
                <RiContrastLine className="mr-2 text-sm" /> Brilho/Contraste
              </button>
              <button className="w-full text-left px-3 py-1.5 rounded hover:bg-gray-100 flex items-center">
                <FaPalette className="mr-2 text-sm" /> Cores
              </button>
              <button className="w-full text-left px-3 py-1.5 rounded hover:bg-gray-100 flex items-center">
                {/* <RiBlurLine className="mr-2 text-sm" />  */}Desfocar
              </button>
              <button className="w-full text-left px-3 py-1.5 rounded hover:bg-gray-100 flex items-center">
                <IoMdColorFill className="mr-2 text-sm" /> Efeitos
              </button>
            </div>
          </div>

          <div className="mt-8">
            <div className="text-xs text-gray-500 mb-1">Formato de Saída</div>
            <select className="w-full p-2 border border-gray-300 rounded text-sm">
              <option>JPEG (.jpg)</option>
              <option>PNG (.png)</option>
              <option>WEBP (.webp)</option>
              <option>TIFF (.tiff)</option>
            </select>
          </div>
        </div>

        {/* Image Canvas Area */}
        <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Image Toolbar */}
          <div className="bg-gray-100 p-2 border-b border-gray-200 flex items-center justify-between">
            <div className="flex space-x-2">
              <button className="p-2 rounded hover:bg-gray-200">
                <FiCrop size={16} />
              </button>
              <button className="p-2 rounded hover:bg-gray-200">
                <FiRotateCw size={16} />
              </button>
              <button className="p-2 rounded hover:bg-gray-200">
                <FiFilter size={16} />
              </button>
            </div>
            <div className="text-sm text-gray-600">
              100% | 1920×1080 | 2.4MB
            </div>
          </div>

          {/* Image Display */}
          <div className="relative h-[500px] flex items-center justify-center bg-gray-50">
            <div className="text-center p-6 max-w-md">
              <div className="mx-auto w-16 h-16 bg-[#002b7f]/10 rounded-full flex items-center justify-center mb-4">
                <FaFileImage size={24} className="text-[#002b7f]" />
              </div>
              <h3 className="text-lg font-medium mb-2">Arraste sua imagem aqui</h3>
              <p className="text-gray-600 mb-4">Ou clique para procurar no seu computador</p>
              <button className="bg-[#002b7f] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#001f5f] transition-colors">
                Selecionar Imagem
              </button>
            </div>
          </div>

          {/* Status Bar */}
          <div className="bg-gray-100 p-2 border-t border-gray-200 text-sm text-gray-600 flex justify-between">
            <div>Pronto</div>
            <div>RGB | 8 bits/canal</div>
          </div>
        </div>

        {/* Adjustments Panel */}
        <div className="w-full lg:w-72 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <FiSliders className="mr-2 text-[#c61828]" /> Ajustes
          </h2>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Brilho</span>
                <span>+25</span>
              </div>
              <input type="range" className="w-full accent-[#002b7f]" />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Contraste</span>
                <span>+10</span>
              </div>
              <input type="range" className="w-full accent-[#002b7f]" />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Saturação</span>
                <span>0</span>
              </div>
              <input type="range" className="w-full accent-[#002b7f]" />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Temperatura</span>
                <span>6500K</span>
              </div>
              <input type="range" className="w-full accent-[#002b7f]" />
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h3 className="font-medium mb-3">Filtros Rápidos</h3>
              <div className="grid grid-cols-3 gap-2">
                {['Original', 'Preto e Branco', 'Sépia', 'Vintage', 'Frio', 'Quente'].map(filter => (
                  <button 
                    key={filter} 
                    className="p-2 text-xs border border-gray-200 rounded hover:border-[#508f61] hover:text-[#508f61]"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h3 className="font-medium mb-3">Tamanho</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Largura (px)</label>
                  <input 
                    type="number" 
                    className="w-full p-2 border border-gray-300 rounded text-sm" 
                    value="1920" 
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Altura (px)</label>
                  <input 
                    type="number" 
                    className="w-full p-2 border border-gray-300 rounded text-sm" 
                    value="1080" 
                  />
                </div>
              </div>
              <div className="mt-2 flex items-center">
                <input type="checkbox" id="keepRatio" className="mr-2" checked />
                <label htmlFor="keepRatio" className="text-sm">Manter proporção</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Batch Processing Panel */}
      <div className="container mx-auto p-4 mt-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <FaRegImages className="mr-2 text-[#c61828]" /> Processamento em Lote
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <FiUpload size={32} className="mx-auto text-gray-400 mb-3" />
              <p className="text-gray-600 mb-4">Arraste múltiplas imagens para processar em lote</p>
              <button className="bg-[#508f61] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#3e7a4f] transition-colors">
                Selecionar Pasta
              </button>
            </div>
            
            <div className="md:w-64 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Ação</label>
                <select className="w-full p-2 border border-gray-300 rounded text-sm">
                  <option>Redimensionar</option>
                  <option>Converter formato</option>
                  <option>Otimizar tamanho</option>
                  <option>Aplicar filtros</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Formato de Saída</label>
                <select className="w-full p-2 border border-gray-300 rounded text-sm">
                  <option>JPEG (.jpg)</option>
                  <option>PNG (.png)</option>
                  <option>WEBP (.webp)</option>
                </select>
              </div>
              
              <button className="w-full bg-[#002b7f] text-white p-2 rounded-lg font-medium hover:bg-[#001f5f] transition-colors">
                Processar 0 Imagens
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}