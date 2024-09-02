

export default function footer() {
  return (
    <footer className="w-full border-t border-t-foreground/10 p-8 flex flex-col justify-center text-center text-xs">
        <div>
          Organization by{" "}
         
           
            <a 
                href="http://goss.rs/" 
                target="_blank"
                className="font-bold hover:underline"
                rel="noreferrer"
                >
                Serbian Go Federation
            </a>
           
        </div>

        <div className="mt-8">
            <p>
                Usefull links {" "}
            </p>
            <a 
                href="https://www.tob.rs/en" 
                target="_blank"
                className="font-bold hover:underline"
                rel="noreferrer"
                >
                Tourist Organisation of Belgrade
            </a>
        </div>
        
        
      </footer>
  )
}
