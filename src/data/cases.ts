import { CaseStudy } from '../types';
import { extraCasesData } from './extraCasesAndMurs';

export const casesData: CaseStudy[] = [
  {
    id: 1,
    caseNumber: '#01/57',
    title: 'Trading Alta Frecuencia',
    industry: 'Finanzas Cuantitativas / HFT Trading',
    block: 'Trinchera (Operación Base)',
    exitKey: {
      status: 'Archivado',
      criterion: 'Si talento está en burnt > capacidad de cerrar en pérdida, entonces salir del modelo hasta estabilización',
    },
    keyResources: [
      'Talento operador (umbral de burnout)',
      'Capital apalancado ($MM portco)',
      'Tiempo de supervivencia (30 años)',
      'Estructura de alta volatilidad',
      'Modelos de gestión de riesgo'
    ],
    affectedStructures: {
      types: ['Financiera', 'Humana'],
      financialDetails: 'Exposición y riesgo de quiebre de portco apalancada por no cerrar pérdidas a tiempo bajo alta volatilidad.',
      humanDetails: 'Agotamiento psíquico (burnt) del operador que destruye la autogestión y nubla el juicio de corte.'
    },
    elementalFractal: {
      initialCondition: 'Inexperiencia en mercados HF vs promesas de alto retorno.',
      bottleneck: 'Exceso de confianza en % retorno, sin estructura de alta volatilidad.',
      iteration: 'Integré múltiples gestiones de riesgo. Compiló 40% supervivencia. Falló 60% autogestión bajo cambio de volatilidad.',
      surgeonNote: 'Probar ideas no es juego de niños. Es fractal de errores multimillonarios.',
      icValue: 'Cortar pérdida inmediata en portcos apalancadas en volatilidad cuando el operador está quemado.'
    }
  },
  {
    id: 2,
    caseNumber: '#02/57',
    title: 'Mecánica Jr Bicicletas',
    industry: 'Servicios Técnicos / Movilidad Ligera & Talleres',
    block: 'Trinchera (Operación Base)',
    exitKey: {
      status: 'Delegado',
      criterion: 'Si expectativa > capacidad de análisis de compatibilidad, entonces parar acción y llamar a alguien sin ruido',
    },
    keyResources: [
      'Criterio de compatibilidad técnica',
      'Piezas/Repuestos externos provistos por cliente',
      'Tiempo de diagnóstico',
      'Agente externo neutral sin sesgo ("alguien sin ruido")'
    ],
    affectedStructures: {
      types: ['Humana', 'Financiera'],
      financialDetails: 'Quemar cash en piezas o desarrollos incompatibles impuestas por el cliente o CEO sin validación técnica.',
      humanDetails: 'Contaminación del análisis técnico por presión psicológica, ruido externo y expectativas forzadas.'
    },
    elementalFractal: {
      initialCondition: 'Cliente con expectativas altas vs posibilidad real de ejecución.',
      bottleneck: 'Cliente presiona, trae piezas por su lado, decide el "cómo".',
      iteration: 'Bajo presión omití compatibilidad pieza-bicicleta. Resultado: pieza no encaja.',
      surgeonNote: 'Pedir perspectiva no es negligencia. Es inteligencia común.',
      icValue: 'Saber parar antes de quemar cash cuando un CEO mete features o piezas incompatibles que quiebran el producto.'
    }
  },
  {
    id: 3,
    caseNumber: '#03/57',
    title: 'BPO Col-US',
    industry: 'BPO / Call Centers & Soporte de Clientes',
    block: 'Trinchera (Operación Base)',
    exitKey: {
      status: 'Éxito',
      criterion: 'Si emoción > capacidad de explicar data, entonces usar empatía y escuchar para encontrar data',
    },
    keyResources: [
      'Empatía operativa',
      'Tiempo de escucha activa (ventana de 30 seg)',
      'Data de consumo / Métricas de fuga de clientes',
      'Historial de tickets y acuerdos previos'
    ],
    affectedStructures: {
      types: ['Humana', 'Social'],
      humanDetails: 'Estrés agudo, frustración y enojo del cliente bloqueando su capacidad de razonamiento lógico.',
      socialDetails: 'Ruptura del canal comunicativo y de confianza entre el usuario y la empresa prestadora.'
    },
    elementalFractal: {
      initialCondition: 'Cliente 2 meses con factura subiendo, mismo consumo.',
      bottleneck: 'BPO solo da estadística probable. Imposible medir fuga real = cliente molesto.',
      iteration: 'Probé empatía para bajar estrés. Cliente había olvidado consejo anterior + subida de temperatura estado.',
      surgeonNote: 'Tomarse tiempo de escuchar es el recurso más valioso cuando el ruido tapa datos.',
      icValue: 'Recuperar CSAT y entender que cuando el script falla, el operador que sabe escuchar descubre la fuga que el Excel oculta.'
    }
  },
  {
    id: 4,
    caseNumber: '#04/57',
    title: 'Co-fundador Research Boutique',
    industry: 'Consultoría de Investigación / Venture Building',
    block: 'Gobernanza & Arquitectura (IP Propia)',
    exitKey: {
      status: 'Archivado',
      criterion: 'Si talento para OKRs > capacidad de liderazgo de sostener riesgo expectativas, entonces parar hasta regularse o cambiar rol',
    },
    keyResources: [
      'Talento táctico para OKRs',
      'Capacidad de lectura de lenguaje corporal/supervivencia (10 años)',
      'Runway de experimentación (10 ideas falladas)',
      'Cláusulas de market fit'
    ],
    affectedStructures: {
      types: ['Humana', 'Financiera'],
      financialDetails: 'Desperdicio de capital en 10 ciclos de producto sin Product-Market Fit por complacencia al ICP.',
      humanDetails: 'Incapacidad emocional del liderazgo de tolerar la incertidumbre y sostener el riesgo de expectativas.'
    },
    elementalFractal: {
      initialCondition: 'Sin empleo formal, 10 años leyendo lenguaje corporal por supervivencia.',
      bottleneck: '10 ideas falladas en market fit + expectativa de complacencia al ICP vs realidad.',
      iteration: '10 modificaciones de condiciones iniciales para ajustar cláusulas de market fit.',
      surgeonNote: 'Saber cuándo dejar ir proyecto/talento es base para adaptar sistema cuando fricción lo cambia.',
      icValue: 'Archivar a tiempo proyectos donde el liderazgo no sostiene el riesgo antes de desangrar el fondo.'
    }
  },
  {
    id: 5,
    caseNumber: '#05/57',
    title: 'Gobernanza UX',
    industry: 'Diseño de Producto / GovTech & UX Research',
    block: 'Gobernanza & Arquitectura (IP Propia)',
    exitKey: {
      status: 'Delegado',
      criterion: 'Si incentivos internos > satisfacer usuario, entonces priorización Pareto',
    },
    keyResources: [
      'Capacidad cognitiva del investigador',
      'Certificación Google UX',
      'Macro objetivos de producto',
      'Filtro de priorización 80/20 (Pareto)'
    ],
    affectedStructures: {
      types: ['Social', 'Humana'],
      humanDetails: 'Sobrecarga cognitiva y parálisis por miedo en el ejecutor, atrapado entre satisfacer a líderes o al usuario.',
      socialDetails: 'Choque de incentivos políticos internos frente al valor genuino entregado al usuario final.'
    },
    elementalFractal: {
      initialCondition: 'Recién certificado Google UX, buscando dejar de ser asistente de todos.',
      bottleneck: 'Sobrecarga cognitiva por incentivos cruzados vs liderazgo + miedo + valor usuario final.',
      iteration: 'Probé 4 técnicas priorización. Compiló solo 80/20 segmentando macro objetivos.',
      surgeonNote: 'Priorizar funcionalidad > status equipo es única forma de adaptarse en mercados de alta intensidad.',
      icValue: 'Cortar la parálisis burocrática interna delegando solo al 20% que mueve el 80% del valor de usuario.'
    }
  },
  {
    id: 6,
    caseNumber: '#06/57',
    title: 'Gobernanza Recursos',
    industry: 'Estrategia Corporativa / Gestión de Activos & IP',
    block: 'Gobernanza & Arquitectura (IP Propia)',
    exitKey: {
      status: 'Éxito',
      criterion: 'Si marcos tradicionales = pérdidas + recursos escasos, entonces construir marco transversal para absorber pérdidas',
    },
    keyResources: [
      'Recursos residuales y escasos',
      'Runway operativo',
      '50 marcos iterativos internos probados',
      'Estructura soberana transversal'
    ],
    affectedStructures: {
      types: ['Financiera', 'Social'],
      financialDetails: 'Pérdida continua de capital y runway provocada por frameworks teóricos que solo administran pérdidas.',
      socialDetails: 'Rigidez dogmática en la gobernanza institucional que impide canalizar la energía de los miembros.'
    },
    elementalFractal: {
      initialCondition: '3 Ocean Blues previos, faltaba estructura soberana para recursos residuales.',
      bottleneck: 'Frameworks académicos se adaptan a perder energía, no a absorberla transversal.',
      iteration: 'Prueba/error 50 marcos. 20% previos + 80% marcos iterativos internos nuevos.',
      surgeonNote: 'Invertir en innovación = asumir riesgo de no perder runway en recursos escasos.',
      icValue: 'Construir marcos propietarios que absorban el choque financiero en épocas de sequía de liquidez.'
    }
  },
  {
    id: 7,
    caseNumber: '#07/57',
    title: 'Gobernanza Fideicomisos Real Estate',
    industry: 'Real Estate / Bienes Raíces & Finanzas Estructuradas',
    block: 'Gobernanza & Arquitectura (IP Propia)',
    exitKey: {
      status: 'Delegado',
      criterion: 'Fractal riesgo disminuye donde inversor tiene control sin quitar soberanía al proceso',
    },
    keyResources: [
      'Propiedades latentes en cartera',
      'Estructura fiduciaria legal',
      'Capital de inversores institucionales',
      'Mecanismos transversales de confianza'
    ],
    affectedStructures: {
      types: ['Financiera', 'Social'],
      financialDetails: 'Iliquidez extrema y riesgo de pérdida total de capital por activos inmuebles congelados sin compradores.',
      socialDetails: 'Fricción contractual y desconfianza entre desarrolladores inmobiliarios e inversores de capital.'
    },
    elementalFractal: {
      initialCondition: 'Múltiples propiedades latentes bloqueadas por falta compradores transaccionales.',
      bottleneck: 'Riesgo desaparición > posibilidad recuperar capital.',
      iteration: 'Medios transversales de confianza. Fideicomiso como regulador precios + accionante legal inversores.',
      surgeonNote: 'Triangular riesgos = forma de cerrar contratos que mueren sin intención.',
      icValue: 'Desbloquear carteras de activos congelados otorgando gobernanza de control al LP sin frenar la ejecución.'
    }
  },
  {
    id: 8,
    caseNumber: '#08/57',
    title: 'Riesgo Latente Spam',
    industry: 'Ventas B2B / Outbound Marketing & Pipeline',
    block: 'Gobernanza & Arquitectura (IP Propia)',
    exitKey: {
      status: 'Éxito',
      criterion: 'Si mensaje adaptado no crea impacto, es alineación producto-ICP, no marketing',
    },
    keyResources: [
      'Matriz de alineación mensaje + intención',
      'Ventana de dolor del ICP',
      'Capacidad de entrega de correo / reputación de dominio',
      '5 variantes de copy por industria'
    ],
    affectedStructures: {
      types: ['Financiera', 'Social'],
      financialDetails: 'Quema de presupuesto en herramientas de prospección y personal de ventas sin tasa de retorno.',
      socialDetails: 'Desconexión profunda y ruido comunicacional entre la propuesta de valor y el dolor real del prospecto.'
    },
    elementalFractal: {
      initialCondition: '90% correos enviados sin apertura, sin match. Solo plantilla.',
      bottleneck: 'Ausencia matriz alineación mensaje + intención + ventana dolor ICP.',
      iteration: 'Test 5 variantes, mismo mensaje en pilares, copy por industria = 0 respuestas.',
      surgeonNote: 'Si no cierras deals sin alinear producto, marketing solo es crunch.',
      icValue: 'Evitar inyectar más presupuesto de marketing a productos que no tienen validada su resonancia con el cliente.'
    }
  },
  {
    id: 9,
    caseNumber: '#09/57',
    title: 'Cisnes Negros Liderazgo Paralizado',
    industry: 'Consultoría de Alta Dirección / Psicología Ejecutiva',
    block: 'Gobernanza & Arquitectura (IP Propia)',
    exitKey: {
      status: 'Éxito',
      criterion: 'Si variantes/opciones > 30:1 acciones tomadas, entonces busca quien fuerce exploración motriz',
    },
    keyResources: [
      'Entorno físico descontextualizado (biblioteca/librería)',
      'Mentor o par con camino recorrido ("quien ya lo caminó")',
      'Energía de focalización',
      'Capacidad de acción motriz'
    ],
    affectedStructures: {
      types: ['Humana'],
      humanDetails: 'Parálisis por análisis severa provocada por sobrecarga mental, bloqueo cognitivo y exceso de hipótesis.'
    },
    elementalFractal: {
      initialCondition: 'Retiro por sobrecarga 4 Ocean Blues, buscando horizonte para focalizar.',
      bottleneck: 'Todo fricciona contra patrón aprendido previamente.',
      iteration: 'Salir de parálisis análisis = salir con quien ya lo caminó a entorno donde se oculta lo obvio. Librería.',
      surgeonNote: 'Pedir ayuda con poder es diligencia. Evitas que ruido consuma lo que gestionas.',
      icValue: 'Desbloquear a fundadores paralisados sacándolos de la sala de reuniones a una ejecución táctica motriz.'
    }
  },
  {
    id: 10,
    caseNumber: '#10/57',
    title: 'Negociar en Desventaja',
    industry: 'Reclutamiento & RRHH / Selección BPO',
    block: 'Gobernanza & Arquitectura (IP Propia)',
    exitKey: {
      status: 'Fallido',
      criterion: 'Si capacidad abstraer < riesgo perder FOMO, entonces pedir tiempo fuera orgánico con partes',
    },
    keyResources: [
      'Capacidad de abstracción mental',
      'Escucha corporal somática',
      'Tiempo fuera orgánico de descompresión',
      'Oferta salarial / Condiciones del puesto'
    ],
    affectedStructures: {
      types: ['Humana', 'Social'],
      humanDetails: 'Activación del modo de supervivencia fisiológico, ceguera por FOMO y autonegociación a la baja por pánico.',
      socialDetails: 'Asimetría de poder que destruye la posibilidad de una relación laboral equitativa a largo plazo.'
    },
    elementalFractal: {
      initialCondition: 'Entrevista SDR BPO, presión por mejores CVs.',
      bottleneck: 'Estado supervivencia activo = no se escucha al cliente.',
      iteration: 'Intenté negociar acuerdo, pero agente se negoció a sí mismo antes de oferta.',
      surgeonNote: 'Escuchar al cuerpo cuando se nubla es mejor acuerdo para sostener empresa largo plazo.',
      icValue: 'Reconocer cuándo un operador o negociador está fisiológicamente incapacitado para cerrar una ronda o trato.'
    }
  },
  {
    id: 11,
    caseNumber: '#11/57',
    title: 'Democracia como Estructura',
    industry: 'Gobernanza Pública / Teoría de Sistemas Políticos',
    block: 'Guerra Política & Discurso',
    exitKey: {
      status: 'Delegado',
      criterion: 'Si capacidad individual elegir < sumatoria partes, entonces falta mecanismo control verificación',
    },
    keyResources: [
      'Voluntad individual de los ciudadanos',
      'Mecanismos de control y verificación electoral',
      'Canales directos de feedback comunitario',
      'Representatividad de los nodos'
    ],
    affectedStructures: {
      types: ['Social'],
      socialDetails: 'Monopolización de la voz pública por élites discursivas; ruptura de representatividad entre bases y gobernantes.'
    },
    elementalFractal: {
      initialCondition: 'Academia reconoce democracia como modelo actual de representatividad.',
      bottleneck: 'Población se ve representada en pocos que manejan discurso = votaciones.',
      iteration: 'Análisis relación voluntad individual vs capacidad decisión directa construcción comunitaria.',
      surgeonNote: 'Modelo que ignora sumatoria nodos como ruido, fracasa por ausencia feedback real.',
      icValue: 'En organizaciones grandes: si los empleados no tienen mecanismos de verificación, el discurso oficial encubre el colapso.'
    }
  },
  {
    id: 12,
    caseNumber: '#12/57',
    title: 'Derecha Política Tradicional',
    industry: 'Partidos Políticos / Legislación & Políticas Públicas',
    block: 'Guerra Política & Discurso',
    exitKey: {
      status: 'Archivado',
      criterion: 'Si gobernanza = mapa pasado no presente, entonces parar continuidad y dialogar nuevos nodos',
    },
    keyResources: [
      'Memoria y tradición histórica',
      'Juventud y nuevos nodos generacionales',
      '3 marcos de integración: negociación, brechas, resistencia',
      'Capacidad legislativa de adaptación'
    ],
    affectedStructures: {
      types: ['Social'],
      socialDetails: 'Promulgación de leyes desconectadas de las nuevas realidades culturales, generando fricción social y desacato.'
    },
    elementalFractal: {
      initialCondition: 'Tradición compacta mayoría juventud, esa juventud envejece.',
      bottleneck: 'Ausencia adaptación nuevas juventudes. Fricción creencias = leyes disonantes.',
      iteration: '3 marcos integración: negociación, brechas inherentes, resistencia/desgaste.',
      surgeonNote: 'Sistema que ignora memoria repite. Sistema que ignora feedback actual muere por fricción.',
      icValue: 'Identificar compañías que siguen aplicando un playbook obsoleto en mercados con nueva demografía.'
    }
  },
  {
    id: 13,
    caseNumber: '#13/57',
    title: 'Izquierda Marxista Anti-Marx',
    industry: 'Doctrinas Políticas / Planificación Colectiva',
    block: 'Guerra Política & Discurso',
    exitKey: {
      status: 'Archivado',
      criterion: 'Si voluntades individuales > objetivo común, entonces frenar y triangular a fundamentos evolutivos',
    },
    keyResources: [
      'Voluntades individuales descentralizadas',
      'Micro-pruebas comunitarias',
      'Objetivos comunes consensuados',
      'Fundamentos evolutivos de cooperación'
    ],
    affectedStructures: {
      types: ['Social', 'Humana'],
      humanDetails: 'Aplastamiento de la motivación y soberanía personal por el dogmatismo y ego del comité central.',
      socialDetails: 'Implosión de proyectos comunitarios debido a órdenes jerárquicas forzadas contra la naturaleza humana.'
    },
    elementalFractal: {
      initialCondition: 'Venezuela, Cuba, URSS fallaron dictadura del proletariado.',
      bottleneck: 'Dictadura proletariado = órdenes centralistas. Evolución humana = descentralizada.',
      iteration: 'Modelo híbrido teórico + micro prueba comunidad. Falló: ego de tener razón > adaptación.',
      surgeonNote: 'Duele reconocer que esfuerzo se pierde donde todo implosiona por pocos puntos.',
      icValue: 'Prevenir que el ego ideológico del fundador ahogue la creatividad y capacidad adaptativa de la empresa.'
    }
  },
  {
    id: 14,
    caseNumber: '#14/57',
    title: 'Clientelismo y Control del Discurso',
    industry: 'Campañas Electorales / Comunicación de Masas',
    block: 'Guerra Política & Discurso',
    exitKey: {
      status: 'Archivado',
      criterion: 'Político no actúa por bien común. Bien común debe incentivar ego estructural político',
    },
    keyResources: [
      'Discurso polarizante (Héroe vs Villano)',
      'Necesidades básicas de la pirámide de Maslow',
      'Incentivos de poder y presupuesto estatal',
      'Reglas del juego institucionales'
    ],
    affectedStructures: {
      types: ['Social', 'Financiera'],
      financialDetails: 'Desvío de fondos públicos hacia programas asistencialistas improductivos que no crean autosuficiencia.',
      socialDetails: 'Perpetuación de la dependencia y vulnerabilidad ciudadana mediante narrativas maniqueas.'
    },
    elementalFractal: {
      initialCondition: 'Políticos saturan masas discurso héroe/villano vs Maslow desprotegido por estado.',
      bottleneck: 'Modelo sostiene poder quien gobierna hasta llegue más fuerza, no homeostasis sistema.',
      iteration: 'Laboratorio necesidades vs incentivos egoístas políticos.',
      surgeonNote: 'Confiar en buena voluntad = castillo arena. Reglas claras = castillo que protege a todos.',
      icValue: 'Alinear incentivos: nunca esperar que un stakeholder actúe por caridad; su ganancia debe estar indexada al resultado.'
    }
  },
  {
    id: 15,
    caseNumber: '#15/57',
    title: 'Izquierda Progresista Colombia',
    industry: 'Partidos Políticos Nacionales / Gestión Pública',
    block: 'Guerra Política & Discurso',
    exitKey: {
      status: 'Delegado',
      criterion: 'Si éxito = líder decide todo, entonces cambiar a líder que delegue por estructura + medición',
    },
    keyResources: [
      'Memoria histórica traumática (UP, paramilitarismo)',
      'Datos empíricos vs sesgo ideológico',
      'Plataformas de votación y deliberación común',
      'Liderazgo institucional descentralizado'
    ],
    affectedStructures: {
      types: ['Social', 'Humana'],
      humanDetails: 'Paranoia y desconfianza enraizada por heridas históricas que ciega la toma de decisiones basada en datos.',
      socialDetails: 'Hipercentralización en la figura del líder mesiánico, creando cuellos de botella insolubles.'
    },
    elementalFractal: {
      initialCondition: 'Exterminio UP, paramilitarismo 2000s, ego dirigentes, discurso enemigo interno.',
      bottleneck: 'Fricción = no poner límites creencia propia vs datos evidentes + espacios ocultos.',
      iteration: 'Modelo proposición política votación común + selectividad semi-automatizada data vs sesgo.',
      surgeonNote: 'Buena voluntad muere si depende de visión de uno solo en momento tiempo-espacio.',
      icValue: 'Sustituir al fundador omnipresente por una estructura colegiada con KPIs antes de que estrangule la compañía.'
    }
  },
  {
    id: 16,
    caseNumber: '#16/57',
    title: 'Marxismo como Mecanismo Económico',
    industry: 'Macroeconomía / Planificación Centralizada',
    block: 'Macroeconomía & Modelos de Sistema',
    exitKey: {
      status: 'Delegado',
      criterion: 'Si modelo sostenible depende romper pilar evolutivo, por inercia humano se fragmenta hasta reset por pérdida energía',
    },
    keyResources: [
      'Pilar evolutivo básico (cazar-recolectar / incentivo al mérito)',
      'Energía y motivación laboral de la población',
      'Aparato burocrático estatal',
      'Canales de racionamiento de bienes esenciales'
    ],
    affectedStructures: {
      types: ['Financiera', 'Social', 'Humana'],
      financialDetails: 'Colapso de la producción agrícola e industrial por destrucción del cálculo económico y falta de precios.',
      humanDetails: 'Apatía generalizada, desnutrición y pérdida de dignidad al depender de una cuota estatal arbitraria.',
      socialDetails: 'Corrupción endémica en las cadenas de distribución estatal y fragmentación violenta del tejido ciudadano.'
    },
    elementalFractal: {
      initialCondition: 'Marx propone estado centralista que provee todo. Se implementa donde capitalismo falló en brechas sociales.',
      bottleneck: 'Burocratización estatal = control + aceptación hambre/igualdad. Necesidades individuales mueren. Bloquea pilar evolutivo cazar-recolectar.',
      iteration: 'Fragmentación análisis dónde acertó Venezuela y dónde falló total.',
      surgeonNote: 'Reset no es malo. Es sistema limpiándose antes de colapso total.',
      icValue: 'Reconocer sistemas que intentan sofocar el incentivo individual; inevitablemente requieren un reinicio traumático.'
    }
  },
  {
    id: 17,
    caseNumber: '#17/57',
    title: 'Capitalismo de Libre Mercado',
    industry: 'Economía de Mercado / Finanzas Corporativas',
    block: 'Macroeconomía & Modelos de Sistema',
    exitKey: {
      status: 'Delegado',
      criterion: 'Si recursos producción individual < distribución ganancias, entonces triangular beneficios antes colapso por incapacidad compra-acción',
    },
    keyResources: [
      'Capacidad productiva por rol individual',
      'Mecanismos de precios de mercado',
      'Masa de compradores (capacidad de compra-acción)',
      'Modelo cooperativo de ganancia neta'
    ],
    affectedStructures: {
      types: ['Financiera', 'Social'],
      financialDetails: 'Caída sistémica del consumo y estancamiento de ingresos cuando la renta del capital excede la capacidad de pago del consumidor.',
      socialDetails: 'Desigualdad extrema que genera inestabilidad cívica y erosión de la base laboral productiva.'
    },
    elementalFractal: {
      initialCondition: 'Mercado se "auto regula" en precios.',
      bottleneck: 'Mercado no mide como costo directo pérdida capacidad productiva por distribución ineficiente recursos.',
      iteration: 'Modelo técnico por producción/rol + ganancia neta estilo cooperativa. Capital bienestar común, moviliza masa producir-comerciar-disfrutar.',
      surgeonNote: 'Sistema que sacrifica base destruye sostenimiento, aunque MRR aumente.',
      icValue: 'No optimizar márgenes a costa de impovercer al ecosistema que alimenta el crecimiento a largo plazo.'
    }
  },
  {
    id: 18,
    caseNumber: '#18/57',
    title: 'Anarquismo como Medio Económico',
    industry: 'Autogestión Colectiva / Comunidades Autónomas',
    block: 'Macroeconomía & Modelos de Sistema',
    exitKey: {
      status: 'Delegado',
      criterion: 'Si necesidad < capacidad modelo regular satisfacción, entonces nace "hombre fuerte alimenta todos" hasta favorecer pocos',
    },
    keyResources: [
      'Capacidad productiva neta de la tierra',
      'Necesidades no satisfechas de Maslow',
      'Nodos comunitarios de votación',
      'Mecanismos no coactivos de orden'
    ],
    affectedStructures: {
      types: ['Social', 'Humana'],
      humanDetails: 'Surgimiento de caudillismo o autocracia violenta ante el vacío de orden estructurado.',
      socialDetails: 'Degeneración de asambleas horizontales en tiranías informales por falta de reglas de arbitraje.'
    },
    elementalFractal: {
      initialCondition: 'Evolución lleva autorregulación + destrucción comunidades. Fracaso capitalismo-marxismo + fracaso dejar tierra producir sola.',
      bottleneck: 'Regulación comunidades depende capacidad regular sin matar nodos, sin agente orden que controle todos.',
      iteration: 'Sistema votación propuestas + capacidad productiva neta + necesidades insatisfechas Maslow.',
      surgeonNote: 'Ausencia orden crea orden brutal. Regulación blanda muere por fricción.',
      icValue: 'Las estructuras descentralizadas sin reglas ejecutivas terminan capturadas por el operador más agresivo.'
    }
  },
  {
    id: 19,
    caseNumber: '#19/57',
    title: 'Capitalismo Consciente Latam',
    industry: 'Agroindustria Comunitaria / Impact Investing',
    block: 'Macroeconomía & Modelos de Sistema',
    exitKey: {
      status: 'Éxito',
      criterion: 'Si falta autonomía por menos poder individual, entonces pivotear a fundamentos sistema y tomar vía tangencial',
    },
    keyResources: [
      'Tierra fértil comunitaria',
      'Autonomía de campesinos y sembradores',
      'Redes logísticas alternativas (vías tangenciales)',
      'Proyecto común de bienestar compartido'
    ],
    affectedStructures: {
      types: ['Social', 'Financiera'],
      financialDetails: 'Pérdida de margen por intermediación forzosa y monopolios extractivos en la cadena de distribución rural.',
      socialDetails: 'Sometimiento de comunidades campesinas a poderes armados o patronales para poder comercializar cosechas.'
    },
    elementalFractal: {
      initialCondition: 'Comunidades Latam subordinadas a intervencionismo para comercializar/sembrar/crecer.',
      bottleneck: 'Dependencia actores no sacrificados pero beneficiarios del modelo vía uso fuerza.',
      iteration: 'Deconstrucción modelo síntoma a fundamento + tercerización proyecto común bienestar.',
      surgeonNote: 'Ruta tangencial al plan = camino que construye Ocean Blues. Despegas de ilusión fundacional para crear valor inicial.',
      icValue: 'Generar valor desintermediando cadenas tradicionales mediante cooperativas con soberanía logística.'
    }
  },
  {
    id: 20,
    caseNumber: '#20/57',
    title: 'Dictadura del Tecnicismo',
    industry: 'Ingeniería Organizacional / Productividad Industrial',
    block: 'Macroeconomía & Modelos de Sistema',
    exitKey: {
      status: 'Archivado',
      criterion: 'Si recursos ignorados > capacidad sostener producción largo plazo, entonces pivotear a métricas nodos + OKRs',
    },
    keyResources: [
      'Identidad e intuición de los operarios',
      'Métricas de salud de los nodos',
      'OKRs flexibles vs estándares mecánicos',
      'Capacidad motriz y anímica del equipo'
    ],
    affectedStructures: {
      types: ['Humana', 'Financiera'],
      financialDetails: 'Caída de rentabilidad a mediano plazo por rotación masiva de personal calificado y paradas de planta.',
      humanDetails: 'Deshumanización, despersonalización y tratamiento del ser humano como una pieza de maquinaria reemplazable.'
    },
    elementalFractal: {
      initialCondition: 'Productividad = sumatoria acciones sencillas que cualquiera hace.',
      bottleneck: 'Define identidad como ruido, no fundamental. Trata personas/ambientes con bisturí hierro helado.',
      iteration: 'Filtro generación producción por desgaste capacidad identificación persona-producto.',
      surgeonNote: 'Ignorar naturaleza nodos = trabajar con sesgos que friccionan estabilidad sistema.',
      icValue: 'Ninguna optimización de eficiencia mecánica es sostenible si agota la fisiología del equipo humano.'
    }
  },
  {
    id: 21,
    caseNumber: '#21/57',
    title: 'Guerra Rusia - Ucrania',
    industry: 'Geopolítica / Agrocommodities & Defensa',
    block: 'Inteligencia & Conflictos',
    exitKey: {
      status: 'Archivado',
      criterion: 'Si cuellos botella ajenos = plan, entonces planificar para cuando esos cuellos corten fricción propia',
    },
    keyResources: [
      'Infraestructura agroalimentaria mundial (grano ucraniano)',
      'Corredores logísticos del Mar Negro',
      'Alianzas militares OTAN/Rusia',
      'Ego y legado histórico de los líderes'
    ],
    affectedStructures: {
      types: ['Financiera', 'Social'],
      financialDetails: 'Disrupción de cadenas mundiales de fertilizantes, hiperinflación energética y encarecimiento del alimento global.',
      socialDetails: 'Pérdida masiva de vidas humanas, desplazamiento de millones de refugiados y militarización de fronteras.'
    },
    elementalFractal: {
      initialCondition: 'Tensión Rusia-OTAN + conflicto 2014 abierto. Ucrania = pilar agro internacional.',
      bottleneck: 'Ego supervivencia + legado Rusia y OTAN. Plan = tercerizar guerra vía cuellos botella ajenos.',
      iteration: 'Modelos clandestinos mafias como revolución interna. Laboratorio fallido.',
      surgeonNote: 'Modelo que depende saturar otros para resistir, fracasa al no absorber problema general.',
      icValue: 'No depender de dependencias operativas críticas que estén expuestas a fuegos cruzados entre gigantes.'
    }
  },
  {
    id: 22,
    caseNumber: '#22/57',
    title: 'Intervencionismo EEUU - Latam',
    industry: 'Relaciones Internacionales / Explotación de Recursos Naturales',
    block: 'Inteligencia & Conflictos',
    exitKey: {
      status: 'Archivado',
      criterion: 'Si capacidad lucha recursos < capacidad distribuir bienestar, entonces se puede negociar',
    },
    keyResources: [
      'Recursos estratégicos naturales (litio, petróleo, agua)',
      'Capacidad militar y arancelaria hegemónica',
      'Indicadores de bienestar interno descentralizado',
      'Poder de negociación diplomático bilateral'
    ],
    affectedStructures: {
      types: ['Social', 'Financiera'],
      financialDetails: 'Fuga de capitales, royalties leoninos y dependencia de precios fijados en mercados externos sin valor agregado local.',
      socialDetails: 'Precarización de la población local subordinada a políticas impuestas desde el exterior.'
    },
    elementalFractal: {
      initialCondition: 'Imperialismo EEUU sXIX-XX. Intervención políticas como neo colonias para explotar recursos.',
      bottleneck: 'Precarización países sacrificando bienestar descentralizado = discurso + vivencia anti Yanky.',
      iteration: 'Integración auto impulso por liberación recursos vía hitos bienestar interno. Estado ambiguo, depende política externa.',
      surgeonNote: 'Sistema sin voluntad ceder bienestar por estabilidad, muere eliminando sus nodos ejecutivos.',
      icValue: 'Negociar acuerdos de valor agregado antes que librar batallas frontales de suma cero contra monopolios establecidos.'
    }
  },
  {
    id: 23,
    caseNumber: '#23/57',
    title: 'Poderes Ocultos y Corrupción',
    industry: 'Medios de Comunicación / Grandes Grupos Económicos',
    block: 'Inteligencia & Conflictos',
    exitKey: {
      status: 'Archivado',
      criterion: 'Ningún sistema 100% estable. Si vacío productivo + pérdida energía sistema mayor, entonces triangular energía perdida como producción',
    },
    keyResources: [
      'Medios de comunicación masiva',
      'Grandes canales de distribución de grupos económicos',
      'Presupuesto público capturado',
      'Energía residual desaprovechada en el sistema'
    ],
    affectedStructures: {
      types: ['Social', 'Financiera'],
      financialDetails: 'Extracción rentista de capital que bloquea el surgimiento de competidores independientes e innovadores.',
      socialDetails: 'Manipulación de la opinión pública para encubrir la colusión entre corporaciones y políticos.'
    },
    elementalFractal: {
      initialCondition: 'Apariencia responsabilidad exclusiva políticos.',
      bottleneck: 'Movimiento real = medios comunicación x mayores productores. Minoría rezagada sin espacio.',
      iteration: 'Laboratorio creación local reutilización vías que macros tienen aunque políticos roben dinero.',
      surgeonNote: 'Sistema que depende 1 nodo general colapsa. Exceso poder = exceso fricción.',
      icValue: 'Aprovechar las tuberías e ineficiencias de los incumbentes para distribuir valor ágil sin entrar en su juego político.'
    }
  },
  {
    id: 24,
    caseNumber: '#24/57',
    title: 'Teorías Conspiranoicas y Paranoia Social',
    industry: 'Redes Sociales / Algoritmos de Atención & Salud Mental',
    block: 'Inteligencia & Conflictos',
    exitKey: {
      status: 'Baja',
      criterion: 'Si repetición creencia > capacidad absorción data, entonces no negocias ni arquitectas',
    },
    keyResources: [
      'Datos empíricos verificables',
      'Salud psicológica y serenidad de jóvenes',
      'Tiempo de exposición algorítmica',
      'Capacidad crítica de absorción de información'
    ],
    affectedStructures: {
      types: ['Humana', 'Social'],
      humanDetails: 'Ansiedad, depresión y fanatismo inducido en jóvenes incapaces de tolerar la ambigüedad del mundo moderno.',
      socialDetails: 'Disolución del consenso racional y fragmentación de tribus hostiles incapaces de dialogar.'
    },
    elementalFractal: {
      initialCondition: 'Presión social interna jóvenes sin capacidad sostener ambigüedad + desilusión vida.',
      bottleneck: 'Tratar jóvenes/niños como adultos con "verdad" de paranoia, no construcción sociedad.',
      iteration: 'Verificación 1:1 capacidad data vs data ignorada vs emoción vs repetición discurso.',
      surgeonNote: 'Pelear molinos = fuerzas otros bandos toman tus ciudades. Pierdes energía.',
      icValue: 'No debatir con clientes o equipos atrincherados en dogmas emocionales; cortar la interacción y reasignar recursos.'
    }
  },
  {
    id: 25,
    caseNumber: '#25/57',
    title: 'Soberanía de los Individuos',
    industry: 'Filosofía Organizacional / Autonomía Personal & Descentralización',
    block: 'Inteligencia & Conflictos',
    exitKey: {
      status: 'Delegado',
      criterion: 'Si dolor percibido < consumo recursos implementar, entonces sistema lo saca por defecto',
    },
    keyResources: [
      'Autonomía y voluntad personal',
      'Descompresores de fricción institucionales',
      'Energía psíquica vital del individuo',
      'Tracción comunitaria comprobada'
    ],
    affectedStructures: {
      types: ['Humana', 'Social'],
      humanDetails: 'Pérdida de la identidad y de la iniciativa individual por someterse a burocracias ajenas a sus necesidades reales.',
      socialDetails: 'Alienación ciudadana y desintegración del pacto social voluntario.'
    },
    elementalFractal: {
      initialCondition: 'Dependencia histórica reyes/leyes/autos de sistemas que no viven desangre individual.',
      bottleneck: 'Individuo pierde autonomía por satisfacer voluntades ajenas = fricción que explota tarde.',
      iteration: 'Modelo centralizado + descompresores transversales liberar fricción. Comunidades cansadas acoplan, nuevas rechazan.',
      surgeonNote: 'Jamás seas salvador de nadie. Sistema se autorregula. Focaliza donde hay tracción.',
      icValue: 'Construir herramientas que las personas adopten orgánicamente por aliviar su dolor, sin forzar adopciones corporativas.'
    }
  },
  {
    id: 26,
    caseNumber: '#26/57',
    title: 'Altos Recursos Pocos Habitantes',
    industry: 'Startups Financiadas / Automatización & DevTools',
    block: 'Reconstrucción Autónoma (Matriz X/Y)',
    exitKey: {
      status: 'Archivado',
      criterion: 'Si talento < capacidad absorción, entonces focaliza en crear herramientas para gestionar herramientas',
    },
    keyResources: [
      'Exceso de software y herramientas de pago',
      'Equipo nuclear pequeño (pocas manos)',
      'Meta-herramientas de orquestación interna',
      'Priorización Pareto de operación mínima'
    ],
    affectedStructures: {
      types: ['Financiera', 'Humana'],
      financialDetails: 'Despilfarro de capital en suscripciones SaaS redundantes y tooling sobredimensionado sin uso real.',
      humanDetails: 'Fatiga cognitiva por alternar entre decenas de plataformas que nadie domina completamente.'
    },
    elementalFractal: {
      initialCondition: 'Pocas manos para tantas herramientas en paralelo para producción mínima.',
      bottleneck: 'Mínima alineación talento vs operaciones.',
      iteration: 'Pareto + refocalizar cada recurso + nuevas herramientas que gestionan herramientas.',
      surgeonNote: 'Cambiar talento por herramientas quema base. Dejar sin herramientas quema producto final.',
      icValue: 'Evitar que una startup con mucho cash contrate herramientas sin tener el talento entrenado para operarlas.'
    }
  },
  {
    id: 27,
    caseNumber: '#27/57',
    title: 'Bajos Recursos Pocos Habitantes',
    industry: 'Microempresas Bootstrapped / Negocios de Subsistencia',
    block: 'Reconstrucción Autónoma (Matriz X/Y)',
    exitKey: {
      status: 'Archivado',
      criterion: 'Si recursos:beneficio 1:1 + aumento población, entonces diversificar lo que ignoras',
    },
    keyResources: [
      'Recursos base mínimos de subsistencia',
      'Población o equipo nuclear inicial',
      'Campos de producción no convencionales',
      'Redes de trueque y alianzas externas'
    ],
    affectedStructures: {
      types: ['Financiera', 'Social'],
      financialDetails: 'Vulnerabilidad ante cualquier shock externo al operar al límite del punto de equilibrio económico.',
      socialDetails: 'Ruptura del reparto igualitario al crecer el equipo sin haber aumentado la base de recursos previa.'
    },
    elementalFractal: {
      initialCondition: 'Estado igualitario beneficios-necesidades ambiente-humano.',
      bottleneck: 'Exceso dependencia población inicial vs recursos. Si crece población = decae calidad vida.',
      iteration: 'Tercerizar recursos omitidos para retornar en nuevos campos producción-comercio.',
      surgeonNote: 'Jamás diversifiques base sin formar base. Quemas árboles que dan comida mañana.',
      icValue: 'Consolidar el modelo de negocio nuclear antes de sumar headcount o expandir el catálogo comercial.'
    }
  },
  {
    id: 28,
    caseNumber: '#28/57',
    title: 'Alto Tiempo Poca Capacidad Nodos',
    industry: 'Educación Corporativa / Franquicias & Onboarding',
    block: 'Reconstrucción Autónoma (Matriz X/Y)',
    exitKey: {
      status: 'Archivado',
      criterion: 'Si nodos incapaces autonomía, entonces documenta e itera para forjar criterio',
    },
    keyResources: [
      'Holgura de tiempo operativo',
      'Arquitectura de sistemas robusta',
      'Documentación viva de criterio decisional',
      'Liderazgo formador vs directivo'
    ],
    affectedStructures: {
      types: ['Humana', 'Social'],
      humanDetails: 'Inseguridad y sumisión del personal subordinado, dependiente crónico de órdenes directas del fundador.',
      socialDetails: 'Peligro inminente de disolución organizacional ante la renuncia o ausencia del líder clave.'
    },
    elementalFractal: {
      initialCondition: 'Cisne negro estadística: baja capacidad + alta arquitectura = alto impacto nodos deficientes.',
      bottleneck: 'Dependencia liderazgo clave que fortalece arquitectura. Se va líder = muere sistema.',
      iteration: 'Formación pragmática + documentar para forjar criterio + integración capacidad.',
      surgeonNote: 'Jamás forjes criterio en nodos que solo quieren órdenes. Quiebran modelo x3 fricción.',
      icValue: 'No invertir en compañías que no tengan manuales de toma de decisiones replicables sin el fundador.'
    }
  },
  {
    id: 29,
    caseNumber: '#29/57',
    title: 'Bajo Tiempo Poca Capacidad Nodos',
    industry: 'HealthTech / Turnaround de Emergencia en Startups',
    block: 'Reconstrucción Autónoma (Matriz X/Y)',
    exitKey: {
      status: 'Archivado',
      criterion: 'Si recursos + tiempo < acción completa, entonces focaliza mercado que nadie quiere pero fundamenta demás',
    },
    keyResources: [
      'Runway de emergencia (3 meses)',
      'Equipo multidisciplinario incomunicado',
      'Mercado no atendido/despreciado por gigantes',
      'Efecto bola de nieve de supervivencia'
    ],
    affectedStructures: {
      types: ['Financiera', 'Humana'],
      financialDetails: 'Colapso inminente de caja por insolvencia en menos de 90 días si no se genera tracción inmediata.',
      humanDetails: 'Pánico, desorientación y parálisis en un equipo que no logra comunicarse con eficacia.'
    },
    elementalFractal: {
      initialCondition: 'Runway salud 3 meses. Problema que a McKinsey toma 12 meses. Equipo diverso sin comunicación.',
      bottleneck: 'Nada tiene posibilidad en modelos tradicionales.',
      iteration: 'Pareto supervivencia impacto. Deja rehacer rueda, solo cambia colina donde movilizas.',
      surgeonNote: 'Tiempo en contra + recursos límite = focaliza efecto bola nieve aunque arquitectura inicial caiga.',
      icValue: 'En situaciones de distress: ignorar la visión grandiose e ir tras el flujo de caja feo pero seguro.'
    }
  },
  {
    id: 30,
    caseNumber: '#30/57',
    title: 'Fricción Continua Tensión Nodos',
    industry: 'Scale-ups en Crisis / Gestión de Equipos de Producto',
    block: 'Reconstrucción Autónoma (Matriz X/Y)',
    exitKey: {
      status: 'Baja',
      criterion: 'Si cambio direcciones > PMV escalable, entonces focaliza en estandarizar decisiones',
    },
    keyResources: [
      'Estándar unificado de producto (PMV)',
      'Visión estratégica no volátil',
      'Capacidad de escucha del líder hacia la tropa',
      'Asesor externo con perspectiva neutra'
    ],
    affectedStructures: {
      types: ['Humana', 'Financiera'],
      financialDetails: 'Destrucción de valor de desarrollo acumulado por tirar a la basura sprints enteros en cada cambio de idea.',
      humanDetails: 'Cinismo, desmoralización profunda y fuga del mejor talento ante la falta de rumbo sostenido.'
    },
    elementalFractal: {
      initialCondition: 'Tensión continua equipos por cambios dirección continuos.',
      bottleneck: 'Nadie sostiene visión, estándar, razón de hacer esto.',
      iteration: 'Burocratizar decisiones a líder aparentemente fuerte que no escucha equipo.',
      surgeonNote: 'Si decides futuro org como decisor interno, asegúrate tener quien te muestre lo que ignoras.',
      icValue: 'Frenar de inmediato el financiamiento si el fundador pivotea cada dos semanas sin métricas de validación.'
    }
  },
  {
    id: 31,
    caseNumber: '#31/57',
    title: 'Liderazgo Fuerte Equipo Decaída',
    industry: 'Empresas Familiares / Relevo Generacional & Salud',
    block: 'Humanidad, Duelo & Legado',
    exitKey: {
      status: 'Archivado',
      criterion: 'Si capacidad transferencia < criterio aprendido, entonces focaliza actividades forjan criterio y luego dejas conocimiento',
    },
    keyResources: [
      'Décadas de experiencia y criterio tácito acumulado',
      'Salud vital de los fundadores sénior',
      'Actividades experienciales de forja de criterio',
      'Fórmula de fricción estructural cuantificada'
    ],
    affectedStructures: {
      types: ['Humana', 'Financiera'],
      financialDetails: 'Pérdida de millones en contratos y reputación corporativa cuando los decisores clave fallecen o enferman.',
      humanDetails: 'Deterioro físico y cognitivo terminal en los pilares históricos de la organización.'
    },
    elementalFractal: {
      initialCondition: 'Equipo salud decaída meses. Se sabía antes de iniciar proceso.',
      bottleneck: 'Experiencia + experticia depende de miembros que están muriendo.',
      iteration: 'Transferencia conocimiento principal. Falló transferencia criterio forjado décadas.',
      surgeonNote: 'Jamás te confíes de un PDF para formar generación. Focaliza donde fallan.',
      icValue: 'Transferir la intuición y el criterio ante el error, no manuales teóricos inertes que nadie aplica en crisis.'
    }
  },
  {
    id: 32,
    caseNumber: '#32/57',
    title: 'La Muerte de mi Pareja',
    industry: 'Liderazgo Fundador / Salud Mental & Crisis Personal',
    block: 'Humanidad, Duelo & Legado',
    exitKey: {
      status: 'Archivado',
      criterion: 'Si estás demasiado ocupado para escuchar equipo, entonces delega para dejar de cargar todo y quemar support',
    },
    keyResources: [
      'Escucha humana presente',
      'Soporte terapéutico especializado real',
      'Energía psíquica vital del líder',
      'Red de delegación operativa en el war room'
    ],
    affectedStructures: {
      types: ['Humana', 'Social'],
      humanDetails: 'Trastornos psicológicos graves sin soporte efectivo, desbordamiento del líder y desenlace fatal de la pareja.',
      socialDetails: 'Destrucción de la red primaria afectiva y quema de todo el equipo de apoyo por aislamiento e incapacidad de escuchar.'
    },
    elementalFractal: {
      initialCondition: 'Trastornos psicológicos sin soporte terapéutico que realmente funcione.',
      bottleneck: 'Líder saturado operaciones + war room. Por energía no puede analizar todo.',
      iteration: 'Buscaron visión sobre todo + escucha. Falló: solo dio data, no escucha.',
      surgeonNote: 'Jamás superpongas KPIs sobre humanidad. Pierdes equipo = no hay vuelta atrás.',
      icValue: 'El factor de quiebre absoluto: si el líder no tiene capacidad de escucha humana, el sistema colapsa sin importar el capital.'
    }
  },
  {
    id: 33,
    caseNumber: '#33/57',
    title: 'Pérdida Comunicación Sincrónica',
    industry: 'Ciberseguridad / Operaciones Clandestinas Legales & Telecomms',
    block: 'Humanidad, Duelo & Legado',
    exitKey: {
      status: 'Éxito',
      criterion: 'Si capacidad conectar info medios tradicionales < necesidad real, entonces pivotea estructuras no-oficiales sin perder legalidad',
    },
    keyResources: [
      'Mensajes encriptados de alta longitud',
      'Esteganografía mediante títulos de videos desconexos',
      'Canales de comunicación alternativos legales',
      'Integridad de los miembros sobrevivientes'
    ],
    affectedStructures: {
      types: ['Social', 'Humana'],
      humanDetails: 'Sentimiento de aislamiento y vulnerabilidad tras la pérdida de la mitad del equipo nuclear.',
      socialDetails: 'Bloqueo de los canales habituales de coordinación y necesidad de operar bajo el radar.'
    },
    elementalFractal: {
      initialCondition: '50% equipo diluido por ciclo vital terminado.',
      bottleneck: 'Mecanismo subir información sincrónica sin conexión oficial.',
      iteration: 'Encriptación mensajes alta longitud + descifrado por títulos videos desconexos.',
      surgeonNote: 'Jamás uses sistema ilegal para proteger info. Usa la ley para que no identifiquen cómo encriptas.',
      icValue: 'Garantizar redundancia en los canales de mando e información crítica para que la operación sobreviva a apagones.'
    }
  },
  {
    id: 34,
    caseNumber: '#34/57',
    title: 'Negación Continua de lo que Sucede',
    industry: 'Banca Corporativa / Entornos de Alta Confidencialidad & NDA',
    block: 'Humanidad, Duelo & Legado',
    exitKey: {
      status: 'Archivado',
      criterion: 'Si capacidad sostener presión operativa < integración individual, entonces abre espacio salud retorne como consecuencia',
    },
    keyResources: [
      'Cláusulas absolutas de estricta confidencialidad',
      'Micro-salidas personales de descompresión',
      'Espacios de mindfulness a nivel enterprise',
      'Comunidades externas de empatía'
    ],
    affectedStructures: {
      types: ['Humana', 'Social'],
      humanDetails: 'Disociación severa y agotamiento nervioso por tener que sostener dos vidas paralelas bajo secreto estricto.',
      socialDetails: 'Cultura corporativa de censura donde los problemas evidentes son negados por decreto legal.'
    },
    elementalFractal: {
      initialCondition: 'Cláusulas absolutas + confidencialidad extrema + estado supervivencia continua.',
      bottleneck: 'Energía drenada equipo en disonancia sostener dos vidas paralelas.',
      iteration: 'Micro salidas personales + focalización remota mindfulness nivel enterprise.',
      surgeonNote: 'Dar espacio conexión equipo-comunidades similares, más allá operaciones, absorbe disonancia.',
      icValue: 'Despresurizar periódicamente a los equipos sometidos a acuerdos de silencio rigurosos antes de que implosionen.'
    }
  },
  {
    id: 35,
    caseNumber: '#35/57',
    title: 'Vacío del Todo como Fundamento Próxima Generación',
    industry: 'Gestión del Conocimiento / Innovación Institucional',
    block: 'Humanidad, Duelo & Legado',
    exitKey: {
      status: 'Éxito',
      criterion: 'Si sistema depende generaciones pasadas, entonces necesitas forjar laboratorios forjen siguientes',
    },
    keyResources: [
      'Documentos pragmáticos de cicatrices y quiebres',
      'Laboratorios de entrenamiento de criterio por inercia',
      'Espacios vacíos para nuevas soluciones',
      'Nueva generación de operadores'
    ],
    affectedStructures: {
      types: ['Social', 'Humana'],
      humanDetails: 'Preservación de la resiliencia y el discernimiento en la nueva generación sin exigirles repetir el trauma original.',
      socialDetails: 'Trascendencia institucional que evita que la organización perezca junto con sus fundadores.'
    },
    elementalFractal: {
      initialCondition: 'Equipo documentó criterio abstracción decisional + donde fricción quemó todo.',
      bottleneck: 'En mayoría sistemas, muere generación completa = muere sistema.',
      iteration: 'Documentos pragmáticos + laboratorios forjan criterio por inercia, no playbook directo.',
      surgeonNote: 'En toda org debe haber alguien que construya pilares para otros, no solo internos.',
      icValue: 'Convertir la experiencia de crisis pasadas en campos de simulación donde los futuros líderes aprendan sin quebrar el negocio.'
    }
  },
  {
    id: 36,
    caseNumber: '#36/57',
    title: 'Perfilar con Datos Incompletos',
    industry: 'Servicios Jurídicos / Asistencia Legal & Bufetes',
    block: 'Buffers Técnicos & Operativos',
    exitKey: {
      status: 'Éxito',
      criterion: 'Si expectativa tácita > acuerdo, entonces negocia condiciones de entrega',
    },
    keyResources: [
      'Acuerdos explícitos de entrega',
      'Plantilla inicial de recopilación de caso',
      'Plazo de respuesta del cliente (15 días)',
      'Claridad en el alcance del rol junior'
    ],
    affectedStructures: {
      types: ['Humana', 'Financiera'],
      financialDetails: 'Costes de oportunidad y horas facturables desperdiciadas rehaciendo escritos con información deficiente.',
      humanDetails: 'Ansiedad del asistente novato por demostrar valía, asumiendo culpas por demoras ajenas al proceso.'
    },
    elementalFractal: {
      initialCondition: 'Abogado toma el caso, mi primer día como asistente legal, se me pasa plantilla y datos iniciales del caso.',
      bottleneck: 'La información está incompleta, cliente tarda al menos 15 días, asistente frustrado por querer demostrar posición.',
      iteration: 'Dialogar acuerdos explícitos, en vez de expectativas tácitas.',
      surgeonNote: 'Si te auto negocias, vas a condenar el proceso por condiciones que son variables e incluso removibles.',
      icValue: 'Instituir reglas claras de entrada: no iniciar sprints ni entregables hasta que los inputs mínimos estén firmados.'
    }
  },
  {
    id: 37,
    caseNumber: '#37/57',
    title: 'Seguir Datos sin Recursos Enterprise',
    industry: 'User Research / Inteligencia de Conducta & Data Mining',
    block: 'Buffers Técnicos & Operativos',
    exitKey: {
      status: 'Baja',
      criterion: 'Si capacidad de seguimiento < cantidad de objetivos a seguir, entonces focalizar en las relaciones de mayor impacto',
    },
    keyResources: [
      'Ratio de seguimiento contextual (70:1)',
      '3 personas clave dentro de la muestra',
      '5 interacciones comunes de soporte',
      'Métricas manuales de frecuencia y repetición'
    ],
    affectedStructures: {
      types: ['Financiera', 'Humana'],
      financialDetails: 'Imposibilidad financiera de pagar software analítico corporativo o contratar equipos masivos de investigación.',
      humanDetails: 'Agotamiento analítico por intentar abarcar una muestra desproporcionada con herramientas artesanales.'
    },
    elementalFractal: {
      initialCondition: 'Proceso de investigación social y seguimiento en inteligencia de conducta de usuarios y ICPs.',
      bottleneck: 'Límite de capacidad en código, ingeniería social y límite de equipo para un seguimiento contextual 70:1.',
      iteration: 'Focalización a tres personas claves, y 5 interacciones comunes donde van a requerir soporte, medir repeticiones.',
      surgeonNote: 'Si lees los patrones correctos, el seguimiento se itera en el tiempo.',
      icValue: 'Extraer insights profundos de clientes observando micro-conductas de unos pocos usuarios en vez de gastar en data lakes.'
    }
  },
  {
    id: 38,
    caseNumber: '#38/57',
    title: 'Sandbox Financiero Multicrisis',
    industry: 'Fintech / Gestión de Portafolio & Reestructuración',
    block: 'Buffers Técnicos & Operativos',
    exitKey: {
      status: 'Éxito',
      criterion: 'Si capacidad de adaptación del fractal > 20% tienes modelo iterativo para múltiples generaciones',
    },
    keyResources: [
      '12 crisis paralelas en 12 war rooms',
      'Plantilla fractal estructurada',
      'Mecanismos de auto-medición descentralizada (self-measure)',
      'Tasa de adaptación fractal (>20%)'
    ],
    affectedStructures: {
      types: ['Financiera', 'Social'],
      financialDetails: 'Pérdidas cruzadas y descontrol de tesorería causadas por abordar múltiples frentes de fuego sin métricas comunes.',
      socialDetails: 'Fragmentación total del equipo, compitiendo entre silos por la atención y liquidez del comité central.'
    },
    elementalFractal: {
      initialCondition: '12 crisis paralelas, con 12 war rooms, con doce mercados distintos, equipo totalmente fragmentado.',
      bottleneck: 'Cantidad de crisis paralelas al sistema inicial, múltiples frentes de batalla para la misma estructura, medición fragmentada.',
      iteration: 'Aceptación de la realidad, e integración del self measure de cada frente / plantilla fractal estructurada.',
      surgeonNote: 'Focaliza el impacto y el dinero llegará, focaliza el dinero y te convertirás en un commodity más.',
      icValue: 'Dar a cada unidad de negocio una plantilla unificada para que resuelvan su propia crisis sin saturar al directorio.'
    }
  },
  {
    id: 39,
    caseNumber: '#39/57',
    title: 'Carne o Parece Carne',
    industry: 'FoodTech / Alimentos Alternativos & Marketing de Producto',
    block: 'Buffers Técnicos & Operativos',
    exitKey: {
      status: 'Archivado',
      criterion: 'Si debate interno > feedback externo, entonces pivotea a validación mercado inmediata',
    },
    keyResources: [
      'Runway del producto',
      'Test A/B en el mercado real',
      'Feedback transaccional del comprador final',
      'Energía del equipo comercial'
    ],
    affectedStructures: {
      types: ['Financiera', 'Humana'],
      financialDetails: 'Quema inútil de meses de salario y presupuesto de lanzamiento discutiendo términos conceptuales en el directorio.',
      humanDetails: 'Frustración y hastío de los creativos y técnicos atrapados en debates semánticos abstractos.'
    },
    elementalFractal: {
      initialCondition: 'Cliente discute definición producto. Carne vs imitación. War room paralizado por semántica.',
      bottleneck: 'Discusión concepto > validación mercado. Equipo gasta energía en definir, no vender.',
      iteration: 'Test A/B brutal. Saca producto al mercado con ambas definiciones. Deja que cliente final decida.',
      surgeonNote: 'El mercado define qué es carne. No el board. Discutir definiciones quema runway.',
      icValue: 'Terminar cualquier discusión bizantina de directorio lanzando un test A/B directo al bolsillo del usuario.'
    }
  },
  {
    id: 40,
    caseNumber: '#40/57',
    title: 'Escuela Actuación: Patrón hasta Absorción',
    industry: 'Capacitación Operativa / Performance & Hábitos Motores',
    block: 'Buffers Técnicos & Operativos',
    exitKey: {
      status: 'Éxito',
      criterion: 'Si entendimiento > ejecución, entonces reduce a micro-patrón repetible hasta reflejo',
    },
    keyResources: [
      'Capacidad neuromotora del personal',
      'Drills diarios intensivos de 15 minutos',
      'Micro-patrones descompuestos',
      'Sistema de retroalimentación inmediata'
    ],
    affectedStructures: {
      types: ['Humana'],
      humanDetails: 'Brecha frustrante entre la comprensión intelectual de un nuevo proceso y la incapacidad fisiológica de ejecutarlo en vivo.'
    },
    elementalFractal: {
      initialCondition: 'Equipo no internaliza proceso nuevo. Sabe teoría pero cuerpo rechaza ejecución.',
      bottleneck: 'Capacidad cognitiva < capacidad motora. Entienden pero no hacen.',
      iteration: 'Repetición deliberada del patrón hasta que sistema nervioso lo absorbe. Drill diario 15 min.',
      surgeonNote: 'Criterio no se enseña. Se entrena. El cuerpo aprende antes que la mente acepta.',
      icValue: 'No enviar al equipo a cursos teóricos; diseñar simulacros de 15 minutos diarios hasta que la respuesta sea un acto reflejo.'
    }
  },
  {
    id: 41,
    caseNumber: '#41/57',
    title: 'Stanislavsky: Disociación Rompe Personaje',
    industry: 'Coaching Ejecutivo / Liderazgo Organizacional',
    block: 'Buffers Técnicos & Operativos',
    exitKey: {
      status: 'Baja',
      criterion: 'Si disociación > conexión, entonces líder abandona personaje hasta reconectar con equipo',
    },
    keyResources: [
      'Autenticidad de la persona real',
      'Técnica Stanislavsky inversa',
      'Confianza y lealtad del equipo operativo',
      'Claridad sobre las motivaciones intrínsecas'
    ],
    affectedStructures: {
      types: ['Humana', 'Social'],
      humanDetails: 'Agotamiento psíquico del fundador por mantener una fachada ficticia de infalibilidad y dureza.',
      socialDetails: 'El equipo percibe la falsedad, pierde el respeto hacia la visión y se repliega a cumplir órdenes pasivamente.'
    },
    elementalFractal: {
      initialCondition: 'Líder actúa rol "jefe fuerte" pero disocia de equipo real. Brecha personaje-persona.',
      bottleneck: 'Equipo siente falsedad. Pierde confianza. Siguen órdenes, no visión.',
      iteration: 'Técnica Stanislavsky inversa. Líder sale personaje, conecta con motivación real, re-entra auténtico.',
      surgeonNote: 'Liderazgo actuado quiebra en crisis. Solo autenticidad sostiene presión. Equipo detecta máscara.',
      icValue: 'Exigir autenticidad radical en fundadores; los líderes que actúan de CEO pierden el apoyo de su equipo en la primera tormenta.'
    }
  },
  {
    id: 42,
    caseNumber: '#42/57',
    title: 'Quemar Documentación para Liberar Nodos',
    industry: 'Arquitectura de Información / Operaciones Ágiles',
    block: 'Buffers Técnicos & Operativos',
    exitKey: {
      status: 'Éxito',
      criterion: 'Si peso documentación > velocidad decisión, entonces quema para liberar capacidad cognitiva',
    },
    keyResources: [
      'Capacidad cognitiva de los operadores',
      'Regla estricta de 90 días de descarte',
      '20% de documentación viva y activa',
      'Velocidad de toma de decisiones'
    ],
    affectedStructures: {
      types: ['Humana', 'Social'],
      humanDetails: 'Parálisis y sobrecarga por tener que consultar manuales obsoletos de cientos de páginas.',
      socialDetails: 'Cultura burocrática del encubrimiento mediante SOPs que nadie lee pero todos usan de escudo ante errores.'
    },
    elementalFractal: {
      initialCondition: 'Nodos saturados de docs, playbooks, SOPs obsoletos. Nadie lee, todos cargan peso.',
      bottleneck: 'Conocimiento acumulado bloquea decisión rápida. Miedo a borrar "por si acaso".',
      iteration: 'Ritual quema docs: archiva 80%, deja 20% vivo. Regla: si no se usó en 90 días, muere.',
      surgeonNote: 'Documentación muerta mata nodos vivos. Menos docs = más ejecución. Confía en criterio, no PDFs.',
      icValue: 'Purgar el 80% de playbooks obsoletos para que el equipo recupere agilidad decisoria en el terreno.'
    }
  },
  {
    id: 43,
    caseNumber: '#43/57',
    title: 'Marketing P2P con Recursos Cero',
    industry: 'Growth Hacking / Mensajería Peer-to-Peer & Viralidad',
    block: 'Buffers Técnicos & Operativos',
    exitKey: {
      status: 'Éxito',
      criterion: 'Si CAC tradicional > LTV inicial, entonces diseña producto que se distribuye solo vía mensaje',
    },
    keyResources: [
      'Presupuesto de publicidad ($0)',
      'Bucle viral de recomendación (1 usuario atrae a 3)',
      'Utilidad inmediata del mensaje como micro-herramienta',
      'Canales peer-to-peer orgánicos'
    ],
    affectedStructures: {
      types: ['Financiera', 'Social'],
      financialDetails: 'Inviabilidad económica provocada por costos de adquisición (CAC) superiores al valor de vida del cliente (LTV).',
      socialDetails: 'Aprovechamiento de la confianza interpersonal entre pares para propagar una solución útil sin intermediarios.'
    },
    elementalFractal: {
      initialCondition: '0 presupuesto ads. Necesidad llegar mercado internacional día 1.',
      bottleneck: 'Canales tradicionales bloqueados. Sin reach, sin brand, sin dinero.',
      iteration: 'Mensajería P2P + valor granular + loops referencia. Cada usuario trae 3. Mensaje = herramienta útil.',
      surgeonNote: 'Cuando dinero = 0, diseño = canal. Producto debe cargar su propia distribución.',
      icValue: 'Obligar a productos sin runway a diseñar su propio canal de crecimiento orgánico antes de autorizar pauta publicitaria.'
    }
  },
  {
    id: 44,
    caseNumber: '#44/57',
    title: 'Auditoría Inversa de Huecos Negros de Data',
    industry: 'Business Intelligence / Shadow Operations & Auditoría',
    block: 'Buffers Técnicos & Operativos',
    exitKey: {
      status: 'Archivado',
      criterion: 'Si % decisiones sin data > 40%, entonces pivotear a mapear ausencias antes de optimizar KPIs',
    },
    keyResources: [
      '60% de decisiones críticas no registradas',
      'Entrevistas a operadores de primera línea (shadow ops)',
      'Dashboards y métricas formales',
      'Mapa de puntos ciegos institucionales'
    ],
    affectedStructures: {
      types: ['Financiera', 'Social'],
      financialDetails: 'Quiebra técnica inesperada provocada por fugas y compromisos adquiridos en la sombra fuera de los libros contables.',
      socialDetails: 'Cultura de simulación corporativa donde los directores se engañan con paneles de control impecables.'
    },
    elementalFractal: {
      initialCondition: 'Excel lleno de KPIs verdes. Negocio igual quiebra. Data mide lo irrelevante.',
      bottleneck: '60% decisiones se toman sin registro. Huecos negros matan más que métricas malas.',
      iteration: 'Auditar ausencias. Mapear qué NO se mide pero decide el día a día. Entrevistas shadow ops.',
      surgeonNote: 'Mide lo que no mides. El peligro no está en el dashboard. Está fuera de él.',
      icValue: 'En due diligence: no mirar solo el dashboard oficial; entrevistar a los operadores que toman decisiones sin registrar.'
    }
  },
  {
    id: 45,
    caseNumber: '#45/57',
    title: 'Contratos como Código de Fricción',
    industry: 'LegalTech / Negociación Contractual B2B',
    block: 'Buffers Técnicos & Operativos',
    exitKey: {
      status: 'Éxito',
      criterion: 'Si tiempo legalización > tiempo ejecución, entonces simplifica contrato a lógica mínima viable',
    },
    keyResources: [
      'Tiempo de cierre de ventas (45 días vs 48 horas)',
      'Contrato de 1 página de principios rectores',
      'Anexos técnicos estructurados como funciones de software (input, output, excepción)',
      'Confianza mutua entre firmantes'
    ],
    affectedStructures: {
      types: ['Financiera', 'Social'],
      financialDetails: 'Pérdida de ingresos recurrentes y estancamiento de caja por transacciones que mueren por desgaste legal.',
      socialDetails: 'Desconfianza corrosiva alimentada por cláusulas defensivas redactadas para prever litigios improbables.'
    },
    elementalFractal: {
      initialCondition: 'Legal toma 45 días. Deal muere por fricción contractual. 20 páginas por acuerdo simple.',
      bottleneck: 'Cada cláusula = línea código que genera fricción o liquidez. Abogados maximizan riesgo cero.',
      iteration: 'Contrato 1 página principios + anexos técnicos. Cláusulas como funciones: input, output, excepción.',
      surgeonNote: 'Contrato perfecto que nadie firma vale 0. Contrato 80% bueno firmado hoy vale millones.',
      icValue: 'Transformar el departamento legal de centro de bloqueo a motor de liquidez mediante acuerdos de principios de 1 página.'
    }
  },
  {
    id: 46,
    caseNumber: '#46/57',
    title: 'Compresión de Decisión a 2 Minutos',
    industry: 'War Rooms / Toma de Decisiones Estratégicas',
    block: 'Buffers Técnicos & Operativos',
    exitKey: {
      status: 'Éxito',
      criterion: 'Si decisión > 2min sin data nueva, entonces decide con 70% info. Velocidad > perfección',
    },
    keyResources: [
      'Tiempo de deliberación (ventana de 2 minutos)',
      '3 micro-decisiones escalonadas de 40 segundos',
      'Umbral del 70% de información suficiente',
      'Energía decisoria del equipo directivo'
    ],
    affectedStructures: {
      types: ['Humana', 'Financiera'],
      financialDetails: 'Pérdida de ventanas de arbitraje y costo de oportunidad millonario por indecisión prolongada.',
      humanDetails: 'Agotamiento extremo y ansiedad colectiva al estirar debates en círculos buscando certeza absoluta.'
    },
    elementalFractal: {
      initialCondition: 'War room paralizado. Decisiones tardan 3 horas. Análisis infinito, acción cero.',
      bottleneck: 'Miedo decidir con 70% info. Buscan 100% certeza que llega tarde.',
      iteration: 'Regla 2-minutos. >2min se descompone en 3 decisiones 40seg. Si no hay data nueva, decide.',
      surgeonNote: 'Decisión mala rápida > decisión perfecta tarde. El mercado no espera tu análisis completo.',
      icValue: 'Imponer límites de tiempo rígidos en war rooms para desbloquear la ejecución con certeza imperfecta.'
    }
  },
  {
    id: 47,
    caseNumber: '#47/57',
    title: 'Redundancia Asimétrica de Nodos',
    industry: 'Diseño Organizacional / Células de Alto Rendimiento',
    block: 'Buffers Técnicos & Operativos',
    exitKey: {
      status: 'Archivado',
      criterion: 'Si pérdida 1 nodo > 30% capacidad crítica, entonces rediseña roles a redundancia asimétrica',
    },
    keyResources: [
      'Capacidad crítica del equipo de 4 personas',
      'Estructura de 3 sombreros por nodo (1 sombrero crítico + 2 sombreros intercambiables)',
      'Cross-training práctico continuo',
      'Capacidad de continuidad operativa'
    ],
    affectedStructures: {
      types: ['Humana', 'Social'],
      humanDetails: 'Estrés desmedido en personas clave que sienten que no pueden enfermarse ni descansar sin arruinar la empresa.',
      socialDetails: 'Fragilidad de la célula de trabajo donde la partida de un integrante colapsa el 60% de las funciones.'
    },
    elementalFractal: {
      initialCondition: 'Equipo 4 personas. Cada uno hace todo. Pierdes 1 nodo = colapsa 60% operación.',
      bottleneck: 'Redundancia simétrica quema recursos. Todos saben todo pero nadie es insustituible.',
      iteration: '1 nodo = 3 sombreros. Solo 1 sombrero crítico no negociable. Otros 2 intercambiables cross-training.',
      surgeonNote: 'No dupliques personas. Duplica funciones críticas. El resto que fluya.',
      icValue: 'Asegurar continuidad en equipos pequeños sin duplicar la nómina salarial innecesariamente.'
    }
  },
  {
    id: 48,
    caseNumber: '#48/57',
    title: 'Filtro Señal vs Ruido de Ideas',
    industry: 'Innovación & Gestión de Producto / Sprints de Desarrollo',
    block: 'Buffers Técnicos & Operativos',
    exitKey: {
      status: 'Éxito',
      criterion: 'Si idea nueva no pasa 2/3 filtros, entonces es ruido. Solo 1 idea nueva por sprint',
    },
    keyResources: [
      'Capacidad de foco del equipo de producto',
      '3 filtros estrictos: 1. Mata fricción actual, 2. Crea recurso nuevo, 3. Sobrevive sin ti',
      'Criterio implacable para decir "No"',
      'Runway de desarrollo tecnológico'
    ],
    affectedStructures: {
      types: ['Humana', 'Financiera'],
      financialDetails: 'Dilución del capital en decenas de proyectos a medio terminar que nunca llegan a monetizarse.',
      humanDetails: 'Desmoralización y sobrecarga por el síndrome del objeto brillante del fundador que cambia prioridades cada lunes.'
    },
    elementalFractal: {
      initialCondition: 'War room inundado ideas nuevas cada sprint. 0 capacidad ejecutar. Shiny object syndrome.',
      bottleneck: 'Toda idea entra. Ninguna sale. Equipo disperso, foco diluido.',
      iteration: '3 filtros entrada: 1.Mata fricción actual 2.Crea recurso nuevo 3.Sobrevive sin ti. Falla 2 = archiva.',
      surgeonNote: 'Decir no a ideas buenas es cómo proteges las grandes. Foco es eliminar, no acumular.',
      icValue: 'Proteger la ejecución limitando la entrada de nuevas iniciativas a solo aquellas que pasen los 3 filtros de supervivencia.'
    }
  },
  ...extraCasesData
];

export { universalReconstructionMatrix } from './extraCasesAndMurs';

export const summaryPrinciples = {
  variable1: {
    title: 'Variable 1: Fricción Estructural Cuantificable',
    formula: '\\sum_{X \\to H} \\left( \\frac{(R_1 \\dots R_N / \\text{PI a PFF})}{T \\times I} \\right)^2 \\sqrt{\\frac{\\text{Filosofía liderazgo}}{\\text{Capacidad real movilizar sistema por decisiones}}}',
    legend: [
      'X = Desgaste → M = Dispersión',
      'R₁ a Rₙ = Recursos mapeados tangibles e intangibles',
      'PI a PFF = Punto de Fricción Inicial a Punto de Fricción Final (5 Whys Toyota: síntoma → causa raíz)',
      'T = Tiempo | I = Inversión monetaria/recursos',
      'Raíz cuadrada = Filosofía de liderazgo / Capacidad real de movilizar por decisiones'
    ],
    coreRule: 'Cuando la incógnita autónoma se acerca a la variable dependiente, sobreviene el colapso por dilución de caminos. Si la capacidad de escucha del líder es cero, la capacidad real de movilización es cero y el sistema colapsa sin importar los recursos.'
  },
  variable2: {
    title: 'Variable 2: Ajustar Excel Bajo Fuego Humano + Técnico',
    axiom: 'El operador que ajusta el Excel cuando el Excel no sirve.',
    comparison: {
      tengo: 'Criterio operativo para discernir y actuar bajo ruido extremo.',
      meBloquea: 'Decisores internos o directores con un Excel lleno de piezas sueltas y sin lectura del terreno real.'
    }
  },
  variable3: {
    title: 'Variable 3: 57 Interruptores Fractales de Supervivencia',
    axiom: 'Criterios binarios de acción: "Si A < B (o X > Y), entonces parar/ajustar/delegar/pivotear".',
    targetAudience: 'Investment Committees (IC), Partners de Fondos de Capital de Riesgo, Operadores de Portcos apalancadas y C-Levels.'
  }
};
