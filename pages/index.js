import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import request from '../utils/request'

export default function Home({ data }) {
 
  return (
    
    <div>
      <Header/>
      <Nav/>
      <Results result={data}/>
</div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genres 
  const reqData = await fetch(`https://api.themoviedb.org/3${request[genre]?.url|| request.fetchTrending.url}`);
  const result = await reqData.json()
  return {
    props: {
      data:result.results
    }
  }
}
