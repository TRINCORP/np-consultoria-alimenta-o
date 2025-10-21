import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Team3DCarousel from "@/components/Team3DCarousel";
import { teamMembers } from "@/data/teamMembers";
import SEO from "@/components/SEO";

const Team = () => {
  return (
    <>
      <SEO 
        title="Nossa Equipe"
        description="Conheça a equipe de especialistas da NP Consultoria. Profissionais qualificados em nutrição, segurança alimentar e consultoria para empresas de alimentação."
        keywords="equipe nutricionistas, consultores alimentares, especialistas nutrição, profissionais alimentação, equipe NP Consultoria"
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Team3DCarousel members={teamMembers} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Team;
