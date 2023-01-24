export default function Works() {
    
    return ( <div className="works">
        
        <h1> My Current Projects</h1> 

        <div className="box1">



     <img src={require("../Book.png")} alt='book'/>

            
            <a href="https://jbiske.github.io/Novel_Experiences/" > <h2> Novel Experiences </h2> </a>
            <p> Small project showcasing uses of APIs </p>
        
        </div>
        
      
        <div className="box1">   <img  src={require ('../4therecord.png')} alt='Test'/>
       
       
           
  <a href="https://github.com/dmevola/4-the-record" > <h2>4 The Record </h2> </a>
            <p>This is a full stack web application written in an Express and Sequlize framework, deployed to Heroku. It is a site where people can register and share their records, view the other records, and leave comments on other people's record </p>


            
             </div>
           
        <div className="box1">  <img  src={require('../cal.jpg')} alt='Test'/>
        <a href="https://calculatorjb.herokuapp.com/" > <h2>REACT Calculator </h2> </a>
        <p>A Calculator made from scratch made completely with REACT and and JS </p>


        </div>
        <div className="box1">
         <img src={require("../download.jpg")}  alt='Test'  /> 
        <a href="https://stark-fjord-23181.herokuapp.com/" > <h2>Profesional README Generator </h2> </a>
        <p>A Profesional README Generator that will create a README for your future projects and save them for future download </p>
        </div>
    
    
    </div> 
    )

}