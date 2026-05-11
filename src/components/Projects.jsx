import './Projects.css'
import { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectModal from "./ProjectModal";

const projects = [
{
    id: 1,
    title: '고독사 방지를 위한 생활 안심 알리미',
    description: '전기·수도 사용 데이터를 학습하여 독거노인의 생활 이상을 감지하는 AI 기반 안전 서비스',
    about : '세대별 전기와 수도 사용 데이터를 기반으로 생활 패턴을 분석하는 서비스입니다 Python과 LSTM 모델을 활용해 사용 패턴을 학습하고, 평소 사용량과 다른 변화가 발생할 경우 이상 상황을 감지합니다. 일정 기준 이상 변화가 발생하면 경고 또는 위험 알림을 제공해 독거노인의 안전 상태를 확인할 수 있도록 설계했습니다.',
    image: '/arimi.mp4',
    // video: 음 나중에 추가
    stack: 'JavaScript / Node.js / MongoDB / Python / TensorFlow / LSTM / Pandas',
    github : 'https://github.com/minjeongkim652/Life-Responsive-AI',
    youtube : 'https://youtu.be/Hfc4QnICNmc?si=PkroVUxxO4fwr9jO'
  },
   {
    id: 2,
    title: '유튜브 기반 스타일 추천',
    description: '사용자의 상황에 맞는 패션 스타일을 추천하는 AI 기반 패션 추천 웹 서비스',
    about : '사용자가 어디를 가는지, 누구를 만나는지 등의 상황을 선택하면 이에 맞는 패션 스타일을 추천하는 서비스입니다. YouTube Shorts 기반 패션 영상을 제공하여 스타일 참고를 돕고, 관련된 무신사 패션 아이템도 함께 추천합니다. 또한 에겐남/테토남 스타일 성향 테스트와 이미지 기반 의류 스타일 인식 기능을 통해 다양한 패션 추천 서비스를 제공합니다.',
   image : "outfit.mp4",
    stack: 'React / Python / Flask / TensorFlow / Google Cloud',
    github:'https://github.com/minjeongkim652/givemethisoutfit',
    youtube : 'https://youtu.be/ucMNXad7Wp0?si=v3FenCk_GVw6HuS6'
  },
  {
    id: 3,
    title: 'AI 기반 소비 인식 분석 서비스 ',
    description: 'AI 기반 OCR 기술을 활용해 영수증 이미지만으로 소비 내역을 자동 인식하고 분석하는 소비 관리 서비스',
    about : '사용자가 영수증 이미지를 업로드하면 OCR을 통해 구매 항목과 금액을 자동으로 추출하여 소비 데이터를 기록하는 서비스입니다. AI 챗봇을 활용해 사용자의 소비 패턴을 분석하고 절약 방법이나 소비 개선 방향을 제안합니다. 또한 소비 데이터를 시각화하여 사용자가 자신의 소비 습관을 직관적으로 파악할 수 있도록 구성했습니다. 수기 입력 없이 소비 기록이 가능하도록 설계하여 가계부 작성의 번거로움을 줄였습니다',
    image: 'reciept.mp4',
    stack: 'React / Node.js / MongoDB',
    github : 'https://github.com/minjeongkim652/receiptlog',
    youtube : 'https://youtu.be/xscwGNni2xU?si=RnvR7aqwjxSuUtWK'
  },
  {
id: 4,
    title: '포토폴리오 웹 사이트',
    description: '전React 기반으로 제작한 개인 포트폴리오 웹사이트',
    about : '프로젝트 경험과 기술 스택, 그리고 개발자로서의 방향성을 한눈에 보여줄 수 있도록 제작한 개인 포트폴리오 웹사이트입니다. React를 기반으로 컴포넌트 단위로 구조를 설계하였으며, 프로젝트 소개와 모달 UI, 스킬 시각화, Contact 메일 전송 기능 등을 구현했습니다. 사용자 경험을 고려해 부드러운 스크롤 이동과 인터랙션 효과를 적용하였으며, 반응형 레이아웃을 통해 다양한 환경에서도 자연스럽게 동작하도록 구성했습니다.',
    image: '/4.png',
    // video: 음 나중에 추가
    stack: 'React / JavaScript / CSS / EmailJS',
    github : 'https://github.com/minjeongkim652/Life-Responsive-AI',
    youtube : 'https://youtu.be/Hfc4QnICNmc?si=PkroVUxxO4fwr9jO'
  }
]

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className="projects" id="projects">
      <h2>PROJECTS</h2>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Projects