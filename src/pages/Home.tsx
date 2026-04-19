import Hero from '../components/Hero';
import ChallengesSolutions from '../components/ChallengesSolutions';
import BenefitsGrid from '../components/BenefitsGrid';
import ProcessFlow from '../components/ProcessFlow';
import StatsStrip from '../components/StatsStrip';
import EquipmentSelector from '../components/EquipmentSelector';
import ProjectGallery from '../components/ProjectGallery';
import Testimonials from '../components/Testimonials';
import TrustBanner from '../components/TrustBanner';

interface HomeProps {
    onOpenModal: () => void;
}

export default function Home({ onOpenModal }: HomeProps) {
    return (
        <>
            <Hero />
            
            <StatsStrip />
            <EquipmentSelector />
            <ProjectGallery />
            <ChallengesSolutions />
            <BenefitsGrid />
            <ProcessFlow onOpenModal={onOpenModal} />
            <Testimonials />
            <TrustBanner />
        </>
    );
}
