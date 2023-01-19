import Link from 'next/link';
import styles from '../../styles/Binayyub.module.css'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return{
        props: { binayyub: data}
    }

}

const binayyub = ({ binayyub }) => {
    return (
        <div>
            <h1>I am Bin-ayyub</h1>
            {binayyub.map(binayyub =>(
                <Link href={'/binayyub/' + binayyub.id} key={binayyub.id}>
                    <p className={styles.single}>
                        <h3>{ binayyub.name }</h3>
                    </p>
                </Link>
            ))}
        </div>
    );
}
 
export default binayyub;