import "./ProjectCard.css";

function ProjectCard({ project, onClick }) {
  // 스택 데이터가 없을 경우를 대비한 방어 코드
  const stackArray = project.stack ? project.stack.split(' / ') : [];

  // 파일 확장자를 확인해서 비디오인지 이미지인지 판단하는 함수
  const isVideo = project.image && (
    project.image.endsWith('.mp4') || 
    project.image.endsWith('.webm') || 
    project.image.endsWith('.mov')
  );

  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <div className="media-container">
        {isVideo ? (
          /* 🎥 비디오일 때: 움짤처럼 자동 재생 */
          <video 
            src={project.image}      /* public 폴더 내 경로 */
            autoPlay 
            loop 
            muted 
            playsInline 
            className="project-media"
          />
        ) : (
          /* 🖼️ 이미지일 때 */
          <img 
            src={project.image} 
            alt={project.title} 
            className="project-media" 
          />
        )}

        {/* 마우스 올렸을 때 나타나는 정보 레이어 */}
        <div className="overlay">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="stack-tags">
            {stackArray.map((stack, index) => (
              <span key={index} className="stack-tag">
                {stack}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;