import styles from "./Post.module.css"


export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <di className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/EmanuelSal.png" />
                    <div className={styles.authorInfo}>
                        <strong>Emanuel Lima</strong>
                        <span>Web Developer</span>
                    </div>
                </di>

                <time title="15 de Janeiro às 23:55" dateTime="2024-01-15 23:55:47"> Publicado há 1h</time>
            </header>

            <div className={styles.content}>

                <p>Fala galera👋</p>
                <p>Acabei de subir mais um projeto no meu portifólio 🚀</p>
                <p>Aqui: <a href="">👉 https://github.com/EmanuelSal/Ignite-Feed</a></p>
                <p> 
                    <a href="">#novoprojeto</a> {' '}
                    <a href="">#nlw</a> {' '}
                    <a href="">#rocketseat</a>
                </p>

            </div>
        </article>

    )
}
