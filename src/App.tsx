import React from 'react'
import { PageScroller } from './components/scroller/PageScroller'
import { AuthProvider } from './provider/AuthProvider'
import { AboutMe } from './sections/AboutMe'
import { Contact } from './sections/Contact'
import { Experiences } from './sections/Experiences'
import { Intro } from './sections/Intro'
import { Knowledges } from './sections/Knowledges'

function App() {


  return (
    <AuthProvider>
      <PageScroller>
        <article className='relative z-10 bg-bg p-8 lg:px-72 shadow-md shadow-bg'>
          <section className='section-container items-center lg:flex-row lg:gap-10 lg:justify-between' id='intro'>
            <Intro />
          </section>
          <section className='section-container' id='about-me'>
            <AboutMe />
          </section>
          <section className='section-container' id='experiences'>
            <Experiences />
          </section>
          <section className='section-container' id='knowledges'>
            <Knowledges />
          </section>
        </article>
        <Contact />
      </PageScroller>
    </AuthProvider>
  )
}

export default App
