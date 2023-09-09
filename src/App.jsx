import styles from './App.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react'

const personalWebsite = () => {
  // animations
  const [gitHovering, setGitHovering] = useState(false)

  // form
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [msg,setMsg] = useState('')

  // form popup
  const [popup,setPopup] = useState(false)
  const [cout,setCout] = useState(5)

  useEffect(() => {
    let interval
    if(popup){
      interval = setInterval(()=> {
        if(cout <= 0){
          setPopup(false)
          return () => clearInterval(interval)
        }
        setCout(cout-1)
      }, 1000)
    } else return () => clearInterval(interval)
  },[popup,cout])

    return (
        <div className = {styles.container}>
            <section style={{"backgroundColor": "#282626"}}>
                <nav> <FontAwesomeIcon size={"2x"} icon={faBars} style={{color: "#ffffff"}} /> 
                    <div className={styles.typingContainer}>
                        <div className={styles.typingName}>
                            {/* <span className={styles.typingText}>Tucker Judge</span> <span className={styles.typingCaret}>_</span> */}
                            <span>Tucker Judge</span>
                        </div>
                    </div>
                </nav>
                <div style = {{"display": "block", "marginTop":"3vh"}}>
                    <ul>
                        {/* approximate */}
                        <a style={{"color":"white"}}href="mailto:tucker.judge@yahoo.com">
                          <li> <FontAwesomeIcon className={styles.mail} icon={faEnvelope} size="2x"/> </li>
                        </a>
                        <li>
                          <FontAwesomeIcon icon={faGithub} size="2x"
                            onMouseEnter={(() => setGitHovering(true))}
                            onMouseLeave={(() => setGitHovering(false))}
                            // yeah not really good for mobile huh
                            bounce = {gitHovering ? true : false}
                          />
                        </li>
                        <li><FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size="2x"/></li>
                    </ul>

                    <div>
                      <div className={styles.headshot}>
                        image placeholder -- is this really going to be a gray scaled image???? -- I NEED A SUIT
                      </div>

                      <div className={styles.aboutMe}>
                        <p>le plus vie je devons fait, actuellement fait moi veux a mourir. Cela un jour de bonne mais encore.</p>
                      </div>

                    </div>
                </div>
                <div style={{"textAlign":"center", "paddingBottom":"40px", "height": "100%"}}>
                  <span className={styles.affiliationHeader}>
                    <p style={{"marginRight":"25px"}}>❮</p>
                    <h2 style={{"textAlign":"center"}}>Engagements</h2>
                    <p style={{"marginLeft":"25px"}}>❯</p>
                  </span>
                  
                  <section className={styles.affiliationBg}>
                    
                    <h3>Red Cross</h3>
                      <div className={styles.imageBg}>
                        <div className={styles.imageContainer}>
                          <img className={styles.affiliationImg} src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Red_Cross.png"></img>
                        </div>
                      </div>
                    <button>Read more</button>
                    
                    <div style={{"padding":"0 10px","backgroundColor": "white", "width": "75%", "margin": "auto"}}>
                      <h3 style={{"marginBottom": "0","width": '100%', 'textAlign':"center", "fontSize": "26px"}}>Responsibilities</h3>
                      <ul>
                        <li>
                          Developed the organization's website using HTML, CSS, JavaScript, and React.
                        </li>
                        <li>
                          Identified and fixed website issues for optimal user experience.
                        </li>
                        {/* no idea bruv shoulda made it in rust*/}
                        <li style={{"marginBottom":"15px"}}>
                          Ensured accessibility to all users, following WCAG 2.1 guidelines.
                        </li>
                      </ul>
                    </div>

                  </section>

                </div>
            </section>
            <section className={styles.projects}>
              <h2 style={{"margin": "0 auto 20px","width": "250px","borderRight":"2px solid white", "borderLeft":"2px solid white"}}>Personal Work</h2>
              <div className={styles.firstProject}>
                <h2>Veil</h2>
                <img height="50" width="50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJYctcCNdEo8tPvMXckYVI7kehiKtMd6sBRQ&usqp=CAU"></img>
                <a style={{"marginTop":"5px", "fontSize": "20px"}} href="https://www.wikipedia.org">Veil.com</a>
                <h3 style={{"marginBottom":'10px'}} >Mission Statement</h3>
                <p style={{"lineHeight":"1.5", "margin": "0px 30px"}}>
                  To connect people with new cultural experiences - one language at a time.
                  </p>
                <div>
                  <h3>Vocabulary</h3>
                  <p style={{"margin": "0 30px", "textIndent": "15px", "fontSize": "14px"}}>
                    Curriculum build for a concise form of knowing what you need to get better at and allowing you to focus your efforts there.
                    You can learn vocab by the frequency you will encounter
                    it, frequency its encountered in books and other forms of media, 
                    as well as word famillies, and similar forms of 
                    learning that have been researched and absorbed from polyglots personal learning methods.</p>
                  <h3>Speed</h3>
                  <p style={{"margin": "0 30px 10px", "textIndent": "15px", "fontSize": "14px"}}>
                    Lessons are made for self-paced learners and designed to be used on the go as well as home. 
                    Veil focuses on the ability to immerse yourself in the language and culture quickly.
                    You can expect to utilize reading, writing, and speaking with our algorithm comfortably alongside you the whole step of the way.
                  </p>
                  {/* <h3>Conversational Practice</h3>
                  <p style={{"margin": "0 30px 10px", "textIndent": "15px", "fontSize": "14px"}}>
                    Practicing your new language is important and can be 
                    incredibly daunting getting started. 
                    Luckily, Veil communicates with you in real time 
                    through speech and text. You may respond in text 
                    or speech switching your focus as you learning.
                    This will certainly not make you fluent, however, it will be a kind way to build real skills and confidence levels
                  </p> */}
                </div>

                <div className={styles.probsSolutionsContainer}>
                </div>
              </div>
            </section>

            <section className={styles.formContainer} style={{"backgroundColor": "white"}}>
                {popup && 
                <div className={styles.popupContainer}>
                  <div className={styles.insidePop}>
                    <h2>Thank you, {name}</h2>
                    <p>Your message has been received! You can expect an answer on Tuesday or Thursday during business hours CDT</p>
                    <p>If you forgot something or have a seperate inquiry to make, feel free to leave another message. Goodbye!</p>
                    <p>{cout} seconds remaining</p>
                  </div>
                </div>
                }
                <form className={styles.endForm} onSubmit={(e)=> {
                  e.preventDefault();
                  setMsg('');
                  setEmail('');
                  setName('');
                  setPopup(true);
                  } 
                }>
                    <label style={{"fontSize":"22px","color": "black", "margin": "20px"}}>For Further Inquiries</label>
                    <input style={{"marginTop": "0px"}}onChange={(e)=>setName(e.target.value)} placeholder="Your name" value={name}></input>
                    <input onChange={(e)=>setEmail(e.target.value)} placeholder="Your email" value={email}></input>
                    <div>
                      <textarea maxLength={ 500 } style={{"height": "200px"}} onChange={(e)=>setMsg(e.target.value)} placeholder="Message..." value={msg}></textarea>
                      <p>{ 500 - msg.length } characters left</p>
                    </div>
                    <button type="submit" disabled={!(msg && name && email)}>Submit</button>
                </form>
            </section>

            {/* <p className={styles.takingBreak}>brief interlude break<div style={{'color': "yellow","marginTop":"10px"}}>les dieux du ciel vont me tue</div></p> */}
        </div>
    )
}

export default personalWebsite

// love this a lot for the desktop site

// <ul className={styles.probsSolutionsList}>
//                     <li>
//                       testing
//                     </li>
//                     <li>
//                       testing
//                     </li>
//                   </ul>
//                   <div>
//                     {/* {content[content]} */}
//                     attempting something here bear with  me
//                   </div>
//                   <ul className={styles.probsSolutionsList}>
//                     <li>
//                       testing
//                     </li>
//                     <li>
//                       testing
//                     </li>
//                   </ul>

//  Accompanying css ----------------------------------------------------------------

// .probsSolutionsContainer { 
//   display: flex;
//   flex-direction: row;
//   width: 100%
// }
// .probsSolutionsList {
//   display: flex;
//   flex-direction: column;
//   width: 10%;
// }
