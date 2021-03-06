import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'

//Data
import projectData from '../data/projectData'

// Components
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import BuildIcon from '@mui/icons-material/Build';


// Styles
import styles from '../styles/Home.module.css'

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);
  const [index, setIndex] = useState(0);
  const {title, image, url, build, target, description} = projectData[index];

  const heading = "Thomas Hitchcock's Projects";

  return (
    <div>
      <Head>
        <title>Thomas Hitchcock</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl">
        {!showProjects &&
        <Paper elevation={3} className={styles.projectTitle}>
          {heading}
          <Button variant="contained" size="large" onClick={() => setShowProjects(true)}>Begin</Button>
        </Paper>}
        {showProjects &&
        <Paper elevation={3} className={styles.projectContainer}>
          <Link href={target} passHref={true}>
            <a>
              <img 
                className={styles.image} 
                src={image}
                alt=""
              />
            </a>
          </Link>
          <div className={styles.projectInfo}>
            <div className={styles.projectInfoLine}>
              <div className={styles.title}>{title}</div>
              <Tooltip title={build}>
                <Button sx={{ m: 1 }}><BuildIcon color="primary" /></Button>
              </Tooltip>
            </div>
            <div className={styles.projectInfoLine}>
              <div>{url}</div>
              <Button variant="contained" size="small">
                <Link href={target} passHref={true}><a>Visit</a></Link>
              </Button>
            </div>
            <div className={styles.description}>{description}</div>
            <div className={styles.buttonContainer}>
              {index > 0 && 
              <Button variant="contained" size="small" onClick={() => {index < projectData.length + 1 && setIndex(index - 1);}}>Previous</Button>}
              {index <= 4 &&
              <Button variant="contained" size="small" onClick={() => {index < projectData.length - 1 && setIndex(index + 1);}}>Next</Button>}
            </div>
          </div>
        </Paper>}
      </Container>
    </div>
  )
}
