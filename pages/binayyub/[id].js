export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(binayyub =>{
        return {
            params: {id: binayyub.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { binayyub: data }
    }
}

const Details = ({ binayyub }) => {
    return (
        <div>
            <h1>{ binayyub.name}</h1>
            <p>{ binayyub.email}</p>
            <p>{ binayyub.website}</p>
            <p>{ binayyub.address.city}</p>
        </div>
    );
}
 
export default Details;