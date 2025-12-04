import { Hero } from '@/components/sections/Hero';
import { FeaturedServicesSection } from '@/components/sections/FeaturedServicesSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ImageContentSection } from '@/components/sections/ImageContentSection';
import { CommunicationServices } from '@/components/sections/CommunicationServices';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { EquipmentSection } from '@/components/sections/EquipmentSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { ClientLogosSection } from '@/components/sections/ClientLogosSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { fetchTestimonials } from '@/lib/wordpress';
import { convertAllTestimonials } from '@/lib/wordpress-adapters';

export default async function Home() {
  // Récupérer les témoignages depuis WordPress
  // Note: WordPress désactivé par défaut. Activez-le en définissant NEXT_PUBLIC_WORDPRESS_URL dans .env.local
  let testimonials;

  /*
   * Pour activer WordPress:
   * 1. Créez un fichier .env.local
   * 2. Ajoutez: NEXT_PUBLIC_WORDPRESS_URL=https://votre-wordpress-reel.com/wp-json/wp/v2
   * 3. Décommentez le code ci-dessous
   */

  /*
  try {
    const wpTestimonials = await fetchTestimonials();
    testimonials = convertAllTestimonials(wpTestimonials);
  } catch (error) {
    console.error('Erreur lors de la récupération des témoignages:', error);
    // Le composant utilisera les données de fallback
  }
  */

  return (
    <main>
      <Hero />
      <FeaturedServicesSection />
      <ServicesSection />
      <ImageContentSection />
      <CommunicationServices />
      <WhyChooseUs />
      <EquipmentSection />
      <ProcessSection />
      <ClientLogosSection />
      <Testimonials testimonials={testimonials} />
    </main>
  );
}