import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/constants/colors';

// ─────────────────────────────────────────────
// Componentes reutilizables
// ─────────────────────────────────────────────

function SectionHeader({ icon, title, subtitle }: { icon: keyof typeof Ionicons.glyphMap; title: string; subtitle?: string }) {
  return (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionIconBadge}>
        <Ionicons name={icon} size={22} color={Colors.primary} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {subtitle ? <Text style={styles.lastUpdated}>{subtitle}</Text> : null}
      </View>
    </View>
  );
}

function Card({ number, title, children }: { number?: string; title: string; children: React.ReactNode }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        {number ? (
          <View style={styles.numberPill}>
            <Text style={styles.numberPillText}>{number}</Text>
          </View>
        ) : null}
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      {children}
    </View>
  );
}

function Bullet({ icon = 'checkmark-circle', text }: { icon?: keyof typeof Ionicons.glyphMap; text: string }) {
  return (
    <View style={styles.bulletRow}>
      <Ionicons name={icon} size={16} color={Colors.primary} style={styles.bulletIcon} />
      <Text style={styles.bulletText}>{text}</Text>
    </View>
  );
}

function PermissionCard({
  icon,
  name,
  required,
  purpose,
  detail,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  name: string;
  required: boolean;
  purpose: string;
  detail: string;
}) {
  return (
    <View style={styles.permissionCard}>
      <View style={styles.permissionHeader}>
        <View style={styles.permissionIconWrap}>
          <Ionicons name={icon} size={20} color={Colors.primary} />
        </View>
        <Text style={styles.permissionName}>{name}</Text>
        <View style={[styles.badge, required ? styles.badgeRequired : styles.badgeOptional]}>
          <Text style={[styles.badgeText, required ? styles.badgeTextRequired : styles.badgeTextOptional]}>
            {required ? 'Requerido' : 'Opcional'}
          </Text>
        </View>
      </View>
      <Text style={styles.permissionPurpose}>{purpose}</Text>
      <Text style={styles.permissionDetail}>{detail}</Text>
    </View>
  );
}

// ─────────────────────────────────────────────
// Pantalla Legal
// ─────────────────────────────────────────────

export default function LegalScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const webTopInset = Platform.OS === 'web' ? 67 : 0;

  const openMail = () => Linking.openURL('mailto:practiquemos.cl@gmail.com');

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.primary, Colors.primaryDark]}
        style={[styles.header, { paddingTop: (insets.top || webTopInset) + 12 }]}
      >
        <Pressable onPress={() => router.back()} hitSlop={10}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </Pressable>
        <Text style={styles.headerTitle}>Legal y Privacidad</Text>
        <View style={{ width: 24 }} />
      </LinearGradient>

      <ScrollView
        contentContainerStyle={[styles.content, { paddingBottom: (Platform.OS === 'web' ? 34 : insets.bottom) + 24 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Intro ── */}
        <View style={styles.introBanner}>
          <Ionicons name="shield-checkmark" size={28} color={Colors.primary} />
          <Text style={styles.introText}>
            Tu privacidad es importante para nosotros. Aquí te explicamos con total transparencia qué datos usamos,
            qué permisos solicita la app y cuáles son tus derechos.
          </Text>
        </View>

        {/* ══════════ PERMISOS DE LA APLICACIÓN ══════════ */}
        <SectionHeader
          icon="key"
          title="Permisos de la aplicación"
          subtitle="Qué solicita la app y por qué"
        />
        <Text style={styles.sectionIntro}>
          Practiquemos.cl solicita únicamente los permisos estrictamente necesarios para funcionar. Nunca pedimos
          acceso a tu cámara, micrófono, contactos ni ubicación. Puedes revisar o revocar cualquier permiso opcional
          desde la configuración de tu dispositivo en cualquier momento.
        </Text>

        <PermissionCard
          icon="globe-outline"
          name="Acceso a Internet"
          required
          purpose="Sincronizar tu cuenta, progreso y contenido de estudio."
          detail="Se utiliza para iniciar sesión, descargar las preguntas actualizadas del examen teórico, guardar tus resultados en la nube y procesar compras de planes Premium. Sin conexión, algunas funciones quedan limitadas."
        />

        <PermissionCard
          icon="notifications-outline"
          name="Notificaciones push"
          required={false}
          purpose="Recordatorios de estudio y avisos sobre tu cuenta."
          detail="Te enviamos recordatorios para mantener tu racha de práctica y avisos importantes (por ejemplo, vencimiento de tu plan Premium). Puedes desactivarlas en cualquier momento desde los ajustes de tu dispositivo o desde tu perfil, sin afectar el resto de la app."
        />

        <PermissionCard
          icon="save-outline"
          name="Almacenamiento local"
          required
          purpose="Guardar tu sesión y datos de práctica en el dispositivo."
          detail="Almacenamos localmente tu sesión iniciada, preferencias y caché de preguntas para que la app cargue rápido y puedas repasar contenido ya descargado. Estos datos se eliminan al desinstalar la aplicación o cerrar sesión."
        />

        <PermissionCard
          icon="card-outline"
          name="Compras dentro de la app"
          required={false}
          purpose="Adquirir planes Premium de 10 o 30 días."
          detail="En iOS las compras se procesan mediante la App Store de Apple; en Android y web, mediante Mercado Pago. Practiquemos.cl nunca ve ni almacena los datos de tu tarjeta: el pago ocurre íntegramente en la plataforma segura del proveedor."
        />

        <View style={styles.noteBox}>
          <Ionicons name="information-circle" size={18} color={Colors.primary} />
          <Text style={styles.noteText}>
            Para gestionar permisos: en iOS ve a Ajustes {'>'} Practiquemos.cl; en Android, a Configuración {'>'}{' '}
            Aplicaciones {'>'} Practiquemos.cl {'>'} Permisos.
          </Text>
        </View>

        <View style={styles.divider} />

        {/* ══════════ POLÍTICA DE PRIVACIDAD ══════════ */}
        <SectionHeader icon="lock-closed" title="Política de Privacidad" subtitle="Última actualización: Marzo 2026" />

        <Card number="1" title="Datos que recolectamos">
          <Text style={styles.body}>Al crear una cuenta recopilamos la siguiente información personal:</Text>
          <Bullet icon="person-outline" text="Nombre completo" />
          <Bullet icon="mail-outline" text="Correo electrónico" />
          <Bullet icon="at-outline" text="Nombre de usuario" />
          <Bullet icon="car-outline" text="Tipo de licencia seleccionada" />
          <Bullet icon="stats-chart-outline" text="Progreso en exámenes y resultados de práctica" />
          <Bullet icon="star-outline" text="Preguntas guardadas como favoritas" />
        </Card>

        <Card number="2" title="Cómo usamos tus datos">
          <Bullet text="Personalizar tu experiencia de aprendizaje" />
          <Bullet text="Guardar tu progreso y estadísticas" />
          <Bullet text="Gestionar tu cuenta y plan de suscripción" />
          <Bullet text="Mejorar nuestros servicios y contenido educativo" />
          <Bullet text="Comunicarnos contigo sobre tu cuenta" />
        </Card>

        <Card number="3" title="Cómo almacenamos tus datos">
          <Text style={styles.body}>
            Tus datos se almacenan de forma segura en servidores protegidos. Las contraseñas se cifran utilizando
            algoritmos de hashing seguros (bcrypt). No almacenamos información de tarjetas de crédito ni datos
            financieros directamente; los pagos son procesados por plataformas de pago seguras de terceros.
          </Text>
        </Card>

        <Card number="4" title="Tus derechos">
          <Bullet text="Acceder a tus datos personales desde tu perfil" />
          <Bullet text="Solicitar la corrección de tus datos" />
          <Bullet text="Eliminar tu cuenta y todos los datos asociados en cualquier momento" />
          <Bullet text="Exportar tus datos de progreso" />
          <Bullet text="Retirar tu consentimiento para el uso de tus datos" />
        </Card>

        <Card number="5" title="Eliminación de cuenta">
          <Text style={styles.body}>
            Puedes eliminar tu cuenta en cualquier momento desde la pantalla de perfil. Al eliminarla, se borrarán
            permanentemente todos tus datos, incluyendo resultados de exámenes, favoritos y progreso por categoría.
            Esta acción es irreversible.
          </Text>
        </Card>

        <Card number="6" title="Compartir datos con terceros">
          <Text style={styles.body}>
            No vendemos ni compartimos tu información personal con terceros, excepto con los proveedores de servicios
            de pago necesarios para procesar transacciones y con los servicios de infraestructura necesarios para
            operar la aplicación.
          </Text>
        </Card>

        <View style={styles.divider} />

        {/* ══════════ TÉRMINOS DE SERVICIO ══════════ */}
        <SectionHeader icon="document-text" title="Términos de Servicio" subtitle="Última actualización: Marzo 2026" />

        <Card number="1" title="Aceptación de los términos">
          <Text style={styles.body}>
            Al crear una cuenta y utilizar Practiquemos.cl, aceptas estos términos de servicio y nuestra política de
            privacidad. Si no estás de acuerdo, no debes utilizar la aplicación.
          </Text>
        </Card>

        <Card number="2" title="Descripción del servicio">
          <Text style={styles.body}>
            Practiquemos.cl es una plataforma educativa diseñada para ayudarte a preparar el examen teórico de licencia
            de conducir en Chile. El contenido incluye preguntas de práctica, explicaciones y material de estudio.
          </Text>
        </Card>

        <Card number="3" title="Cuentas de usuario">
          <Bullet text="Debes proporcionar información veraz al registrarte" />
          <Bullet text="Eres responsable de mantener la confidencialidad de tu contraseña" />
          <Bullet text="No debes compartir tu cuenta con otras personas" />
          <Bullet text="Nos reservamos el derecho de suspender cuentas que violen estos términos" />
        </Card>

        <Card number="4" title="Planes y pagos">
          <Bullet text="El plan gratuito permite un número limitado de exámenes diarios" />
          <Bullet text="Los planes Premium otorgan acceso completo por 10 o 30 días" />
          <Bullet icon="logo-apple" text="Los pagos en iOS se procesan a través de la App Store de Apple" />
          <Bullet icon="card-outline" text="Los pagos en Android y web se procesan a través de Mercado Pago" />
          <Bullet text="Los precios están sujetos a cambios con previo aviso" />
          <Bullet
            icon="refresh-circle-outline"
            text="Los planes Premium no son suscripciones con renovación automática; se adquieren como compras únicas por un período determinado"
          />
        </Card>

        <Card number="5" title="Gestión de compras y reembolsos">
          <Text style={styles.subheading}>Para usuarios de iOS</Text>
          <Bullet text="Las compras se procesan a través de tu cuenta de Apple y están sujetas a los términos de Apple" />
          <Bullet text="Para gestionar tus compras, ve a Ajustes > tu nombre > Suscripciones en tu dispositivo iOS" />
          <Bullet text="Puedes restaurar compras previas desde la pantalla de Packs Premium dentro de la aplicación" />
          <Bullet text="Los reembolsos deben solicitarse directamente a Apple a través de reportaproblem.apple.com" />
          <Text style={[styles.subheading, { marginTop: 12 }]}>Para usuarios de Android y Web</Text>
          <Bullet text="Las compras se procesan a través de Mercado Pago" />
          <Bullet text="Para consultas sobre pagos o reembolsos, contáctanos en practiquemos.cl@gmail.com" />
        </Card>

        <Card number="6" title="Contenido educativo">
          <Text style={styles.body}>
            El contenido de Practiquemos.cl es de carácter educativo y complementario. No garantizamos la aprobación
            del examen oficial. Las preguntas se basan en el material oficial pero pueden diferir del examen real.
          </Text>
        </Card>

        <Card number="7" title="Propiedad intelectual">
          <Text style={styles.body}>
            Todo el contenido, diseño, código y marca de Practiquemos.cl son propiedad de sus creadores. No está
            permitido copiar, reproducir o distribuir el contenido sin autorización previa.
          </Text>
        </Card>

        <Card number="8" title="Limitación de responsabilidad">
          <Text style={styles.body}>
            Practiquemos.cl se ofrece "tal cual". No nos hacemos responsables por interrupciones del servicio, pérdida
            de datos o resultados en el examen oficial.
          </Text>
        </Card>

        {/* ── Contacto ── */}
        <Pressable style={styles.contactCard} onPress={openMail}>
          <View style={styles.contactIconWrap}>
            <Ionicons name="mail" size={22} color="#fff" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.contactTitle}>¿Tienes dudas?</Text>
            <Text style={styles.contactSubtitle}>Escríbenos a practiquemos.cl@gmail.com</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={Colors.textMuted} />
        </Pressable>

        <Text style={styles.copyright}>© 2026 Practiquemos.cl — Todos los derechos reservados</Text>
      </ScrollView>
    </View>
  );
}

// ─────────────────────────────────────────────
// Estilos
// ─────────────────────────────────────────────

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: {
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: { color: '#fff', fontSize: 20, fontFamily: 'Nunito_700Bold' },
  content: { padding: 20 },

  // Intro
  introBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: Colors.primary + '12',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: Colors.primary + '25',
  },
  introText: { flex: 1, fontSize: 13, fontFamily: 'Nunito_400Regular', color: Colors.textSecondary, lineHeight: 20 },

  // Encabezados de sección
  sectionHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 12 },
  sectionIconBadge: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: Colors.primary + '15',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: { fontSize: 21, fontFamily: 'Nunito_800ExtraBold', color: Colors.text },
  lastUpdated: { fontSize: 12, fontFamily: 'Nunito_400Regular', color: Colors.textMuted, marginTop: 2 },
  sectionIntro: {
    fontSize: 14,
    fontFamily: 'Nunito_400Regular',
    color: Colors.textSecondary,
    lineHeight: 22,
    marginBottom: 16,
  },

  // Tarjetas
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 },
  numberPill: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberPillText: { color: '#fff', fontSize: 13, fontFamily: 'Nunito_800ExtraBold' },
  cardTitle: { flex: 1, fontSize: 16, fontFamily: 'Nunito_700Bold', color: Colors.text },
  subheading: { fontSize: 14, fontFamily: 'Nunito_700Bold', color: Colors.primary, marginBottom: 6 },
  body: { fontSize: 14, fontFamily: 'Nunito_400Regular', color: Colors.textSecondary, lineHeight: 22, marginBottom: 4 },

  // Bullets
  bulletRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 8, marginTop: 6 },
  bulletIcon: { marginTop: 3 },
  bulletText: { flex: 1, fontSize: 14, fontFamily: 'Nunito_400Regular', color: Colors.textSecondary, lineHeight: 21 },

  // Permisos
  permissionCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  permissionHeader: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 8 },
  permissionIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: Colors.primary + '15',
    alignItems: 'center',
    justifyContent: 'center',
  },
  permissionName: { flex: 1, fontSize: 15, fontFamily: 'Nunito_700Bold', color: Colors.text },
  badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  badgeRequired: { backgroundColor: Colors.primary + '18' },
  badgeOptional: { backgroundColor: Colors.border },
  badgeText: { fontSize: 11, fontFamily: 'Nunito_700Bold' },
  badgeTextRequired: { color: Colors.primary },
  badgeTextOptional: { color: Colors.textMuted },
  permissionPurpose: { fontSize: 14, fontFamily: 'Nunito_700Bold', color: Colors.textSecondary, marginBottom: 4 },
  permissionDetail: { fontSize: 13, fontFamily: 'Nunito_400Regular', color: Colors.textSecondary, lineHeight: 20 },

  // Nota informativa
  noteBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    backgroundColor: Colors.primary + '0D',
    borderRadius: 12,
    padding: 12,
    marginTop: 4,
  },
  noteText: { flex: 1, fontSize: 12, fontFamily: 'Nunito_400Regular', color: Colors.textSecondary, lineHeight: 18 },

  divider: { height: 1, backgroundColor: Colors.border, marginVertical: 28 },

  // Contacto
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  contactIconWrap: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactTitle: { fontSize: 15, fontFamily: 'Nunito_700Bold', color: Colors.text },
  contactSubtitle: { fontSize: 12, fontFamily: 'Nunito_400Regular', color: Colors.textMuted, marginTop: 2 },

  copyright: {
    fontSize: 12,
    fontFamily: 'Nunito_400Regular',
    color: Colors.textMuted,
    textAlign: 'center',
    marginTop: 24,
  },
});
