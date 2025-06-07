import Image from "next/image"

export function GeotechnicalDiagram() {
  return (
    <div className="relative w-full h-20 bg-white border border-slate-300 rounded-lg overflow-hidden">
      <svg viewBox="0 0 800 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Fondo con gradiente sutil */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>

          {/* Patrón para estratigrafía */}
          <pattern id="stratum1" patternUnits="userSpaceOnUse" width="4" height="4">
            <circle cx="2" cy="2" r="0.5" fill="#64748b" opacity="0.3" />
          </pattern>

          <pattern id="stratum2" patternUnits="userSpaceOnUse" width="6" height="3">
            <rect width="6" height="1" fill="#475569" opacity="0.2" />
          </pattern>

          <pattern id="stratum3" patternUnits="userSpaceOnUse" width="8" height="4">
            <polygon points="0,0 4,2 8,0 8,4 0,4" fill="#334155" opacity="0.15" />
          </pattern>
        </defs>

        <rect width="800" height="160" fill="url(#bgGradient)" />

        {/* Ondas sísmicas (ondas S) - lado izquierdo */}
        <g transform="translate(20, 30)">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path
              key={i}
              d={`M ${i * 15} 20 Q ${i * 15 + 7} 10 ${i * 15 + 14} 20 Q ${i * 15 + 21} 30 ${i * 15 + 28} 20 Q ${i * 15 + 35} 10 ${i * 15 + 42} 20`}
              stroke="#e11d24"
              strokeWidth="1.5"
              fill="none"
              opacity={0.7 - i * 0.1}
            />
          ))}
          <text x="0" y="50" fontSize="8" fill="#64748b" fontFamily="monospace">
            Ondas S
          </text>
        </g>

        {/* Sondaje vertical con estratigrafía */}
        <g transform="translate(200, 20)">
          {/* Máquina sondajera */}
          <rect x="0" y="0" width="40" height="8" fill="#333333" rx="2" />
          <rect x="15" y="-5" width="10" height="5" fill="#e11d24" />
          <circle cx="8" cy="4" r="2" fill="#64748b" />
          <circle cx="32" cy="4" r="2" fill="#64748b" />

          {/* Varilla de sondaje */}
          <line x1="20" y1="8" x2="20" y2="120" stroke="#333333" strokeWidth="2" />

          {/* Estratos del suelo */}
          <rect x="5" y="20" width="30" height="25" fill="url(#stratum1)" stroke="#64748b" strokeWidth="0.5" />
          <rect x="5" y="45" width="30" height="30" fill="url(#stratum2)" stroke="#64748b" strokeWidth="0.5" />
          <rect x="5" y="75" width="30" height="35" fill="url(#stratum3)" stroke="#64748b" strokeWidth="0.5" />

          {/* Etiquetas de profundidad */}
          <text x="40" y="32" fontSize="6" fill="#64748b" fontFamily="monospace">
            0-2m
          </text>
          <text x="40" y="60" fontSize="6" fill="#64748b" fontFamily="monospace">
            2-5m
          </text>
          <text x="40" y="92" fontSize="6" fill="#64748b" fontFamily="monospace">
            5-8m
          </text>

          {/* SPT */}
          <text x="5" y="135" fontSize="7" fill="#e11d24" fontFamily="monospace" fontWeight="bold">
            SPT
          </text>
        </g>

        {/* Logo GeoEx en el talud */}
        <g transform="translate(400, 30)">
          {/* Talud */}
          <path d="M 0 80 L 120 20 L 120 80 Z" fill="#f1f5f9" stroke="#333333" strokeWidth="1.5" />

          {/* Superficie del talud con textura */}
          <path d="M 0 80 L 120 20" stroke="#64748b" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />

          {/* Logo GeoEx en el talud */}
          <foreignObject x="30" y="35" width="80" height="25">
            <div className="flex items-center justify-center h-full">
              <Image src="/images/logo.png" alt="GeoEx" width={70} height={18} className="object-contain" />
            </div>
          </foreignObject>

          {/* Líneas de estabilidad */}
          <path
            d="M 20 75 Q 60 45 100 25"
            stroke="#e11d24"
            strokeWidth="1"
            strokeDasharray="3,2"
            fill="none"
            opacity="0.6"
          />
        </g>

        {/* Fundación superficial */}
        <g transform="translate(580, 70)">
          {/* Suelo de fundación */}
          <rect x="0" y="20" width="80" height="40" fill="url(#stratum2)" stroke="#64748b" strokeWidth="0.5" />

          {/* Fundación */}
          <rect x="15" y="10" width="50" height="15" fill="#333333" rx="2" />
          <rect x="20" y="5" width="40" height="8" fill="#e11d24" rx="1" />

          {/* Líneas de carga */}
          <path d="M 35 0 L 35 5" stroke="#e11d24" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <path d="M 45 0 L 45 5" stroke="#e11d24" strokeWidth="2" markerEnd="url(#arrowhead)" />

          {/* Distribución de presiones */}
          <path d="M 15 25 Q 40 35 65 25" stroke="#333333" strokeWidth="1" strokeDasharray="2,1" fill="none" />

          <text x="10" y="75" fontSize="7" fill="#64748b" fontFamily="monospace">
            Fundación
          </text>
        </g>

        {/* Flecha para cargas */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#e11d24" />
          </marker>
        </defs>

        {/* Líneas de conexión conceptual */}
        <path
          d="M 150 80 Q 200 60 250 80"
          stroke="#64748b"
          strokeWidth="0.5"
          strokeDasharray="1,2"
          fill="none"
          opacity="0.3"
        />

        <path
          d="M 350 60 Q 400 40 450 60"
          stroke="#64748b"
          strokeWidth="0.5"
          strokeDasharray="1,2"
          fill="none"
          opacity="0.3"
        />

        {/* Título técnico */}
        <text x="400" y="150" fontSize="10" fill="#333333" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
          INGENIERÍA GEOTÉCNICA INTEGRAL
        </text>
      </svg>
    </div>
  )
}
