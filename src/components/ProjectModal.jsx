import "./ProjectModal.css";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // 비디오 파일인지 확인하는 로직 (ProjectCard와 동일하게 맞춤)
  const isVideo = project.image && (
    project.image.endsWith('.mp4') || 
    project.image.endsWith('.webm') || 
    project.image.endsWith('.mov')
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <div className="modal-grid">
          {/* 왼쪽: 비주얼 (비디오 또는 이미지) */}
          <div className="modal-left">
            {isVideo ? (
              <video 
                src={project.image} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="modal-video"
              />
            ) : (
              <img src={project.image} alt={project.title} className="modal-img" />
            )}
            
            <div className="modal-links">
              <a href={project.github} target="_blank" rel="noreferrer">GitHub 보러가기</a>
              <a href={project.youtube} target="_blank" rel="noreferrer">시연 영상</a>
            </div>
          </div>

          {/* 오른쪽: 텍스트 정보 */}
          <div className="modal-right">
            <h3>{project.title}</h3>
            <p className="modal-sub">{project.description}</p>
            
            <div className="modal-section">
              <h4>ABOUT</h4>
              <p className="modal-text">{project.about}</p>
            </div>

            <div className="modal-section">
              <h4>STACK</h4>
              <div className="modal-stack-tags">
                {project.stack.split(' / ').map(s => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;