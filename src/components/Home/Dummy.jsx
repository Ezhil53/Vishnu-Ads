import { ArrowRight, Zap, Target, TrendingUp, Users } from "lucide-react"

function Dummy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-300 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-white/10 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-white/30 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-60 right-40 w-5 h-5 bg-white/15 rotate-12 animate-pulse delay-200"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Main hero content */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white/90 text-sm font-medium">
                  <Zap className="w-4 h-4 mr-2" />
                  Digital Innovation Leaders
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
                Accelerate growth with cutting-edge digital transformation and
                marketing strategies. We turn innovative ideas into measurable
                business success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center">
                  Start Your Transformation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="px-8 py-4 backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  View Our Work
                </button>
              </div>

              {/* Trust indicators */}
              <div className="text-white/60 text-sm">
                Trusted by 500+ companies worldwide
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="group backdrop-blur-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Strategic Planning
              </h3>
              <p className="text-white/70 leading-relaxed">
                Data-driven strategies that align technology with your business
                goals for maximum impact and ROI.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group backdrop-blur-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Growth Marketing
              </h3>
              <p className="text-white/70 leading-relaxed">
                Performance-driven marketing campaigns that scale your business
                and accelerate customer acquisition.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group backdrop-blur-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Team Empowerment
              </h3>
              <p className="text-white/70 leading-relaxed">
                Comprehensive training and change management to ensure your team
                thrives in the digital landscape.
              </p>
            </div>
          </div>

          {/* Bottom CTA section */}
          <div className="text-center mt-16">
            <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8 inline-block">
              <p className="text-white/80 mb-4 text-lg">
                Ready to lead your industry?
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
                <span>• Free Consultation</span>
                <span>• Custom Strategy</span>
                <span>• Proven Results</span>
                <span>• Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dummy
