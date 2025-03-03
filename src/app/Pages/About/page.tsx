export default function Aboutpage() {
    return (
      <div className="flex items-center justify-between h-screen bg-white text-black">
        
        <div className="flex flex-col items-center justify-between bg-gray-100 h-screen w-[100px] py-10">
          
          <div className="text-4xl font-bold mt-5">T.</div>
  
          
          <div className="flex flex-col items-center space-y-16">
            <div className="[writing-mode:vertical-lr] uppercase tracking-widest text-gray-500 cursor-pointer hover:text-black">
              Contact
            </div>
            <div className="[writing-mode:vertical-lr] uppercase tracking-widest text-gray-500 cursor-pointer hover:text-black">
              Conditions
            </div>
            <div className="[writing-mode:vertical-lr] uppercase tracking-widest text-gray-500 cursor-pointer hover:text-black">
              Portfolio
            </div>
            <div className="[writing-mode:vertical-lr] uppercase font-bold text-black">
              About
            </div>
          </div>
  
        </div>
  
        <div className="text-xl font-bold flex items-center justify-center w-full">
          Hello, mera name Tabish hai
        </div>
      </div>
    );
  }
  