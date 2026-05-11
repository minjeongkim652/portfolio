import './About.css'

function About() {
  const skillData = [
    { category: "Frontend", skills: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"] },
    { category: "Backend", skills: ["Node.js", "Java", "Python"] },
    { category: "Database & Tool", skills: ["MySQL", "MongoDB", "Git"] },
  ];

  return (
    <section className="about">
      <h2>ABOUT ME</h2>
      <div className="about-container">
        {/* 왼쪽: 자기소개 & 인적사항 */}
        <div className="about-left">
          <div className="about-me-text">
            <p className="main-quote">"작은 디테일이 만드는 큰 차이, 사용자 경험을 우선하는 개발자입니다."</p>
            <p className="sub-description">
              편리한 UI와 자연스러운 상호작용이 서비스의 완성도를 결정한다고 믿습니다.
              사용자의 입장에서 흐름을 고민하며 화면의 디테일을 채워 나갑니다.
            </p>
          </div>
          
          <div className="info-list">
            <div className="info-item"><span>NAME</span> Minjeong Kim</div>
            <div className="info-item"><span>BIRTH</span> 2001.02.05</div>
            <div className="info-item"><span>EMAIL</span> kmj020513@gmail.com</div>
            <div className="link-group">
              <a href="https://github.com/minjeong" target="_blank" rel="noreferrer" className="github-link">GITHUB</a>
              <a href="https://www.youtube.com/channel/UCVaoiPdIJmrSONxAa_PnIYw" target="_blank" rel="noreferrer" className="youtube-link">YOUTUBE</a>
            </div>
          </div>
        </div>

        {/* 오른쪽: 스킬 (막대기 대신 깔끔한 태그형) */}
        <div className="about-right">
          <h3>My Skills</h3>
          {skillData.map((group) => (
            <div key={group.category} className="skill-category">
              <h4>{group.category}</h4>
              <div className="skill-tags">
                {group.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;