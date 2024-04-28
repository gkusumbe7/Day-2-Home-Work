let HomeWork = ()=>{
    return (
        <>
       <div className="m-5 flex flex-col gap-2 w-2/4 p-5">
        <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Topics covered</h1> 
        <p className="">The following is a list of all the topics we cover in the MDN learning area.</p>
        </div>
        <div>
        <a href="" className="text-blue-400 text-xl space-y-1"><u>Getting started with the web</u></a> <br />
        <p>&nbsp;&nbsp; Provides a practical introduction to web development for complete beginners.</p>
        
        </div>
        <div>
        <a href="" className="text-blue-400 text-xl space-y-1"><u>HTML - Structuring the web</u></a> <br />
        <p>&nbsp;&nbsp; HTML is the language that we use to structure the different parts of our content and &nbsp;&nbsp;define what their meaning or purpose is. This topic teaches HTML in detail.</p>
        </div>
        <div>
        <a href="" className="text-blue-400 text-xl space-y-1"><u>CSS- Styling the web</u></a> <br />
        <p>&nbsp;&nbsp; CSS is the language that we use to control our web content's style and layout, as well as &nbsp;&nbsp; adding behavior like animation. This topic provides comprehensive coverage of CSS.</p>
       
        </div>
        
       </div>
        </>
    );
}

export default HomeWork;