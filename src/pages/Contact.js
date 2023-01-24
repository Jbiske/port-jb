import mail from '../mail.png'
import git from '../git.png'
import res from '../res.png'
import link from '../linked.png'
export default function Contact() {
    return(  
    <div className='images'> 
   
     {/* reseme */}<a href='https://docs.google.com/document/d/1nGVjxGpYlNDzRdxSFK3871q2-5wUrGeRBdEsl-25aLs/edit?usp=sharing' download='JoshBiskeResume'> <img className='imgs' src={res} alt='reseme logo'/></a>
     {/* linked in */}<a className='imgs' href='https://www.linkedin.com/in/josh-biske-9a10a0225/'> <img src={link} alt ='linked in logo' /></a>
{/* gmail */}
<a href="mailto: Joshua.Biske@gmail.com"> <img className='imgs' src={mail} alt='mail logo'/> </a>
{/* github */}
<a href='https://github.com/Jbiske'>    <img className='imgs'  src={git} alt='github logo'/></a>
    
    </div>


    )
}