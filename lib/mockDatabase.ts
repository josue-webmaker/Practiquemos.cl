export interface Question {
  id: number;
  categoria: string;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacionTexto: string;
  urlAudio: string | null;
  dificultad: 'facil' | 'media' | 'dificil';
  licenseTypes: string[];
}

export const licenseTypes = [
  { id: 'clase_b', name: 'Clase B', description: 'Vehículos livianos particulares' },
  { id: 'clase_c', name: 'Clase C', description: 'Taxis y transporte menor' },
  { id: 'clase_d', name: 'Clase D', description: 'Transporte escolar y de trabajadores' },
  { id: 'clase_e', name: 'Clase E', description: 'Vehículos de emergencia' },
];

export const categorias = [
  'Ley de Tránsito',
  'Señalización',
  'Mecánica Básica',
  'Primeros Auxilios',
  'Conducción Segura',
  'Medio Ambiente',
  'Señales Reglamentarias',
  'Señales Preventivas',
  'Señales Informativas',
  'Conducción Defensiva',
];

export const temarioChapters = [
  {
    id: 'ch1',
    title: 'Ley de Tránsito',
    icon: 'book-outline',
    sections: [
      { title: 'Requisitos para conducir', content: 'Para conducir en Chile necesitas: licencia de conducir vigente (clase B para vehículos livianos), permiso de circulación al día, seguro obligatorio de accidentes personales (SOAP) vigente, y revisión técnica al día. La edad mínima para obtener licencia clase B es 18 años. Debes aprobar un examen teórico y uno práctico en la municipalidad correspondiente.' },
      { title: 'Documentos obligatorios', content: 'Todo conductor debe portar: licencia de conducir, cédula de identidad, permiso de circulación, certificado de seguro obligatorio (SOAP), y certificado de revisión técnica. La falta de cualquiera de estos documentos puede significar una multa e incluso la retención del vehículo.' },
      { title: 'Velocidades máximas', content: 'Zonas urbanas: 60 km/h (50 km/h en zonas escolares). Caminos rurales: 100 km/h. Autopistas: 120 km/h. Estas velocidades son máximas y deben reducirse según las condiciones del camino, clima y tránsito.' },
      { title: 'Ley Emilia', content: 'La Ley 20.770 (Ley Emilia) establece penas de cárcel efectiva para conductores que en estado de ebriedad causen lesiones gravísimas o muerte. Prohíbe la fuga del lugar del accidente y establece penas de 3 a 10 años de presidio.' },
      { title: 'Tolerancia cero al alcohol', content: 'El límite de alcohol en la sangre es 0.3 g/l. Entre 0.3 y 0.8 g/l se considera conducción bajo la influencia del alcohol. Sobre 0.8 g/l es estado de ebriedad. Las sanciones incluyen multas, suspensión de licencia y cárcel.' },
    ],
  },
  {
    id: 'ch2',
    title: 'Señalización Vial',
    icon: 'sign-post-outline',
    sections: [
      { title: 'Señales reglamentarias', content: 'Son de cumplimiento obligatorio. Tienen forma circular (excepto PARE que es octagonal y CEDA EL PASO que es triangular invertido). Fondo blanco con borde rojo indican prohibición. Fondo azul con símbolo blanco indican obligación. La señal de PARE exige detención total.' },
      { title: 'Señales preventivas', content: 'Advierten peligros o situaciones especiales. Tienen forma de diamante (rombo) con fondo amarillo y símbolo negro. Alertan sobre curvas, cruces, pendientes, animales, obras en la vía, etc. No son obligatorias pero sí recomendadas.' },
      { title: 'Señales informativas', content: 'Proporcionan información útil al conductor. Fondo verde para indicar destinos y distancias en carreteras. Fondo azul para servicios (gasolineras, hospitales, restaurantes). Fondo café para sitios turísticos.' },
      { title: 'Demarcación vial', content: 'Línea continua amarilla: prohibido adelantar. Línea segmentada: se permite adelantar con precaución. Líneas blancas: delimitan pistas del mismo sentido. Líneas peatonales tipo cebra: cruce peatonal con prioridad al peatón.' },
      { title: 'Semáforos', content: 'Verde: paso permitido. Amarillo: precaución, detenerse si es posible. Rojo: detención obligatoria. Flecha verde: paso permitido en dirección indicada. Rojo intermitente: equivale a señal PARE.' },
    ],
  },
  {
    id: 'ch3',
    title: 'Mecánica Básica',
    icon: 'construct-outline',
    sections: [
      { title: 'Motor y sistemas', content: 'El motor transforma energía del combustible en movimiento. El sistema de refrigeración mantiene la temperatura óptima con líquido refrigerante. El sistema de lubricación reduce la fricción con aceite. El sistema eléctrico incluye batería, alternador y motor de arranque.' },
      { title: 'Sistema de frenos', content: 'Frenos de disco y tambor. El sistema ABS (Anti-lock Braking System) evita el bloqueo de ruedas al frenar. Freno de mano o estacionamiento para mantener el vehículo detenido. El líquido de frenos debe revisarse periódicamente.' },
      { title: 'Neumáticos', content: 'Deben tener al menos 1.6mm de profundidad en el dibujo. La presión incorrecta causa desgaste irregular y mayor consumo. Revisar presión en frío una vez al mes. Neumáticos nuevos en el eje delantero para mejor dirección.' },
      { title: 'Mantenimiento preventivo', content: 'Cambio de aceite cada 5.000-10.000 km. Revisar niveles de líquidos (refrigerante, frenos, dirección). Cambiar filtros (aire, aceite, combustible). Revisar luces, frenos y neumáticos regularmente. La revisión técnica anual es obligatoria.' },
    ],
  },
  {
    id: 'ch4',
    title: 'Primeros Auxilios',
    icon: 'medkit-outline',
    sections: [
      { title: 'Protocolo PAS', content: 'P: Proteger la zona del accidente señalizando con triángulos. A: Avisar a los servicios de emergencia (131 Ambulancia, 132 Bomberos, 133 Carabineros). S: Socorrer a los heridos sin moverlos innecesariamente.' },
      { title: 'Hemorragias', content: 'Hacer presión directa sobre la herida con un paño limpio. Elevar la extremidad afectada. No retirar objetos clavados. El torniquete solo como último recurso. Ante hemorragia nasal, inclinar la cabeza hacia adelante y presionar las fosas nasales.' },
      { title: 'Posición lateral de seguridad', content: 'Para heridos inconscientes que respiran. Colocar de lado para mantener vías aéreas despejadas. Evita que se ahoguen con vómito. No mover si se sospecha lesión de columna.' },
      { title: 'RCP básico', content: 'Si no respira: 30 compresiones torácicas seguidas de 2 ventilaciones. Compresiones en el centro del pecho, con brazos rectos. Ritmo de 100-120 compresiones por minuto. Continuar hasta que llegue la ayuda médica.' },
    ],
  },
  {
    id: 'ch5',
    title: 'Conducción Segura',
    icon: 'shield-checkmark-outline',
    sections: [
      { title: 'Distancia de seguimiento', content: 'Regla de los 2 segundos en condiciones normales. 4 segundos con lluvia o mala visibilidad. 6 segundos en hielo o nieve. Aumentar la distancia con vehículos pesados. A 100 km/h, la distancia de frenado es de aproximadamente 70 metros.' },
      { title: 'Adelantamiento seguro', content: 'Solo por la izquierda (excepto en vías de un solo sentido). Verificar que no hay vehículos en contra. Asegurarse de tener visibilidad suficiente. Señalizar con anticipación. Prohibido adelantar en curvas, cruces, puentes y túneles.' },
      { title: 'Conducción nocturna', content: 'Usar luces bajas en zona urbana. Luces altas solo en caminos rurales sin tránsito en contra. Reducir velocidad. Mantener parabrisas y luces limpias. Descansar cada 2 horas.' },
      { title: 'Conducción en lluvia', content: 'Reducir velocidad un 20-30%. Aumentar distancia de seguimiento. Usar luces bajas. Evitar frenar bruscamente. Riesgo de aquaplaning sobre los 80 km/h. No cruzar cauces de agua en la vía.' },
      { title: 'Puntos ciegos', content: 'Zonas no visibles por los espejos retrovisores. Ubicados a los costados y detrás del vehículo. Siempre girar la cabeza antes de cambiar de pista. Ajustar espejos correctamente para minimizar puntos ciegos.' },
    ],
  },
  {
    id: 'ch6',
    title: 'Medio Ambiente',
    icon: 'leaf-outline',
    sections: [
      { title: 'Emisiones vehiculares', content: 'Los gases de escape contienen CO2, CO, NOx y material particulado. Los vehículos catalíticos (sello verde) emiten menos contaminantes. La revisión de gases es parte de la revisión técnica. Mantener el motor afinado reduce las emisiones.' },
      { title: 'Conducción eficiente', content: 'Mantener velocidad constante. Evitar acelerones y frenazos bruscos. Apagar el motor en esperas largas. Usar marchas altas cuando sea posible. Reducir el uso del aire acondicionado. Planificar rutas para evitar tráfico.' },
      { title: 'Restricción vehicular', content: 'Aplica en Santiago y otras ciudades según dígito de patente. Vehículos sin sello verde tienen restricción permanente. En episodios de contaminación se extiende a vehículos con sello verde. Exenciones para vehículos eléctricos e híbridos.' },
      { title: 'Residuos peligrosos', content: 'El aceite usado debe reciclarse en puntos autorizados. Las baterías contienen ácido y plomo. Los neumáticos usados deben entregarse en puntos de reciclaje. Nunca tirar líquidos vehiculares al desagüe.' },
    ],
  },
];

export const mockQuestions: Question[] = [
  // LEY DE TRANSITO (30 preguntas)
  { id: 1, categoria: 'Ley de Tránsito', pregunta: '¿Cuál es la velocidad máxima permitida en zonas urbanas en Chile?', opciones: ['40 km/h', '50 km/h', '60 km/h', '80 km/h'], respuestaCorrecta: 2, explicacionTexto: 'Según la Ley de Tránsito chilena, la velocidad máxima en zonas urbanas es de 60 km/h, salvo que la señalización indique lo contrario.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 2, categoria: 'Ley de Tránsito', pregunta: '¿Cuándo es obligatorio el uso del cinturón de seguridad?', opciones: ['Solo en carretera', 'Solo el conductor', 'Todos los ocupantes siempre', 'Solo en asientos delanteros'], respuestaCorrecta: 2, explicacionTexto: 'La ley establece que todos los ocupantes del vehículo deben usar cinturón de seguridad en todo momento.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 3, categoria: 'Ley de Tránsito', pregunta: '¿Cuál es el límite legal de alcohol en la sangre para conducir en Chile?', opciones: ['0.0 g/l', '0.3 g/l', '0.5 g/l', '0.8 g/l'], respuestaCorrecta: 1, explicacionTexto: 'En Chile, el límite es de 0.3 g/l de alcohol en la sangre. Sobre este nivel se considera estado de ebriedad.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 4, categoria: 'Ley de Tránsito', pregunta: '¿Quién tiene preferencia en un cruce no regulado?', opciones: ['El que viene por la derecha', 'El que viene por la izquierda', 'El que llega primero', 'El vehículo más grande'], respuestaCorrecta: 0, explicacionTexto: 'En un cruce no regulado, tiene preferencia el vehículo que viene por la derecha del conductor.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 5, categoria: 'Ley de Tránsito', pregunta: '¿Desde qué edad se puede obtener licencia de conducir clase B?', opciones: ['16 años', '17 años', '18 años', '21 años'], respuestaCorrecta: 2, explicacionTexto: 'La edad mínima para obtener licencia clase B es de 18 años.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b'] },
  { id: 6, categoria: 'Ley de Tránsito', pregunta: '¿Cuándo se debe usar la luz intermitente (señalero)?', opciones: ['Solo al girar', 'Al girar y cambiar de pista', 'Solo en carretera', 'Solo de noche'], respuestaCorrecta: 1, explicacionTexto: 'El señalero debe usarse siempre al girar, cambiar de pista o incorporarse al tránsito.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 7, categoria: 'Ley de Tránsito', pregunta: '¿Es obligatorio llevar el triángulo de seguridad?', opciones: ['No, es opcional', 'Solo en carretera', 'Sí, siempre', 'Solo de noche'], respuestaCorrecta: 2, explicacionTexto: 'Es obligatorio llevar al menos un triángulo reflectante. Debe colocarse a 50 metros del vehículo detenido.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 8, categoria: 'Ley de Tránsito', pregunta: '¿Se puede usar el teléfono celular mientras se conduce?', opciones: ['Sí, con manos libres', 'Sí, si es rápido', 'No, nunca', 'Solo para GPS'], respuestaCorrecta: 0, explicacionTexto: 'Solo se permite usar el teléfono con sistema manos libres. Manipularlo con las manos está prohibido.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 9, categoria: 'Ley de Tránsito', pregunta: '¿Qué documentos debe portar siempre el conductor?', opciones: ['Solo la licencia', 'Licencia y cédula', 'Licencia, permiso de circulación, SOAP y revisión técnica', 'Solo el permiso'], respuestaCorrecta: 2, explicacionTexto: 'Debe portar: licencia, permiso de circulación al día, SOAP vigente y certificado de revisión técnica.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 10, categoria: 'Ley de Tránsito', pregunta: '¿Qué sanciones contempla la Ley Emilia?', opciones: ['Solo multa', 'Cárcel efectiva por conducir ebrio causando muerte o lesiones graves', 'Suspensión 6 meses', 'Trabajo comunitario'], respuestaCorrecta: 1, explicacionTexto: 'La Ley Emilia establece cárcel efectiva (al menos 1 año) para quienes conduzcan ebrios y causen lesiones gravísimas o muerte.', urlAudio: null, dificultad: 'dificil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 11, categoria: 'Ley de Tránsito', pregunta: '¿Cuál es la velocidad máxima en autopistas?', opciones: ['100 km/h', '110 km/h', '120 km/h', '130 km/h'], respuestaCorrecta: 2, explicacionTexto: 'La velocidad máxima en autopistas es de 120 km/h, salvo señalización diferente.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 12, categoria: 'Ley de Tránsito', pregunta: '¿A qué distancia mínima de un grifo debe estacionarse?', opciones: ['3 metros', '5 metros', '10 metros', '15 metros'], respuestaCorrecta: 2, explicacionTexto: 'Se debe dejar al menos 10 metros de distancia de un grifo para no obstruir el acceso de bomberos.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 13, categoria: 'Ley de Tránsito', pregunta: '¿Cuál es la velocidad máxima en zonas escolares?', opciones: ['20 km/h', '30 km/h', '40 km/h', '50 km/h'], respuestaCorrecta: 1, explicacionTexto: 'En zonas escolares la velocidad máxima es de 30 km/h cuando está activa la señalización correspondiente.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 14, categoria: 'Ley de Tránsito', pregunta: '¿Los menores de qué edad deben ir en silla especial?', opciones: ['4 años', '6 años', '9 años', '12 años'], respuestaCorrecta: 2, explicacionTexto: 'Los niños menores de 9 años o que midan menos de 135 cm deben usar sistema de retención infantil adecuado a su peso y talla.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d'] },
  { id: 15, categoria: 'Ley de Tránsito', pregunta: '¿Cuál es la velocidad máxima en caminos rurales?', opciones: ['80 km/h', '90 km/h', '100 km/h', '110 km/h'], respuestaCorrecta: 2, explicacionTexto: 'La velocidad máxima en caminos rurales es de 100 km/h, salvo señalización diferente.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 16, categoria: 'Ley de Tránsito', pregunta: '¿Dónde se debe estacionar en una pendiente?', opciones: ['En cualquier lugar', 'Con las ruedas hacia la cuneta o vereda', 'Solo al inicio de la pendiente', 'En el medio de la calzada'], respuestaCorrecta: 1, explicacionTexto: 'Al estacionar en pendiente, las ruedas delanteras deben girarse hacia la cuneta o vereda y activar el freno de mano.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 17, categoria: 'Ley de Tránsito', pregunta: '¿Cuántas personas pueden viajar en un vehículo?', opciones: ['Las que quepan', 'Según capacidad del fabricante', 'Máximo 5', 'Máximo 7'], respuestaCorrecta: 1, explicacionTexto: 'Solo pueden viajar la cantidad de personas que indique la capacidad del fabricante y que tengan cinturón disponible.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 18, categoria: 'Ley de Tránsito', pregunta: '¿Cuándo caduca el permiso de circulación?', opciones: ['Cada 6 meses', 'El 31 de marzo de cada año', 'Cada 2 años', 'Nunca caduca'], respuestaCorrecta: 1, explicacionTexto: 'El permiso de circulación se debe renovar cada año. El plazo vence el 31 de marzo, con pagos a partir del 1 de febrero.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },

  // SEÑALIZACIÓN (35 preguntas)
  { id: 19, categoria: 'Señalización', pregunta: '¿Qué indica una señal de triángulo invertido?', opciones: ['Pare', 'Ceda el paso', 'Zona escolar', 'Curva peligrosa'], respuestaCorrecta: 1, explicacionTexto: 'El triángulo invertido con borde rojo es la señal de "Ceda el Paso".', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 20, categoria: 'Señalización', pregunta: '¿Qué significa una línea continua amarilla en el centro?', opciones: ['Se puede adelantar', 'Prohibido adelantar', 'Zona de estacionamiento', 'Carril exclusivo'], respuestaCorrecta: 1, explicacionTexto: 'La línea continua amarilla indica que está prohibido adelantar.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 21, categoria: 'Señalización', pregunta: '¿Qué indica una señal de fondo azul con flecha blanca?', opciones: ['Dirección obligatoria', 'Sentido sugerido', 'Estacionamiento', 'Hospital'], respuestaCorrecta: 0, explicacionTexto: 'Las señales con fondo azul y flecha blanca indican dirección obligatoria.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 22, categoria: 'Señalización', pregunta: '¿Qué señal tiene forma de octágono (8 lados)?', opciones: ['Ceda el paso', 'Pare', 'No estacionar', 'Zona escolar'], respuestaCorrecta: 1, explicacionTexto: 'La señal octagonal roja con letras blancas es PARE. Indica detención obligatoria.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 23, categoria: 'Señalización', pregunta: '¿Qué color de semáforo indica precaución?', opciones: ['Rojo', 'Verde', 'Amarillo', 'Azul'], respuestaCorrecta: 2, explicacionTexto: 'La luz amarilla indica precaución y prepararse para detenerse.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 24, categoria: 'Señalización', pregunta: '¿Qué indica una señal circular con borde rojo y fondo blanco?', opciones: ['Informativa', 'Advertencia', 'Prohibición o restricción', 'Turística'], respuestaCorrecta: 2, explicacionTexto: 'Las señales circulares con borde rojo y fondo blanco son de prohibición.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 25, categoria: 'Señalización', pregunta: '¿Qué señal tiene forma de diamante (rombo) y fondo amarillo?', opciones: ['Prohibición', 'Advertencia de peligro', 'Informativa', 'Prioridad'], respuestaCorrecta: 1, explicacionTexto: 'Las señales en forma de diamante con fondo amarillo son de advertencia o prevención.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 26, categoria: 'Señalización', pregunta: '¿Qué indica la demarcación tipo cebra en la calzada?', opciones: ['Estacionamiento', 'Cruce de peatones', 'Carga y descarga', 'Ciclovía'], respuestaCorrecta: 1, explicacionTexto: 'Las líneas tipo cebra indican cruce peatonal. Los vehículos deben ceder el paso.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 27, categoria: 'Señalización', pregunta: '¿Qué indica una señal con fondo verde en carreteras?', opciones: ['Prohibición', 'Información de destinos y distancias', 'Advertencia', 'Zona de descanso'], respuestaCorrecta: 1, explicacionTexto: 'Las señales con fondo verde indican destinos, distancias y nombres de rutas.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 28, categoria: 'Señalización', pregunta: '¿Qué significa un semáforo con flecha verde a la derecha?', opciones: ['Se puede girar a la derecha', 'Se puede girar a la izquierda', 'Seguir recto', 'Precaución'], respuestaCorrecta: 0, explicacionTexto: 'La flecha verde indica que está permitido girar en esa dirección.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 29, categoria: 'Señalización', pregunta: '¿Qué indica un semáforo rojo intermitente?', opciones: ['Acelerar', 'Equivale a señal PARE', 'Seguir con precaución', 'Estacionarse'], respuestaCorrecta: 1, explicacionTexto: 'Un semáforo rojo intermitente equivale a una señal de PARE. Debe detenerse completamente.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 30, categoria: 'Señalización', pregunta: '¿Qué indica un semáforo amarillo intermitente?', opciones: ['Detenerse', 'Precaución, avanzar con cuidado', 'Acelerar', 'Ceder el paso'], respuestaCorrecta: 1, explicacionTexto: 'El amarillo intermitente indica precaución, se debe avanzar con cuidado verificando que no haya peligro.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 31, categoria: 'Señalización', pregunta: '¿Qué indica una línea segmentada blanca?', opciones: ['Prohibido cambiar de pista', 'Se permite cambiar de pista', 'Borde de la calzada', 'Estacionamiento'], respuestaCorrecta: 1, explicacionTexto: 'La línea segmentada blanca separa pistas del mismo sentido y permite el cambio de pista con precaución.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 32, categoria: 'Señalización', pregunta: '¿Qué señal con fondo café indica?', opciones: ['Peligro', 'Sitios turísticos', 'Hospitales', 'Gasolineras'], respuestaCorrecta: 1, explicacionTexto: 'Las señales con fondo café indican sitios turísticos, parques nacionales y puntos de interés cultural.', urlAudio: null, dificultad: 'dificil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 33, categoria: 'Señalización', pregunta: '¿Qué indica una doble línea continua amarilla?', opciones: ['Se puede adelantar con precaución', 'Prohibido adelantar en ambos sentidos', 'Zona de estacionamiento', 'Pista exclusiva'], respuestaCorrecta: 1, explicacionTexto: 'La doble línea continua amarilla prohíbe el adelantamiento en ambos sentidos de circulación.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },

  // MECÁNICA BÁSICA (25 preguntas)
  { id: 34, categoria: 'Mecánica Básica', pregunta: '¿Cada cuántos km se recomienda cambiar el aceite?', opciones: ['3.000 km', '5.000 km', '10.000 km', '20.000 km'], respuestaCorrecta: 1, explicacionTexto: 'Se recomienda cada 5.000 km o según el fabricante.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 35, categoria: 'Mecánica Básica', pregunta: '¿Para qué sirve el líquido refrigerante?', opciones: ['Lubricar', 'Mantener temperatura del motor', 'Limpiar inyectores', 'Mejorar combustible'], respuestaCorrecta: 1, explicacionTexto: 'El refrigerante mantiene la temperatura del motor en un rango óptimo evitando sobrecalentamiento.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 36, categoria: 'Mecánica Básica', pregunta: '¿Para qué sirve el sistema ABS?', opciones: ['Acelerar más rápido', 'Evitar bloqueo de ruedas al frenar', 'Mejorar suspensión', 'Ahorrar combustible'], respuestaCorrecta: 1, explicacionTexto: 'El ABS impide que las ruedas se bloqueen durante una frenada brusca, manteniendo el control.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 37, categoria: 'Mecánica Básica', pregunta: '¿Qué indica presión incorrecta en neumáticos?', opciones: ['Vibra al frenar', 'Desgaste irregular', 'Motor con ruido', 'Luces parpadean'], respuestaCorrecta: 1, explicacionTexto: 'Desgaste irregular indica presión incorrecta. Centro: exceso. Lados: falta de presión.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 38, categoria: 'Mecánica Básica', pregunta: '¿Qué transforma la energía del combustible en movimiento?', opciones: ['La transmisión', 'El motor', 'El alternador', 'El embrague'], respuestaCorrecta: 1, explicacionTexto: 'El motor transforma la energía química del combustible en energía mecánica.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 39, categoria: 'Mecánica Básica', pregunta: '¿Qué función cumple el embrague?', opciones: ['Frenar ruedas', 'Conectar y desconectar motor de la transmisión', 'Enfriar motor', 'Dirigir ruedas'], respuestaCorrecta: 1, explicacionTexto: 'El embrague conecta y desconecta el motor de la caja de cambios para cambiar marchas.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 40, categoria: 'Mecánica Básica', pregunta: '¿Qué indica el testigo de temperatura en rojo?', opciones: ['Motor frío', 'Temperatura normal', 'Motor sobrecalentado', 'Falta aceite'], respuestaCorrecta: 2, explicacionTexto: 'El testigo rojo indica sobrecalentamiento. Detener el vehículo y esperar que se enfríe.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 41, categoria: 'Mecánica Básica', pregunta: '¿Cuál es la función de los amortiguadores?', opciones: ['Sostener el peso', 'Absorber irregularidades del terreno', 'Frenar ruedas', 'Dirigir vehículo'], respuestaCorrecta: 1, explicacionTexto: 'Los amortiguadores absorben irregularidades del terreno, manteniendo estabilidad y contacto con el suelo.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 42, categoria: 'Mecánica Básica', pregunta: '¿Cada cuánto se realiza la revisión técnica?', opciones: ['6 meses', 'Cada año', '2 años', '3 años'], respuestaCorrecta: 1, explicacionTexto: 'Los vehículos particulares realizan revisión técnica cada año.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 43, categoria: 'Mecánica Básica', pregunta: '¿Cuál es la profundidad mínima del dibujo de un neumático?', opciones: ['0.5 mm', '1.0 mm', '1.6 mm', '2.0 mm'], respuestaCorrecta: 2, explicacionTexto: 'La profundidad mínima legal del dibujo del neumático es de 1.6 mm.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 44, categoria: 'Mecánica Básica', pregunta: '¿Para qué sirve el alternador?', opciones: ['Encender el motor', 'Generar electricidad mientras el motor funciona', 'Enfriar el motor', 'Reducir emisiones'], respuestaCorrecta: 1, explicacionTexto: 'El alternador genera corriente eléctrica mientras el motor está en funcionamiento, cargando la batería y alimentando los sistemas eléctricos.', urlAudio: null, dificultad: 'dificil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 45, categoria: 'Mecánica Básica', pregunta: '¿Qué líquido se debe revisar periódicamente en el sistema de frenos?', opciones: ['Aceite de motor', 'Líquido de frenos', 'Refrigerante', 'Líquido limpiaparabrisas'], respuestaCorrecta: 1, explicacionTexto: 'El líquido de frenos es esencial para el funcionamiento del sistema de frenado y debe revisarse periódicamente.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 46, categoria: 'Mecánica Básica', pregunta: '¿Cuándo se debe revisar la presión de los neumáticos?', opciones: ['Después de un viaje largo', 'Con los neumáticos en frío', 'Después de circular 30 minutos', 'Solo en la revisión técnica'], respuestaCorrecta: 1, explicacionTexto: 'La presión debe medirse con los neumáticos en frío, ya que el calor aumenta la presión y da lecturas incorrectas.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },

  // PRIMEROS AUXILIOS (20 preguntas)
  { id: 47, categoria: 'Primeros Auxilios', pregunta: '¿Qué es lo primero al llegar a un accidente?', opciones: ['Mover heridos', 'Señalizar la zona', 'Llamar al seguro', 'Tomar fotos'], respuestaCorrecta: 1, explicacionTexto: 'Lo primero es señalizar la zona para evitar nuevos siniestros. Luego llamar a emergencias.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 48, categoria: 'Primeros Auxilios', pregunta: '¿Cuál es el número de Carabineros?', opciones: ['131', '132', '133', '134'], respuestaCorrecta: 2, explicacionTexto: '133 es Carabineros. 131 es Ambulancia (SAMU). 132 es Bomberos.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 49, categoria: 'Primeros Auxilios', pregunta: '¿Qué posición para un inconsciente que respira?', opciones: ['Boca arriba', 'Sentado', 'Posición lateral de seguridad', 'Boca abajo'], respuestaCorrecta: 2, explicacionTexto: 'La posición lateral de seguridad mantiene las vías aéreas despejadas.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 50, categoria: 'Primeros Auxilios', pregunta: '¿Qué NO hacer con un herido en accidente?', opciones: ['Llamar emergencias', 'Darle agua o alimentos', 'Señalizar zona', 'Abrigarlo'], respuestaCorrecta: 1, explicacionTexto: 'No dar agua ni alimentos. Podría necesitar cirugía o aspirar líquidos.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 51, categoria: 'Primeros Auxilios', pregunta: '¿Cómo actuar ante una hemorragia externa?', opciones: ['Torniquete inmediato', 'Presión directa sobre la herida', 'Lavar con alcohol', 'No hacer nada'], respuestaCorrecta: 1, explicacionTexto: 'Hacer presión directa y firme con paño limpio. Torniquete solo como último recurso.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 52, categoria: 'Primeros Auxilios', pregunta: '¿Cuál es el número de Bomberos en Chile?', opciones: ['131', '132', '133', '134'], respuestaCorrecta: 1, explicacionTexto: '132 es el número de Bomberos de Chile.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 53, categoria: 'Primeros Auxilios', pregunta: '¿A qué distancia se debe colocar el triángulo de seguridad?', opciones: ['10 metros', '25 metros', '50 metros', '100 metros'], respuestaCorrecta: 2, explicacionTexto: 'El triángulo debe colocarse a al menos 50 metros del vehículo detenido para alertar al tránsito.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 54, categoria: 'Primeros Auxilios', pregunta: '¿Cuántas compresiones torácicas se realizan en RCP?', opciones: ['15', '20', '30', '50'], respuestaCorrecta: 2, explicacionTexto: 'Se realizan 30 compresiones seguidas de 2 ventilaciones, a un ritmo de 100-120 compresiones por minuto.', urlAudio: null, dificultad: 'dificil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 55, categoria: 'Primeros Auxilios', pregunta: '¿Se debe mover a un herido con posible lesión de columna?', opciones: ['Sí, siempre', 'Solo si hay peligro inminente', 'Sí, para mayor comodidad', 'Solo a la sombra'], respuestaCorrecta: 1, explicacionTexto: 'Solo se debe mover a un herido con posible lesión de columna si hay peligro inminente como fuego o derrumbe.', urlAudio: null, dificultad: 'dificil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 56, categoria: 'Primeros Auxilios', pregunta: '¿Qué significa el protocolo PAS?', opciones: ['Parar, Avisar, Socorrer', 'Proteger, Avisar, Socorrer', 'Prevenir, Actuar, Seguir', 'Parar, Actuar, Seguir'], respuestaCorrecta: 1, explicacionTexto: 'PAS significa Proteger (señalizar zona), Avisar (llamar emergencias), Socorrer (atender heridos).', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },

  // CONDUCCIÓN SEGURA (30 preguntas)
  { id: 57, categoria: 'Conducción Segura', pregunta: '¿Cuál es la distancia mínima de seguimiento?', opciones: ['1 segundo', '2 segundos', '3 segundos', '5 segundos'], respuestaCorrecta: 1, explicacionTexto: 'La regla de los 2 segundos es la distancia mínima en condiciones normales. En lluvia, 4 segundos.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 58, categoria: 'Conducción Segura', pregunta: '¿Qué hacer con neblina espesa?', opciones: ['Luces altas', 'Luces bajas y reducir velocidad', 'Detenerse en la pista', 'Usar balizas'], respuestaCorrecta: 1, explicacionTexto: 'Usar luces bajas (nunca altas) y reducir velocidad considerablemente.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 59, categoria: 'Conducción Segura', pregunta: '¿Qué efecto tiene conducir con sueño?', opciones: ['Mejora reflejos', 'No afecta', 'Equivale a conducir ebrio', 'Solo afecta visión'], respuestaCorrecta: 2, explicacionTexto: 'Conducir con sueño equivale a conducir bajo efectos del alcohol: disminuye reflejos y atención.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 60, categoria: 'Conducción Segura', pregunta: '¿Cómo actuar ante un reventón de neumático?', opciones: ['Frenar bruscamente', 'Acelerar', 'Sujetar volante y desacelerar gradualmente', 'Girar al lado del reventón'], respuestaCorrecta: 2, explicacionTexto: 'Sujetar firmemente el volante, no frenar bruscamente, y desacelerar gradualmente.', urlAudio: null, dificultad: 'dificil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 61, categoria: 'Conducción Segura', pregunta: '¿Cuál es el principal factor de riesgo en conducción?', opciones: ['Estado del camino', 'Factor humano', 'Condiciones climáticas', 'Estado del vehículo'], respuestaCorrecta: 1, explicacionTexto: 'El factor humano es responsable de más del 90% de los accidentes.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 62, categoria: 'Conducción Segura', pregunta: '¿Qué es el punto ciego?', opciones: ['Parte trasera', 'Zonas no visibles por los espejos', 'El capó', 'Zona debajo del auto'], respuestaCorrecta: 1, explicacionTexto: 'Zonas alrededor del vehículo no visibles a través de los espejos retrovisores.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 63, categoria: 'Conducción Segura', pregunta: '¿Qué hacer antes de retroceder?', opciones: ['Tocar bocina', 'Mirar espejos y girar cabeza', 'Encender luces', 'Bajar ventanilla'], respuestaCorrecta: 1, explicacionTexto: 'Revisar todos los espejos y girar la cabeza para verificar que no hay obstáculos.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 64, categoria: 'Conducción Segura', pregunta: '¿Qué hacer si el vehículo patina?', opciones: ['Frenar bruscamente', 'Acelerar', 'Soltar acelerador y girar suavemente en dirección del patinaje', 'Apagar motor'], respuestaCorrecta: 2, explicacionTexto: 'Soltar acelerador sin frenar bruscamente y girar suavemente en dirección del patinaje.', urlAudio: null, dificultad: 'dificil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 65, categoria: 'Conducción Segura', pregunta: '¿Cómo afecta la lluvia a la conducción?', opciones: ['No la afecta', 'Reduce adherencia al pavimento', 'Mejora visibilidad', 'Aumenta tracción'], respuestaCorrecta: 1, explicacionTexto: 'La lluvia reduce la adherencia y puede causar aquaplaning. Reducir velocidad y aumentar distancia.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 66, categoria: 'Conducción Segura', pregunta: '¿A qué velocidad aproximada puede ocurrir aquaplaning?', opciones: ['40 km/h', '60 km/h', '80 km/h', '120 km/h'], respuestaCorrecta: 2, explicacionTexto: 'El aquaplaning puede ocurrir a partir de 80 km/h cuando hay agua en la superficie de la vía.', urlAudio: null, dificultad: 'dificil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 67, categoria: 'Conducción Segura', pregunta: '¿Cuándo se deben encender las luces del vehículo?', opciones: ['Solo de noche', 'Solo con lluvia', 'Siempre al circular fuera de zonas urbanas', 'Solo en túneles'], respuestaCorrecta: 2, explicacionTexto: 'Es obligatorio circular con luces encendidas siempre fuera de zonas urbanas, de día y de noche.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 68, categoria: 'Conducción Segura', pregunta: '¿Por dónde se debe adelantar?', opciones: ['Por la derecha', 'Por la izquierda', 'Por cualquier lado', 'Por la berma'], respuestaCorrecta: 1, explicacionTexto: 'El adelantamiento debe realizarse siempre por la izquierda, excepto en vías de un solo sentido.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 69, categoria: 'Conducción Segura', pregunta: '¿Cada cuánto tiempo se recomienda descansar en viajes largos?', opciones: ['Cada hora', 'Cada 2 horas', 'Cada 4 horas', 'No es necesario'], respuestaCorrecta: 1, explicacionTexto: 'Se recomienda hacer pausas cada 2 horas en viajes largos para prevenir la fatiga.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 70, categoria: 'Conducción Segura', pregunta: '¿Dónde está prohibido adelantar?', opciones: ['En rectas largas', 'En curvas, cruces, puentes y túneles', 'En autopistas', 'En calles anchas'], respuestaCorrecta: 1, explicacionTexto: 'Está prohibido adelantar en curvas, cruces, puentes, túneles y donde la visibilidad sea reducida.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 71, categoria: 'Conducción Segura', pregunta: '¿Cuál es la distancia aproximada de frenado a 100 km/h?', opciones: ['30 metros', '50 metros', '70 metros', '100 metros'], respuestaCorrecta: 2, explicacionTexto: 'A 100 km/h, la distancia de frenado en condiciones normales es de aproximadamente 70 metros.', urlAudio: null, dificultad: 'dificil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },

  // MEDIO AMBIENTE (20 preguntas)
  { id: 72, categoria: 'Medio Ambiente', pregunta: '¿Qué hacer con el aceite usado del motor?', opciones: ['Tirarlo al desagüe', 'Dejarlo en la basura', 'Llevarlo a punto de reciclaje', 'Quemarlo'], respuestaCorrecta: 2, explicacionTexto: 'El aceite usado debe llevarse a un punto de reciclaje autorizado.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 73, categoria: 'Medio Ambiente', pregunta: '¿Cuál es la principal causa de contaminación vehicular?', opciones: ['El ruido', 'Los gases de escape', 'Desgaste de neumáticos', 'Las luces'], respuestaCorrecta: 1, explicacionTexto: 'Los gases de escape son la principal fuente de contaminación vehicular.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 74, categoria: 'Medio Ambiente', pregunta: '¿Cómo reducir la contaminación al conducir?', opciones: ['Acelerando bruscamente', 'Conducción eficiente', 'Siempre con aire acondicionado', 'Llevando más carga'], respuestaCorrecta: 1, explicacionTexto: 'La conducción eficiente reduce significativamente las emisiones contaminantes.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 75, categoria: 'Medio Ambiente', pregunta: '¿Qué vehículos tienen restricción vehicular permanente?', opciones: ['Solo diésel', 'Vehículos sin sello verde', 'Todos', 'Solo camiones'], respuestaCorrecta: 1, explicacionTexto: 'Los vehículos sin sello verde están sujetos a restricción permanente.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 76, categoria: 'Medio Ambiente', pregunta: '¿Qué es la restricción vehicular?', opciones: ['Prohibición en ciertas calles', 'Impide circular según patente', 'Límite de pasajeros', 'Horario de circulación'], respuestaCorrecta: 1, explicacionTexto: 'Impide circular a vehículos según el último dígito de su patente en episodios de contaminación.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 77, categoria: 'Medio Ambiente', pregunta: '¿Qué vehículos están exentos de restricción vehicular?', opciones: ['Ninguno', 'Vehículos eléctricos e híbridos', 'Vehículos nuevos', 'Vehículos de lujo'], respuestaCorrecta: 1, explicacionTexto: 'Los vehículos eléctricos e híbridos están exentos de restricción vehicular.', urlAudio: null, dificultad: 'dificil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 78, categoria: 'Medio Ambiente', pregunta: '¿Qué es el sello verde?', opciones: ['Permiso de circulación', 'Certificado de baja emisión catalítica', 'Seguro obligatorio', 'Revisión técnica'], respuestaCorrecta: 1, explicacionTexto: 'El sello verde certifica que el vehículo cumple con normas de emisión catalítica, contaminando menos.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 79, categoria: 'Medio Ambiente', pregunta: '¿Apagar el motor en esperas reduce la contaminación?', opciones: ['No tiene efecto', 'Sí, reduce emisiones', 'Empeora el motor', 'Solo en diésel'], respuestaCorrecta: 1, explicacionTexto: 'Apagar el motor en esperas mayores a 30 segundos reduce las emisiones y ahorra combustible.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },

  // CONDUCCIÓN DEFENSIVA (20 preguntas)
  { id: 80, categoria: 'Conducción Defensiva', pregunta: '¿Qué es la conducción defensiva?', opciones: ['Conducir agresivamente', 'Anticipar riesgos y actuar preventivamente', 'Conducir muy lento', 'Usar siempre el claxon'], respuestaCorrecta: 1, explicacionTexto: 'La conducción defensiva consiste en anticipar situaciones de riesgo y actuar preventivamente para evitar accidentes.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 81, categoria: 'Conducción Defensiva', pregunta: '¿Qué hacer al acercarse a un cruce sin semáforo?', opciones: ['Mantener velocidad', 'Reducir velocidad y mirar ambos lados', 'Acelerar para pasar rápido', 'Tocar la bocina'], respuestaCorrecta: 1, explicacionTexto: 'Reducir velocidad, mirar a ambos lados y ceder el paso según corresponda.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 82, categoria: 'Conducción Defensiva', pregunta: '¿Cómo anticipar el comportamiento de otros conductores?', opciones: ['Ignorarlos', 'Observar sus señales, velocidad y posición', 'Conducir más rápido', 'Usar el claxon constantemente'], respuestaCorrecta: 1, explicacionTexto: 'Observar las señales, velocidad y posición de otros vehículos permite anticipar sus movimientos.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 83, categoria: 'Conducción Defensiva', pregunta: '¿Qué hacer cuando un vehículo te sigue muy de cerca?', opciones: ['Frenar bruscamente', 'Aumentar tu distancia con el vehículo de adelante', 'Acelerar', 'Ignorarlo'], respuestaCorrecta: 1, explicacionTexto: 'Si te siguen muy de cerca, aumenta la distancia con el vehículo de adelante para tener más espacio de frenado.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 84, categoria: 'Conducción Defensiva', pregunta: '¿Qué es la visión periférica en la conducción?', opciones: ['Ver solo al frente', 'Ver lo que hay a los lados sin girar la cabeza', 'Usar solo los espejos', 'Ver solo el velocímetro'], respuestaCorrecta: 1, explicacionTexto: 'La visión periférica permite detectar movimiento y objetos a los lados sin girar directamente la cabeza.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 85, categoria: 'Conducción Defensiva', pregunta: '¿Cómo actuar ante peatones en la vía?', opciones: ['Tocando la bocina', 'Reducir velocidad y estar preparado para detenerse', 'Mantener velocidad', 'Cambiar de pista rápidamente'], respuestaCorrecta: 1, explicacionTexto: 'Ante peatones, reducir velocidad y estar preparado para detenerse. Los peatones siempre tienen prioridad en cruces habilitados.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 86, categoria: 'Conducción Defensiva', pregunta: '¿Qué hacer si otro conductor comete una infracción?', opciones: ['Perseguirlo', 'Mantener la calma y actuar defensivamente', 'Insultarlo', 'Bloquearle el paso'], respuestaCorrecta: 1, explicacionTexto: 'Mantener la calma, no responder agresivamente y actuar de forma defensiva para evitar incidentes.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 87, categoria: 'Conducción Defensiva', pregunta: '¿Cuál es la técnica correcta para mirar los espejos?', opciones: ['Solo al estacionar', 'Cada 5-8 segundos alternando', 'Solo al adelantar', 'No es necesario'], respuestaCorrecta: 1, explicacionTexto: 'Se debe revisar los espejos cada 5-8 segundos alternando entre retrovisor central y laterales.', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 88, categoria: 'Conducción Defensiva', pregunta: '¿Qué hacer ante un vehículo de emergencia con sirena?', opciones: ['Mantener velocidad', 'Detenerse y ceder el paso', 'Acelerar', 'Seguirlo de cerca'], respuestaCorrecta: 1, explicacionTexto: 'Debe orillarse a la derecha y detenerse para ceder el paso al vehículo de emergencia.', urlAudio: null, dificultad: 'facil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 89, categoria: 'Conducción Defensiva', pregunta: '¿Qué es el tiempo de reacción?', opciones: ['Tiempo para encender el motor', 'Tiempo entre percibir un peligro y actuar', 'Tiempo de frenado', 'Velocidad de aceleración'], respuestaCorrecta: 1, explicacionTexto: 'El tiempo de reacción es el período entre que se percibe un peligro y se ejecuta una acción (aproximadamente 1 segundo).', urlAudio: null, dificultad: 'media', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
  { id: 90, categoria: 'Conducción Defensiva', pregunta: '¿Qué hacer en caso de falla de frenos?', opciones: ['Apagar el motor inmediatamente', 'Reducir marchas progresivamente y usar freno de mano', 'Saltar del vehículo', 'Acelerar para buscar un muro'], respuestaCorrecta: 1, explicacionTexto: 'Reducir marchas progresivamente, bombear el pedal de freno, usar el freno de mano suavemente y buscar una zona segura.', urlAudio: null, dificultad: 'dificil', licenseTypes: ['clase_b', 'clase_c', 'clase_d', 'clase_e'] },
];

export function getQuestionsByLicense(licenseType: string): Question[] {
  return mockQuestions.filter(q => q.licenseTypes.includes(licenseType));
}

export function getQuestionsByCategory(categoria: string, licenseType: string = 'clase_b'): Question[] {
  return mockQuestions.filter(q => q.categoria === categoria && q.licenseTypes.includes(licenseType));
}

export function getQuestionsByDifficulty(dificultad: 'facil' | 'media' | 'dificil', licenseType: string = 'clase_b'): Question[] {
  return mockQuestions.filter(q => q.dificultad === dificultad && q.licenseTypes.includes(licenseType));
}

export function getRandomExam(count: number = 35, licenseType: string = 'clase_b'): Question[] {
  const available = getQuestionsByLicense(licenseType);
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function getEasyExam(count: number = 35, licenseType: string = 'clase_b'): Question[] {
  const easy = getQuestionsByDifficulty('facil', licenseType);
  const shuffled = [...easy].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function getHardExam(count: number = 35, licenseType: string = 'clase_b'): Question[] {
  const hard = [...getQuestionsByDifficulty('dificil', licenseType), ...getQuestionsByDifficulty('media', licenseType)];
  const shuffled = hard.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function getCategoryExam(categoria: string, licenseType: string = 'clase_b'): Question[] {
  const questions = getQuestionsByCategory(categoria, licenseType);
  return [...questions].sort(() => Math.random() - 0.5);
}

export const EXAM_CONFIG = {
  questionsPerExam: 35,
  passingScore: 0.75,
  timeLimit: 45 * 60,
  freeExamsAllowed: 1,
};
