import styles from './Header.module.css'
import todoLogo from '../assets/logo-todo.svg'

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div><img src={todoLogo} alt="Logotipo" /></div>
    </header>
  )
}

