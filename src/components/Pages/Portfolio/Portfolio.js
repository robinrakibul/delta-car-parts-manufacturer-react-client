import React from "react"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='ml-10 mr-10'>
          <div className='heading text-center'>
            <h1 className="font-bold text-2xl mb-5">My Top Three Projects</h1>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
            {Portfolio_data.map((value, index) => {
              return <Card key={index} image={value.image} project={value.project} totalLike={value.totalLike} title={value.title} description={value.description.slice(0,200)} project_url={value.project_url} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
