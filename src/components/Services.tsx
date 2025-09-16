import React from 'react';
import { Car, FileText, AlertTriangle, CreditCard, Calendar, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Car,
      title: 'IPVA',
      description: 'Imposto sobre Propriedade de Veículos Automotores',
      details: [
        'Consulta de débitos em aberto',
        'Histórico de pagamentos',
        'Valores atualizados',
        'Opções de parcelamento'
      ],
      color: 'blue'
    },
    {
      icon: FileText,
      title: 'Licenciamento',
      description: 'Licenciamento Anual do Veículo',
      details: [
        'Status do licenciamento',
        'Documentação necessária',
        'Prazos e vencimentos',
        'Renovação online'
      ],
      color: 'green'
    },
    {
      icon: AlertTriangle,
      title: 'Multas',
      description: 'Infrações de Trânsito',
      details: [
        'Multas pendentes',
        'Detalhes das infrações',
        'Recursos e contestações',
        'Parcelamento disponível'
      ],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'bg-blue-100 text-blue-600',
        title: 'text-blue-800',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'bg-green-100 text-green-600',
        title: 'text-green-800',
        button: 'bg-green-600 hover:bg-green-700'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        icon: 'bg-orange-100 text-orange-600',
        title: 'text-orange-800',
        button: 'bg-orange-600 hover:bg-orange-700'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Consulte e quite todos os seus débitos veiculares em um só lugar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className={`${colors.icon} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="h-8 w-8" />
                </div>
                
                <h3 className={`text-2xl font-bold ${colors.title} mb-3`}>
                  {service.title}
                </h3>
                
                <p className="text-gray-700 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Recursos Adicionais
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Pagamento Online
              </h4>
              <p className="text-gray-600">
                Pague seus débitos com cartão, PIX ou boleto bancário
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Lembretes
              </h4>
              <p className="text-gray-600">
                Receba notificações sobre vencimentos e prazos
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Segurança
              </h4>
              <p className="text-gray-600">
                Seus dados protegidos com criptografia de ponta
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;