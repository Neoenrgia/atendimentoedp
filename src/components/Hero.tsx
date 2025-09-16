import React, { useState } from 'react';
import { Search, Car, FileText, AlertCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const [placa, setPlaca] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleConsultar = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Redireciona para WhatsApp
    window.open('https://wa.me/5531996384549?text=Ol%C3%A1%2C%20desejo%20atendimento%20%0A', '_blank');
  };

  const formatPlaca = (value: string) => {
    // Remove caracteres não alfanuméricos
    const clean = value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
    
    // Formato antigo (ABC1234) ou novo (ABC1D23)
    if (clean.length <= 3) {
      return clean;
    } else if (clean.length <= 7) {
      return clean.replace(/^(.{3})(.*)$/, '$1-$2');
    }
    return clean.substring(0, 8).replace(/^(.{3})(.*)$/, '$1-$2');
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Consulte seus
            <span className="block text-yellow-400">Débitos Veiculares</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
            IPVA, Licenciamento e Multas de Trânsito
          </p>
          
          <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">
            Consulta rápida, segura e oficial. Mantenha sua documentação em dia.
          </p>

          {/* Main Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <Car className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Consulta de Débitos
            </h2>
            <p className="text-gray-600 mb-8">
              Digite a placa do seu veículo para consultar todos os débitos
            </p>

            <form onSubmit={handleConsultar} className="space-y-6">
              <div>
                <label htmlFor="placa" className="block text-sm font-semibold text-gray-700 mb-3 text-left">
                  Placa do Veículo
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="placa"
                    value={placa}
                    onChange={(e) => setPlaca(formatPlaca(e.target.value))}
                    placeholder="ABC-1234 ou ABC1D23"
                    className="w-full px-4 py-4 text-lg font-mono text-center border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 uppercase"
                    maxLength={8}
                    required
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || !placa.trim()}
                className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 disabled:from-gray-400 disabled:to-gray-400 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg disabled:hover:scale-100 disabled:hover:shadow-none disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-3">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>Consultando...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-3">
                    <Search className="h-5 w-5" />
                    <span>Consultar Débitos</span>
                  </div>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center text-sm text-gray-500">
                <AlertCircle className="h-4 w-4 mr-2" />
                Consulta oficial e segura
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-blue-200">Seguro</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Disponível</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">Oficial</div>
              <div className="text-blue-200">Governo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;