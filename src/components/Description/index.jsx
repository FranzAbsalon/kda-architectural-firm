import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function Description() {

    const phrase = "Motivated and detail-oriented Junior Frontend Developer with a strong foundation in web development and UI/UX design. Passionate about creating user-centric, responsive, and visually appealing applications while actively expanding skills in backend development to transition into a Fullstack Engineer role. Skilled in collaborating with cross-functional teams, solving complex problems, and adapting to new challenges. Eager to contribute to dynamic environments that prioritize growth, learning, and innovation, while seeking opportunities to enhance technical expertise and professional development.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
