import React from 'react';
import { Shield, Users, BookOpen, Lightbulb, Mail, MapPin, Phone, Heart, Facebook, Instagram, MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <img 
              src="/pixel logo.jpg" 
              alt="Pixel Logo" 
              className="w-20 h-20 mr-4 bg-white rounded-lg p-2"
            />
            <h1 className="text-4xl md:text-5xl font-bold">Associazione Pixel</h1>
          </div>
          <p className="text-xl md:text-2xl text-orange-100 font-light">
            Cultura digitale. Sicurezza. Cittadinanza attiva.
          </p>
        </div>
      </header>

      {/* Section 1 - Chi siamo */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Una rete per la cultura digitale e civica
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Pixel è un'associazione culturale nata con l'obiettivo di promuovere l'educazione digitale, 
                  la consapevolezza informatica e la cittadinanza attiva nei territori locali.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Crediamo che il sapere sia il primo strumento di libertà. Per questo lavoriamo ogni giorno 
                  per avvicinare cittadini, famiglie, scuole e istituzioni a un uso sicuro, consapevole e 
                  responsabile delle tecnologie digitali.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-orange-500">
                    <Users className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Cittadini</h3>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-green-500">
                    <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Scuole</h3>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-blue-500">
                    <Shield className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Sicurezza</h3>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-green-500">
                    <Heart className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Famiglie</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Le nostre attività */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cosa facciamo
            </h2>
            <p className="text-xl text-gray-600">Le nostre attività per una cultura digitale consapevole</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-orange-500">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Eventi Formativi</h3>
              <p className="text-gray-600">
                Eventi pubblici su sicurezza informatica, protezione dati, cyberbullismo e cittadinanza digitale
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-green-500">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Laboratori</h3>
              <p className="text-gray-600">
                Seminari per adulti, studenti, insegnanti e genitori con approccio pratico e interattivo
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Progetti Territoriali</h3>
              <p className="text-gray-600">
                Collaborazioni con Comuni, scuole ed enti pubblici per iniziative sul territorio
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-orange-500">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Materiale Educativo</h3>
              <p className="text-gray-600">
                Distribuzione gratuita di risorse educative, inclusa la nostra dispensa "Navigare Sicuri"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Progetti in corso */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Progetti in corso
            </h2>
            <p className="text-xl text-gray-600">Iniziative attive per la comunità</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 via-green-500 to-blue-600 p-8 text-white">
                <div className="flex items-center mb-4">
                  <Shield className="w-12 h-12 mr-4" />
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Cittadinanza Informatica e Sicurezza Web
                  </h3>
                </div>
                <p className="text-xl text-orange-100">Progetto in evidenza</p>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Materiale didattico</h4>
                    <p className="text-gray-600">Materiale personalizzato e gratuito</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Docenze Specialistiche</h4>
                    <p className="text-gray-600">Formazione con esperti del settore</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Formazione Aperta</h4>
                    <p className="text-gray-600">Accessibile a tutti i cittadini</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Perché "Pixel"? */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-orange-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg border-4 border-gradient-to-r from-orange-500 to-blue-600">
                <img 
                  src="/pixel logo.jpg" 
                  alt="Pixel Logo" 
                  className="w-24 h-24"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Perché "Pixel"?
              </h2>
              <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-green-500 to-blue-600 font-semibold mb-8">
                Ogni cambiamento comincia da un punto
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  In informatica, il pixel è l'elemento più piccolo di un'immagine.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Anche noi crediamo che ogni singolo cittadino possa essere un punto di luce 
                  nel proprio territorio, contribuendo a creare un'immagine più bella e sicura 
                  del nostro futuro digitale.
                </p>
              </div>
              <div className="relative">
                <div className="grid grid-cols-8 gap-2 p-8">
                  {[...Array(64)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-sm ${
                        Math.random() > 0.7 
                          ? i % 3 === 0 
                            ? 'bg-orange-500' 
                            : i % 3 === 1 
                              ? 'bg-green-500' 
                              : 'bg-blue-500'
                          : 'bg-gray-200'
                      }`}
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        animation: 'pulse 2s infinite'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Unisciti a noi */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Unisciti a noi
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Diventa socio o proponi una collaborazione
            </p>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-gradient-to-r from-orange-500 to-blue-600">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Se sei un docente, un amministratore, un educatore o un cittadino attivo, 
                puoi collaborare con l'Associazione Pixel per portare un evento anche nel tuo Comune.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-orange-600 font-medium">info@pixelassociazione.it</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Sede Legale</h3>
                  <p className="text-gray-600">Via dei Mulini 2, Teramo</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contatto Diretto</h3>
                  <p className="text-gray-600">347 6770027</p>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="bg-gradient-to-r from-orange-500 via-green-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:via-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Contattaci Ora
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <img 
                src="/pixel logo.jpg" 
                alt="Pixel Logo" 
                className="w-12 h-12 mr-3 bg-white rounded-lg p-1"
              />
              <h3 className="text-2xl font-bold">Associazione Culturale Pixel</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Informazioni Legali</h4>
                <p className="text-gray-400">CF: 92067490679</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Contatti</h4>
                <p className="text-orange-400">info@pixelassociazione.it</p>
                <p className="text-gray-400">Via dei Mulini 2, Teramo</p>
                <p className="text-gray-400">347 6770027</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Seguici sui Social</h4>
                <div className="flex justify-center">
                  <a href="https://www.facebook.com/pixelassociazione.it" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400">
                © 2024 Associazione Culturale Pixel. Tutti i diritti riservati.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;