import React from "react"

const Answer = ({letter,text}) => {


    return (

        <div>
            <span className='Answer-letter'><b>{letter}</b>. </span>{text}
        </div>

    )


}

export default Answer;