import nataliaMingatto from "@/assets/team/Natalia_Mingatto.png";
import bruna from "@/assets/team/bruna.png";
import paty from "@/assets/team/paty2.png";
import sara from "@/assets/team/sara.png";
import cristiane from "@/assets/team/cristiane.png";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  specializations: string[];
  social: {
    email?: string;
    linkedin?: string;
    instagram?: string;
    facebook?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Natalia Mingato",
    role: "Sócia/Nutricionista",
    bio: "Nutricionista com 8 anos de experiência em alimentação coletiva e sólida atuação em alimentação escolar. Atualmente cursando pós graduação em gestão de alimentação. É responsável pela gestão dos processos operacionais dos clientes, garantindo padronização segurança e qualidade em cada atendimento.",
    image: nataliaMingatto,
    specializations: ["Nutrição Escolar", "Refeições transportadas", "Manual de boas práticas e pop's", "Treinamento de boas práticas", "Palestras", "Auditoria"],
    social: {
      email: "ana.costa@npnutricao.com",
      linkedin: "#",
      instagram: "https://www.instagram.com/np.consultoriaalimentos/",
      facebook: "#"
    }
  },
  {
    id: 2,
    name: "Bruna Elis Vieira",
    role: "Consultora de alimentos, Desenvolvimento de arte visual",
    bio: "Estudante de nutrição e formada em marketing, Bruna é responsável por visitas técnicas, elaboração de documentos e pela criação de materiais visuais que facilitam a comunicação com clientes e colaboradores. Sua atuação é marcada pelo cuidado com os detalhes e criatividade.",
    image: bruna,
    specializations: ["Marketing", "Visitas técnicas", "Criação de arte visual"],
    social: {
      email: "roberto.silva@npnutricao.com",
      linkedin: "#",
      instagram: "https://www.instagram.com/np.consultoriaalimentos/"
    }
  },
  {
    id: 3,
    name: "Patricia Rossetti",
    role: "Sócia/Nutricionista",
    bio: "Nutricionista pós graduada em vigilância sanitária e qualidade dos alimentos, especialista em rotulagem e assuntos regulatórios. Atua diretamente nas supervisão das operações, assegurando que os serviços estejam sempre alinhados às normas técnicas e legais vigentes",
    image: paty,
    specializations: ["Documentos regulatórios", "Rotulagem de alimentos", "Controles Sanitários"],
    social: {
      email: "carla.ribeiro@npnutricao.com",
      instagram: "https://www.instagram.com/np.consultoriaalimentos/",
      facebook: "#"
    }
  },
  {
    id: 4,
    name: "Sara Mingatti Brigído",
    role: "Consultora de alimentos",
    bio: "Estudante de nutrição. Sara integra a equipe como consultora responsável por visitas técnicas e apoio nos processo de implementação das boas práticas. Seu comprometimento e atenção no atendimento tornam a experiência do cliente mais segura e eficiente.",
    image: sara,
    specializations: ["Boas práticas", "Relatórios técnicos", "Visitas técnicas"],
    social: {
      email: "sara.brigido@npnutricao.com",
      linkedin: "#"
    }
  },
  {
    id: 5,
    name: "Cristiane Mingato",
    role: "Consultora de alimentos e supervisora geral",
    bio: "Com mais de 18 anos de experiência em gestão de pessoas e liderança, é responsável pela supervisão das consultoras e clientes atendidas, além de atuar diretamente na gestão dos projetos e na condução dos cursos de liderança. Seu trabalho é fundamental para a evolução das equipes nos estabelecimentos atendidos.",
    image: cristiane,
    specializations: ["Gestão de pessoas", "Curso de liderança", "Recursos humanos"],
    social: {
      email: "sara.brigido@npnutricao.com",
      linkedin: "#"
    } 
  }
];
