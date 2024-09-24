
export default function ProductCard({data}) {
    return (
    <div>
        <div>
            <img src={data.image.url} alt="" />
        </div>
        <div>
            <h3>{data.title}</h3>
            <div>{data.rating}</div>
            <div>{data.price}</div>
        </div>
    </div>
    );
}