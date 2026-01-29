import { Construction, Wrench, Clock } from 'lucide-react';

const FoodServicesSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#2d2a28] via-[#3d3835] to-[#4a4540] text-white py-24 lg:py-32 min-h-[60vh] flex items-center overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(183,166,161,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(214,185,178,0.05),transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Animated icon container */}
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full animate-pulse" />
            <div className="relative w-full h-full bg-gradient-to-br from-[#3d3835] to-[#2d2a28] rounded-full flex items-center justify-center border border-white/10">
              <Construction className="w-10 h-10 text-primary" />
            </div>
          </div>
          
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Seção em{' '}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-light to-primary animate-gradient-x bg-[length:200%_auto]">
              Desenvolvimento
            </span>
          </h2>
          
          <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-lg mx-auto">
            Estamos trabalhando para trazer conteúdo incrível sobre nossos serviços de alimentação. Em breve você terá acesso a informações completas.
          </p>
          
          {/* Status indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <Wrench className="w-5 h-5 text-primary animate-spin-slow" />
              <span className="text-white/80 text-sm font-medium">Construindo</span>
            </div>
            
            <div className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-white/80 text-sm font-medium">Em breve</span>
            </div>
          </div>
          
          {/* Animated dots */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="w-2 h-2 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: `${i * 150}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* CSS for slow spin */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default FoodServicesSection;
