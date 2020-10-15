import Head from 'next/head'
import useStyles from '../styles/about.style'
import Divider from '@material-ui/core/Divider'

export default function About() {
    const classes = useStyles()

    return (
        <>
        <Head>
            <title>About - Sacred Rites Jewelry</title>
            <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.quoteContainer}>
        <p className={classes.quote}>
            <span className={classes.quoteText}>
                "When the alchemist speaks of Mercurius, on the face of it he means quicksilver (Mercury), but inwardly he means the world-creating spirit concealed or imprisoned in matter.”
            </span>
            <span className={classes.qouteAuthor}>
                — C.G. JUNG
            </span>
        </p>
        </div>
        <Divider />
        <div className={classes.aboutContainer}>
            <h1 className={classes.artist}>The Artist</h1>
            <p className={classes.aboutParagraph}>
                Jessie Lycan is a Denver, CO based metalsmith, lapidary artist, and werewolf. Stemming from her love & fascination of ancient civilizations & cultures, mythology, mysticism, folklore & forces beyond the physical, she creates psychological alchemy through the fabrication & use of naturally forming stones & metal. 
            </p>
            <p className={classes.aboutParagraph}>
                Sacred Rites is therefore a manifestation out of her soul's desire to create a transformative connection between herself, the divine, & others. As well as, document her continuous journey following a path into the unknown. 
            </p>
            <p className={classes.aboutParagraph}>
                "There's a story & specific intention behind every piece I make. A part of my soul is set with each stone & solder. At times I pause to dance, sing, and sometimes even cry over my work, as a design comes to fruition. My greatest hope for my jewelry is that each piece brings its wearer the sense of empowerment & protection I felt when creating it."
            </p>
        </div>
      </>
    )
}