import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/constants/colors';
import { temarioChapters } from '@/lib/mockDatabase';
import { useUser } from '@/lib/UserContext';

const LICENSE_LABELS: Record<string, string> = {
  clase_b: 'Clase B - Vehículos Livianos',
  clase_a2: 'Clase A2 - Transporte de Pasajeros',
  clase_a4: 'Clase A4 - Transporte de Carga',
  clase_c: 'Clase C - Motocicletas',
  clase_d: 'Clase D - Maquinaria Pesada',
  clase_e: 'Clase E - Tracción Animal y Ciclos',
};

export default function TemarioScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const webTopInset = Platform.OS === 'web' ? 67 : 0;
  const { licenseType } = useUser();

  const filteredChapters = useMemo(() => {
    return temarioChapters.filter(ch =>
      !ch.licenseTypes || ch.licenseTypes.includes(licenseType)
    );
  }, [licenseType]);

  return (
    <View style={styles.container}>
      <LinearGradient colors={[Colors.primary, Colors.primaryLight]} style={[styles.header, { paddingTop: (insets.top || webTopInset) + 12 }]}>
        <Pressable onPress={() => router.back()} hitSlop={10}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </Pressable>
        <Text style={styles.headerTitle}>Aprendamos contenidos del curso</Text>
        <View style={{ width: 24 }} />
      </LinearGradient>

      <ScrollView contentContainerStyle={[styles.content, { paddingBottom: (Platform.OS === 'web' ? 34 : insets.bottom) + 20 }]}>
        <Text style={styles.subtitle}>Manual del Libro de la Conducción en Chile</Text>
        <Text style={styles.description}>Estudia todo el contenido necesario para aprobar tu examen teórico de conducir.</Text>
        <View style={styles.licenseBadge}>
          <Ionicons name="car-sport" size={14} color={Colors.primary} />
          <Text style={styles.licenseBadgeText}>{LICENSE_LABELS[licenseType] || licenseType}</Text>
        </View>

        {filteredChapters.map((chapter, idx) => (
          <Pressable
            key={chapter.id}
            onPress={() => router.push({ pathname: '/temario-detail', params: { chapterId: chapter.id } })}
            style={({ pressed }) => [styles.chapterCard, pressed && { opacity: 0.7 }]}
          >
            <View style={styles.chapterIcon}>
              <Ionicons name={chapter.icon as any} size={28} color={Colors.primary} />
            </View>
            <View style={styles.chapterContent}>
              <Text style={styles.chapterNumber}>Capitulo {idx + 1}</Text>
              <Text style={styles.chapterTitle}>{chapter.title}</Text>
              <Text style={styles.chapterSections}>{chapter.sections.length} secciones</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={Colors.textMuted} />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: { paddingBottom: 16, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  headerTitle: { color: '#fff', fontSize: 20, fontFamily: 'Nunito_700Bold' },
  content: { padding: 16 },
  subtitle: { fontSize: 18, fontFamily: 'Nunito_700Bold', color: Colors.text, marginBottom: 4 },
  description: { fontSize: 14, fontFamily: 'Nunito_400Regular', color: Colors.textSecondary, marginBottom: 8, lineHeight: 22, textAlign: 'justify' as const },
  licenseBadge: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: '#eef2ff', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, alignSelf: 'flex-start', marginBottom: 16 },
  licenseBadgeText: { fontSize: 12, fontFamily: 'Nunito_700Bold', color: Colors.primary },
  chapterCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.surface, padding: 16, borderRadius: 14, marginBottom: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4, elevation: 2 },
  chapterIcon: { width: 52, height: 52, borderRadius: 26, backgroundColor: Colors.surfaceSecondary, justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  chapterContent: { flex: 1 },
  chapterNumber: { fontSize: 11, fontFamily: 'Nunito_700Bold', color: Colors.primary, textTransform: 'uppercase' as const, letterSpacing: 1 },
  chapterTitle: { fontSize: 16, fontFamily: 'Nunito_700Bold', color: Colors.text },
  chapterSections: { fontSize: 13, fontFamily: 'Nunito_400Regular', color: Colors.textSecondary },
});
