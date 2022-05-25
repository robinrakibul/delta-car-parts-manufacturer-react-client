import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow'>
        <div className='img'>
          <a href={props.project_url} target="_blank" rel="noreferrer"><img className="rounded-2xl mb-4 hover:scale-95 duration-300" src={props.image} alt=''/></a>
        </div>
        <div className='category d_flex mb-2'>
          <span className="font-bold">{props.project}</span>
        </div>
        <a href={props.project_url} target="_blank" rel="noreferrer"><button className="btn btn-warning mt-1 mb-3 border-2 pl-5 pr-5 pt-3 pb-3 bg-yellow-400 rounded-xl text-white font-medium">Live Link</button> </a>
        <div className='title'>
          <h2 className="font-medium mb-2">{props.title}</h2>
          <a href='#popup' className='arrow'>
            <i className='fas fa-arrow-right'></i>
          </a>
        </div>
        <p>{props.description}...</p>
      </div>
    </>
  )
}

export default Card
