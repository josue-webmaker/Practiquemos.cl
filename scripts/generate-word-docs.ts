import { Document, Packer, Paragraph, TextRun, ImageRun, HeadingLevel, AlignmentType, BorderStyle, TableRow, TableCell, Table, WidthType, ShadingType } from 'docx';
import * as fs from 'fs';
import * as path from 'path';
import pg from 'pg';

const IMAGES_DIR = path.join(__dirname, '..', 'assets', 'images', 'questions');

const IMG_FILES: Record<string, string> = {
  interseccionGiro: 'interseccion-giro.png',
  senalPare: 'senal-pare.png',
  velocidadUrbana: 'velocidad-urbana.png',
  crucePeatonal: 'cruce-peatonal.png',
  semaforoRojo: 'semaforo-rojo.png',
  adelantamiento: 'adelantamiento.png',
  autopista: 'autopista.png',
  estacionamiento: 'estacionamiento.png',
  lluvia: 'lluvia.png',
  conduccionNocturna: 'conduccion-nocturna.png',
  rotonda: 'rotonda.png',
  zonaEscolar: 'zona-escolar.png',
  cruceFerroviario: 'cruce-ferroviario.png',
  zonaObras: 'zona-obras.png',
  tablero: 'tablero.png',
  neumaticos: 'neumaticos.png',
  trianguloEmergencia: 'triangulo-emergencia.png',
  cinturon: 'cinturon.png',
  espejos: 'espejos.png',
  primerosAuxilios: 'primeros-auxilios.png',
  cedaPaso: 'ceda-paso.png',
  motor: 'motor.png',
  distanciaSegura: 'distancia-segura.png',
  niebla: 'niebla.png',
  alcohol: 'alcohol.png',
  accidente: 'accidente.png',
  cambioCarril: 'cambio-carril.png',
  noEstacionar: 'no-estacionar.png',
  luces: 'luces.png',
  medioAmbiente: 'medio-ambiente.png',
  curva: 'curva.png',
  vehiculoEmergencia: 'vehiculo-emergencia.png',
  ciclista: 'ciclista.png',
  volante: 'volante.png',
  frenos: 'frenos.png',
  licencia: 'licencia.png',
  extintor: 'extintor.png',
  bateria: 'bateria.png',
  senalesTipos: 'senales-tipos.png',
  gasolinera: 'gasolinera.png',
  celular: 'celular.png',
  sillaInfantil: 'silla-infantil.png',
  tunel: 'tunel.png',
  airbag: 'airbag.png',
  demarcacion: 'demarcacion.png',
  bus: 'bus.png',
  motocicleta: 'motocicleta.png',
  fatiga: 'fatiga.png',
  mantenimiento: 'mantenimiento.png',
  vehiculoElectrico: 'vehiculo-electrico.png',
  puntoCiego: 'punto-ciego.png',
  viento: 'viento.png',
  mascotaVehiculo: 'mascota-vehiculo.png',
  fotoradar: 'fotoradar.png',
  tagPeaje: 'tag-peaje.png',
  heimlich: 'heimlich.png',
  desfibrilador: 'desfibrilador.png',
  posturaConductor: 'postura-conductor.png',
  conduccionDefensiva: 'conduccion-defensiva.png',
  senalesPreventivas: 'senales-preventivas.png',
  auriculares: 'auriculares.png',
  tachasReflectantes: 'tachas-reflectantes.png',
  senalero: 'senalero.png',
  pasajeros: 'pasajeros.png',
  direccionAsistida: 'direccion-asistida.png',
  espEstabilidad: 'esp-estabilidad.png',
  medicamentos: 'medicamentos.png',
  visionConduccion: 'vision-conduccion.png',
};

const KEYWORD_IMAGES: Array<{ kw: string[]; img: string }> = [
  { kw: ['pare', 'señal pare', 'octagonal roja', 'octogonal', 'detenerse completamente'], img: 'senalPare' },
  { kw: ['ceda el paso', 'triángulo invertido', 'ceda paso', 'ceder el paso'], img: 'cedaPaso' },
  { kw: ['30 km', '30km', '40 km', '40km', '50 km', '50km', '60 km', '60km', '80 km', '80km', '100 km', '100km', '120 km', '120km', 'velocidad máxima', 'límite de velocidad', 'exceso de velocidad'], img: 'velocidadUrbana' },
  { kw: ['zona urbana'], img: 'velocidadUrbana' },
  { kw: ['no adelantar', 'prohibido adelantar', 'prohibido sobrepasar', 'adelantar', 'adelantamiento', 'sobrepasar', 'rebasar'], img: 'adelantamiento' },
  { kw: ['no girar', 'prohibido girar', 'no virar', 'gire derecha', 'solo derecha', 'gire izquierda', 'solo izquierda', 'dirección obligatoria'], img: 'interseccionGiro' },
  { kw: ['curva', 'curvas', 'curva peligrosa', 'doble curva'], img: 'curva' },
  { kw: ['rotonda', 'glorieta', 'redondel'], img: 'rotonda' },
  { kw: ['semáforo', 'semaforo', 'señal luminosa', 'luz de tránsito', 'luz roja', 'luz verde', 'luz amarilla', 'ámbar'], img: 'semaforoRojo' },
  { kw: ['cruce peatonal', 'paso peatonal', 'paso de cebra', 'cruce de peatones', 'peatón', 'peatones', 'peatonal'], img: 'crucePeatonal' },
  { kw: ['zona escolar', 'escuela', 'niños cruzando', 'zona de niños', 'niños', 'colegio', 'transporte escolar'], img: 'zonaEscolar' },
  { kw: ['cruce ferroviario', 'paso a nivel', 'ferrocarril', 'vías del tren', 'tren', 'ff.cc.'], img: 'cruceFerroviario' },
  { kw: ['estacionamiento prohibido', 'no estacionar', 'prohibido estacionar', '"e" tachada'], img: 'noEstacionar' },
  { kw: ['estacionar', 'estacionamiento', 'aparcar'], img: 'estacionamiento' },
  { kw: ['autopista', 'autoexpreso', 'vía rápida', 'carretera'], img: 'autopista' },
  { kw: ['obras', 'trabajo vial', 'trabajadores', 'zona de trabajo', 'construcción', 'fondo anaranjado'], img: 'zonaObras' },
  { kw: ['bicicleta', 'ciclista', 'ciclovía'], img: 'ciclista' },
  { kw: ['teléfono celular', 'telefono celular', 'celular mientras', 'teléfono móvil', 'uso del celular', 'hablar por teléfono', 'manos libres'], img: 'celular' },
  { kw: ['audífonos', 'auriculares', 'conducir con audífonos'], img: 'auriculares' },
  { kw: ['retención infantil', 'silla infantil', 'silla de niño', 'asiento infantil', 'menor de 12 años', 'asiento delantero'], img: 'sillaInfantil' },
  { kw: ['señalero', 'luz intermitente', 'intermitente', 'indicador de viraje'], img: 'senalero' },
  { kw: ['cuántas personas', 'pasajeros', 'personas pueden viajar', 'capacidad del vehículo', 'ocupantes'], img: 'pasajeros' },
  { kw: ['túnel', 'tunel'], img: 'tunel' },
  { kw: ['airbag', 'bolsa de aire', 'air bag', 'colisiones laterales'], img: 'airbag' },
  { kw: ['punto ciego', 'puntos ciegos', 'ángulo muerto'], img: 'puntoCiego' },
  { kw: ['viento', 'viento fuerte', 'viento lateral', 'ráfaga'], img: 'viento' },
  { kw: ['perro', 'mascota', 'animal doméstico', 'transportarse un perro'], img: 'mascotaVehiculo' },
  { kw: ['fotorradar', 'fotoradar', 'foto radar', 'cámara de velocidad'], img: 'fotoradar' },
  { kw: ['tag', 'peaje', 'telepeaje'], img: 'tagPeaje' },
  { kw: ['motocicleta', 'moto ', 'motoneta', 'clase b conducir una moto'], img: 'motocicleta' },
  { kw: ['bus', 'transporte público', 'paradero', 'vías exclusivas'], img: 'bus' },
  { kw: ['línea continua', 'doble línea continua', 'línea segmentada', 'demarcación', 'líneas diagonales'], img: 'demarcacion' },
  { kw: ['tachas reflectantes', 'tachas', 'reflectantes en el pavimento'], img: 'tachasReflectantes' },
  { kw: ['cinturón', 'cinturon', 'cinturón de seguridad', 'abrocharse', 'abrochar'], img: 'cinturon' },
  { kw: ['espejo', 'espejos', 'retrovisor', 'retrovisores'], img: 'espejos' },
  { kw: ['volante', 'manos al volante'], img: 'volante' },
  { kw: ['luces', 'focos', 'faros', 'luces altas', 'luces bajas', 'luces de cruce', 'encender luces', 'iluminación'], img: 'luces' },
  { kw: ['neumático', 'neumatico', 'neumáticos', 'llanta', 'llantas', 'presión de los neumáticos', 'banda de rodadura'], img: 'neumaticos' },
  { kw: ['freno', 'frenos', 'frenado', 'frenar', 'freno de mano', 'distancia de frenado', 'abs', 'sistema de frenos', 'pastillas'], img: 'frenos' },
  { kw: ['motor', 'encender el motor', 'apagar el motor', 'revoluciones', 'arranque'], img: 'motor' },
  { kw: ['aceite', 'lubricante', 'lubricación', 'nivel de aceite'], img: 'motor' },
  { kw: ['batería', 'bateria', 'alternador'], img: 'bateria' },
  { kw: ['temperatura', 'sobrecalentamiento', 'recalentamiento', 'refrigerante', 'radiador', 'sistema de refrigeración'], img: 'tablero' },
  { kw: ['tablero', 'indicador', 'instrumento', 'testigo', 'luz de advertencia', 'panel de control'], img: 'tablero' },
  { kw: ['dirección asistida', 'dirección hidráulica', 'power steering', 'servo dirección'], img: 'direccionAsistida' },
  { kw: ['esp', 'control de estabilidad', 'estabilidad electrónic', 'tracción'], img: 'espEstabilidad' },
  { kw: ['alcohol', 'alcoholemia', 'ebriedad', 'estado de ebriedad', 'ley emilia', 'tolerancia cero', 'conducir ebrio', 'alcotest'], img: 'alcohol' },
  { kw: ['licencia', 'licencia de conducir', 'permiso de conducir', 'renovar licencia', 'clase b'], img: 'licencia' },
  { kw: ['multa', 'infracción', 'sanción', 'parte', 'penalización'], img: 'licencia' },
  { kw: ['accidente', 'colisión', 'choque', 'siniestro', 'volcamiento', 'atropello'], img: 'accidente' },
  { kw: ['distancia de seguimiento', 'distancia prudente', 'distancia segura', 'metros de distancia', 'distancia entre vehículos', '2 segundos', 'tres segundos'], img: 'distanciaSegura' },
  { kw: ['intersección', 'cruce de calles', 'cruce', 'preferencia de paso', 'derecho de vía', 'prioridad'], img: 'interseccionGiro' },
  { kw: ['lluvia', 'piso mojado', 'superficie mojada', 'mojado', 'aquaplaning', 'hidroplaneo'], img: 'lluvia' },
  { kw: ['niebla', 'neblina', 'visibilidad reducida', 'poca visibilidad'], img: 'niebla' },
  { kw: ['noche', 'nocturna', 'oscuridad', 'conducir de noche', 'deslumbramiento'], img: 'conduccionNocturna' },
  { kw: ['documentos', 'documentación', 'revisión técnica', 'permiso de circulación', 'seguro obligatorio', 'soap'], img: 'licencia' },
  { kw: ['viraje', 'girar', 'doblar', 'cambio de pista', 'cambio de carril', 'señalizar', 'incorporarse'], img: 'cambioCarril' },
  { kw: ['vehículo de emergencia', 'sirena', 'paso de emergencia', 'ambulancia', 'bomberos', 'carabineros'], img: 'vehiculoEmergencia' },
  { kw: ['primeros auxilios', 'primer auxilio', 'socorrer', 'socorro', 'auxilio'], img: 'primerosAuxilios' },
  { kw: ['rcp', 'reanimación', 'respiración artificial', 'masaje cardíaco', 'paro cardíaco'], img: 'primerosAuxilios' },
  { kw: ['hemorragia', 'sangrado', 'sangre', 'torniquete'], img: 'primerosAuxilios' },
  { kw: ['fractura', 'hueso roto', 'inmovilizar', 'férula', 'esguince'], img: 'primerosAuxilios' },
  { kw: ['extintor', 'extinguidor', 'incendio', 'fuego'], img: 'extintor' },
  { kw: ['triángulo', 'triangulo', 'señalización de emergencia', 'baliza'], img: 'trianguloEmergencia' },
  { kw: ['herido', 'víctima', 'lesionado', 'inconsciente'], img: 'primerosAuxilios' },
  { kw: ['heimlich', 'atraganta', 'atragantamiento', 'asfixia'], img: 'heimlich' },
  { kw: ['dea', 'desfibrilador', 'desfibrilación'], img: 'desfibrilador' },
  { kw: ['fatiga', 'cansancio', 'somnolencia', 'sueño', 'adormecimiento', 'microsueño'], img: 'fatiga' },
  { kw: ['distracción', 'distracc', 'distraído'], img: 'celular' },
  { kw: ['medicamentos', 'medicamento', 'antihistamínicos', 'fármacos'], img: 'medicamentos' },
  { kw: ['postura', 'posición correcta', 'ergonomía'], img: 'posturaConductor' },
  { kw: ['visión amplia', 'visión periférica', 'campo visual', 'campo de visión', 'visibilidad'], img: 'visionConduccion' },
  { kw: ['conducción defensiva', 'conducir a la defensiva', 'anticipar', 'anticipación', 'conducción predictiva'], img: 'conduccionDefensiva' },
  { kw: ['contaminación', 'emisiones', 'gases', 'monóxido', 'co2', 'escape', 'tubo de escape'], img: 'medioAmbiente' },
  { kw: ['medio ambiente', 'ambiental', 'ecológico', 'eco-conducción', 'ahorro de combustible'], img: 'medioAmbiente' },
  { kw: ['vehículo eléctrico', 'vehículos eléctricos', 'carga eléctric', 'enchufable'], img: 'vehiculoElectrico' },
  { kw: ['híbrido', 'hibrido', 'vehículo híbrido'], img: 'vehiculoElectrico' },
  { kw: ['señal reglamentaria', 'reglamentarias', 'forma circular', 'fondo blanco', 'borde rojo'], img: 'senalesTipos' },
  { kw: ['señal preventiva', 'preventivas', 'forma de diamante', 'fondo amarillo', 'romboidales'], img: 'senalesPreventivas' },
  { kw: ['señal informativa', 'informativas', 'fondo azul', 'rectángulo'], img: 'senalesTipos' },
  { kw: ['señalización', 'señales de tránsito', 'tipos de señales'], img: 'senalesTipos' },
  { kw: ['velocidad'], img: 'velocidadUrbana' },
  { kw: ['maquinaria pesada', 'maquinaria automotriz', 'operador de maquinaria'], img: 'zonaObras' },
  { kw: ['animal de tiro', 'tracción animal', 'vehículo de tracción animal'], img: 'curva' },
  { kw: ['minibús', 'minibus', 'servicio de transporte de pasajeros'], img: 'bus' },
  { kw: ['gasolinera', 'estación de servicio', 'bencinera', 'combustible', 'bencina'], img: 'gasolinera' },
  { kw: ['carga', 'camión', 'transporte de carga', 'peso máximo', 'sobrecarga'], img: 'autopista' },
  { kw: ['casco', 'casco protector'], img: 'cinturon' },
];

const CATEGORY_DEFAULTS: Record<string, string> = {
  'Señalización': 'senalesTipos',
  'Señales Reglamentarias': 'senalPare',
  'Señales Preventivas': 'senalesPreventivas',
  'Señales Informativas': 'senalesTipos',
  'Ley de Tránsito': 'licencia',
  'Conducción Segura': 'cinturon',
  'Conducción Defensiva': 'conduccionDefensiva',
  'Mecánica Básica': 'motor',
  'Medio Ambiente': 'medioAmbiente',
  'Primeros Auxilios': 'primerosAuxilios',
};

function getImageKey(pregunta: string, categoria: string): string {
  const text = pregunta.toLowerCase();
  for (const { kw, img } of KEYWORD_IMAGES) {
    for (const k of kw) {
      if (text.includes(k.toLowerCase())) return img;
    }
  }
  return CATEGORY_DEFAULTS[categoria] || 'senalesTipos';
}

function getImageBuffer(imageKey: string): Buffer | null {
  const filename = IMG_FILES[imageKey];
  if (!filename) return null;
  const filepath = path.join(IMAGES_DIR, filename);
  if (!fs.existsSync(filepath)) return null;
  return fs.readFileSync(filepath);
}

interface Question {
  id: number;
  pregunta: string;
  opciones: string[];
  respuesta_correcta: number;
  explicacion_texto: string;
  categoria: string;
  dificultad: string;
  oficial: boolean;
}

const LICENSE_NAMES: Record<string, string> = {
  'clase_b': 'Clase B - Vehículos Livianos',
  'clase_a2': 'Clase A2 - Transporte de Pasajeros',
  'clase_a4': 'Clase A4 - Transporte de Carga',
  'clase_c': 'Clase C - Motocicletas',
  'clase_d': 'Clase D - Maquinaria Pesada',
  'clase_e': 'Clase E - Vehículos Especiales',
};

const ALL_LICENSE_TYPES = ['clase_b', 'clase_a2', 'clase_a4', 'clase_c', 'clase_d', 'clase_e'];
const LICENSE_TYPES = process.argv[2] ? [process.argv[2]] : ALL_LICENSE_TYPES;

async function generateDoc(licenseType: string, questions: Question[]) {
  const licenseName = LICENSE_NAMES[licenseType] || licenseType;
  const children: any[] = [];

  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
      children: [
        new TextRun({ text: 'PRACTIQUEMOS.CL', font: 'Arial', size: 36, bold: true, color: '1d4ed8' }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 100 },
      children: [
        new TextRun({ text: `Preguntas de Examen - ${licenseName}`, font: 'Arial', size: 28, bold: true, color: '333333' }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 },
      children: [
        new TextRun({ text: `Total: ${questions.length} preguntas`, font: 'Arial', size: 22, color: '666666' }),
      ],
    }),
  );

  const categoryCounts: Record<string, number> = {};
  questions.forEach(q => {
    categoryCounts[q.categoria] = (categoryCounts[q.categoria] || 0) + 1;
  });

  children.push(
    new Paragraph({
      spacing: { after: 200 },
      children: [
        new TextRun({ text: 'Resumen por Categoría:', font: 'Arial', size: 22, bold: true, color: '1d4ed8' }),
      ],
    }),
  );

  Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]).forEach(([cat, count]) => {
    children.push(
      new Paragraph({
        spacing: { after: 60 },
        indent: { left: 400 },
        children: [
          new TextRun({ text: `• ${cat}: `, font: 'Arial', size: 20, bold: true }),
          new TextRun({ text: `${count} preguntas`, font: 'Arial', size: 20, color: '555555' }),
        ],
      }),
    );
  });

  children.push(
    new Paragraph({ spacing: { after: 400 }, children: [] }),
  );

  let currentCategory = '';

  questions.sort((a, b) => {
    if (a.categoria !== b.categoria) return a.categoria.localeCompare(b.categoria);
    return a.id - b.id;
  });

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];

    if (q.categoria !== currentCategory) {
      currentCategory = q.categoria;
      children.push(
        new Paragraph({
          spacing: { before: 400, after: 200 },
          shading: { type: ShadingType.SOLID, color: '1d4ed8' },
          children: [
            new TextRun({ text: `  ${currentCategory.toUpperCase()}`, font: 'Arial', size: 24, bold: true, color: 'FFFFFF' }),
          ],
        }),
      );
    }

    const correctLetter = String.fromCharCode(65 + q.respuesta_correcta);

    children.push(
      new Paragraph({
        spacing: { before: 300, after: 100 },
        shading: { type: ShadingType.SOLID, color: 'f0f4ff' },
        children: [
          new TextRun({ text: `  Pregunta ${i + 1} (ID: ${q.id})`, font: 'Arial', size: 20, bold: true, color: '1d4ed8' }),
          new TextRun({ text: q.oficial ? '  ⭐ OFICIAL CONASET' : '', font: 'Arial', size: 16, bold: true, color: 'f59e0b' }),
          new TextRun({ text: `  [${q.dificultad}]`, font: 'Arial', size: 16, color: '888888' }),
        ],
      }),
    );

    const imageKey = getImageKey(q.pregunta, q.categoria);
    const imageBuffer = getImageBuffer(imageKey);

    if (imageBuffer) {
      children.push(
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 },
          children: [
            new ImageRun({
              data: imageBuffer,
              transformation: { width: 120, height: 120 },
              type: 'png',
            }),
          ],
        }),
      );
    }

    children.push(
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({ text: q.pregunta, font: 'Arial', size: 21, bold: true }),
        ],
      }),
    );

    q.opciones.forEach((opt, idx) => {
      const letter = String.fromCharCode(65 + idx);
      const isCorrect = idx === q.respuesta_correcta;
      children.push(
        new Paragraph({
          spacing: { after: 60 },
          indent: { left: 400 },
          children: [
            new TextRun({
              text: `${letter}) ${opt}`,
              font: 'Arial',
              size: 20,
              bold: isCorrect,
              color: isCorrect ? '16a34a' : '333333',
            }),
            ...(isCorrect ? [new TextRun({ text: '  ✓ CORRECTA', font: 'Arial', size: 16, bold: true, color: '16a34a' })] : []),
          ],
        }),
      );
    });

    children.push(
      new Paragraph({
        spacing: { before: 80, after: 60 },
        indent: { left: 200 },
        shading: { type: ShadingType.SOLID, color: 'f0fdf4' },
        children: [
          new TextRun({ text: '  Respuesta correcta: ', font: 'Arial', size: 18, bold: true, color: '16a34a' }),
          new TextRun({ text: `${correctLetter}) ${q.opciones[q.respuesta_correcta]}`, font: 'Arial', size: 18, color: '16a34a' }),
        ],
      }),
    );

    if (q.explicacion_texto) {
      children.push(
        new Paragraph({
          spacing: { after: 100 },
          indent: { left: 200 },
          shading: { type: ShadingType.SOLID, color: 'eff6ff' },
          children: [
            new TextRun({ text: '  Explicación: ', font: 'Arial', size: 18, bold: true, color: '1d4ed8' }),
            new TextRun({ text: q.explicacion_texto, font: 'Arial', size: 18, color: '444444', italics: true }),
          ],
        }),
      );
    }

    children.push(
      new Paragraph({
        spacing: { after: 100 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: 'dddddd' } },
        children: [],
      }),
    );
  }

  const doc = new Document({
    sections: [{ children }],
    creator: 'Practiquemos.cl',
    title: `Preguntas de Examen - ${licenseName}`,
    description: `Banco de preguntas para ${licenseName} - Practiquemos.cl`,
  });

  return doc;
}

async function main() {
  const outputDir = path.join(__dirname, '..', 'generated-docs');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const client = new pg.Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();
  console.log('Conectado a la base de datos');

  for (const licenseType of LICENSE_TYPES) {
    console.log(`\nGenerando documento para ${LICENSE_NAMES[licenseType]}...`);

    const result = await client.query(
      `SELECT id, pregunta, opciones, respuesta_correcta, explicacion_texto, categoria, dificultad, oficial
       FROM questions
       WHERE enabled = true AND license_types::jsonb @> $1::jsonb
       ORDER BY categoria, id`,
      [JSON.stringify([licenseType])]
    );

    const questions: Question[] = result.rows.map(row => ({
      id: row.id,
      pregunta: row.pregunta,
      opciones: typeof row.opciones === 'string' ? JSON.parse(row.opciones) : row.opciones,
      respuesta_correcta: row.respuesta_correcta,
      explicacion_texto: row.explicacion_texto || '',
      categoria: row.categoria,
      dificultad: row.dificultad || 'media',
      oficial: row.oficial || false,
    }));

    console.log(`  ${questions.length} preguntas encontradas`);

    const doc = await generateDoc(licenseType, questions);
    const buffer = await Packer.toBuffer(doc);
    const filename = `Practiquemos_${licenseType.replace('clase_', 'Clase_').toUpperCase()}.docx`;
    const filepath = path.join(outputDir, filename);
    fs.writeFileSync(filepath, buffer);
    console.log(`  ✓ Guardado: ${filepath}`);
  }

  await client.end();
  console.log('\n✅ Todos los documentos generados exitosamente en /generated-docs/');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
