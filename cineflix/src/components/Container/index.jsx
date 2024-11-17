import styles from './Container.module.css'

import React from 'react'

const Container = ({children}) => {
  return (
    <section className={styles.container}>
        {children}
    </section>
  )
}

export default Container