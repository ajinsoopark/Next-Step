import React from 'react'
import "./star.css"

const StarAnswer = () => {

    return (
        <div className='starParent'>
        <div className="starChild">
            <div className='starTitle'>
                 STAR Method
            </div>
            <div className="starList">
                <ul>
                    <li>
                <a className='liTitle'>Situation.</a> <a className="restText">Open with a brief description of the context of the success story (who, what, where, when, how).</a>
                    </li>
                    <li>
                    <a className='liTitle'>Task.</a> <a className="restText">Explain the task you had to complete, highlighting any specific challenges or constraints (e.g. deadlines, limited resources).</a>
                    </li>
                    <li>
                    <a className='liTitle'>Action.</a> <a className="restText">Describe the specific actions that you took to complete the task. These should highlight desirable traits without needing to state them (initiative, intelligence, dedication, technical skills, teamwork, etc.).</a>
                    </li>
                    <li>
                    <a className='liTitle'>Result.</a> <a className="restText">Close with the result of your efforts. Quantify the result when possible (e.g. “this optimization resulted in a 15% increase in views”).</a>
                    </li>
                </ul>
            </div>
            <div className="examplesDiv">
            <h1 className="examples">Examples:</h1> 
            <h1 className='liTitle'>
            Can you detail a mistake you made and how you reacted to it?
            </h1>
            <div>
            <a className="restText">
            <a className="modelAnswer">STAR Model Answer:</a> One time, I switched the packing labels of two packages I sent to customers. I had to correct the problem without angering the clients. I called them both up and provided them with shipping labels with the correct addresses while offering each of them a small gift certificate to use on a future order. The customers not only helped me fix my mistake, but they were both satisfied and will return and shop again.</a>
            </div>
            <div>
                <h1 className='liTitle'>
            Tell me about a time when you performed well under enormous pressure.
            </h1>
            <a className="restText">
            <a className="modelAnswer">STAR Model Answer:</a> At my last job, my coworker needed to miss work for some time, and their project was left unfinished and without a manager. My supervisor instructed me to take on the project, and with no leniency on the deadline, I had days to complete a project that originally should have taken several weeks. I requested and was granted reduced weekly goals, giving me more time to finish the special project. As far as my weekly goals, I was able to delegate them out to teammates. With my reduced goals, I dedicated more time to the special project. This allowed me to finish it on time and with complete accuracy. My supervisor appreciated my attitude and drive, and I was given several more projects after that, along with an eventual promotion and pay raise.</a>
            </div>
        </div>
     </div>       
</div>
    )
}

export default StarAnswer;