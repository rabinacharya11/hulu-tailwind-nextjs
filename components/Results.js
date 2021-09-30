import Thumbnail from "./Thumbnail";




function Results({ result }) {
    // console.log(result[0].adult);
    return (
        <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify_center'>
            {
                result.map(res => {
                   console.log(res)
                    return <Thumbnail key={res.id} result={res} />;
                })
            }
          
        </div>
    )
}

export default Results
