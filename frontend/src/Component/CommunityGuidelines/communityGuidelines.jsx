import React from 'react'
import './community.css'

const CommunityGuidelines = () => {

    return (
        <div className='guideParent'>
          <div className='guideChild'>
                <div className='guideTitle'>
                    Community Guidelines
                </div>
                <div className="guideOne">
                    <div className='guideIntro'>
                        When you use Next Step, you join a community of  professionals looking to improve on their interview skills by practicing answering various interview questions and giving as well as getting valuable feedback to those answers. We trust you to be courteous and professional when creating content on this platform, but just in case we’ve put together some general guidelines:
                     </div>
                <div className='unorderedGuide'>
                    <ul>
                        <li>
                            - We do not support content that promotes or condones violence against individuals or groups based on race or ethnic origin, religion, disability, gender, age, nationality, veteran status, or sexual orientation/gender identity, or whose primary purpose is inciting hatred on the basis of these core characteristics. 
                        </li>
                        <li>
                            - It’s not ok to post abusive comments. Cyber-bullying is not tolerated on Next Step and users violating this rule will be removed from the platform.
                        </li>
                        <li>
                            - Please be constructive and supportive when offering feedback to other users on their answers. Constructive criticism done right, leaves the receiver excited to make revisions to their story, rather than feeling shattered.
                        </li>
                
                    </ul>
                </div>  
                </div>  
                <div className="guideTwo">
                    <div className='constructiveIntro'>
                    If you are not sure how to be constructive when giving feedback please refer to these guiding principles:
                    </div>
                    <div className='orderedGuide'> 
                        <ol>
                            <li>
                            1. Be specific.
                            </li>
                            <li>
                            2. Use the STAR method! STAR is an acronym for Situation, Task, Action, Result. While this method is great for answering questions it’s just as good for giving feedback! 
                            </li>
                            <li>
                            3. Be descriptive, not accusative
                            </li>
                            <li>
                            4. Provide actionable information 
                            </li>
                            <li>
                            5. Formulate positively  
                            </li>
                            <li>
                            6. Don’t be shy to compliment the user’s answer if you think it’s great and there are no improvements needed!
                            </li>
                        
                        </ol>
                    </div>
                </div>
                </div>
            </div>
      
    )
}

export default CommunityGuidelines;