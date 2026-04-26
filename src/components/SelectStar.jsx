export function SelectStar({ selected, setSelected }) {
return ( 
  // have a card on the right side with the star on the left side 
  <div className = "fixed right-6 z-30 flex flex-col"
    style = {{ top: "12.5%", bottom: "12.5%", width: "320px" }}
  >


    {/* slide-in animation */}

    <style>{`
      @keyframes slideIn { 
        from {opacity: 0; transform: translateY(-50%) translateX(20px); }
        to   {opacity: 1; transform: translateY(-50%) translateX(0);} 
        }
        .star-card
    `}</style>


    <div className="star-card bg-[#363636] border border-white/10 rounded-2xl shadow-2xl flex flex-col h-full p-80">
      <p className = "text-white text-x2 font-semibold mb-2 mt-1 tracking-widest">{selected.title}</p>

      <p className = "text-white/30 text-sm mb-4">{selected.location}</p>

      <div className = "flex justify-between text-xs text-white/20 mb-1">
        <span>star #{selected.star_id}</span>
        <span>({selected.x?.toFixed(2)}, {selected.y?.toFixed(2)})</span>
      </div>
            <p>
               <br />
            </p>
            <p className="text-white text-x2 font-semibold mb-2 uppercase tracking-widest">story</p>
      {selected.desc ? (
        <p className="text-white/60 text-sm leading-relaxed">{selected.desc}</p>
      ) : (
        <p className="text-white/20 text-sm italic">no story written for this star.</p>
      )}
      
    </div>

    <div className="border-t border-white/10 mb-4" >

    {/* <div className="flex-1 overflow-y-auto">

    </div> */}

    <button 
      onClick = {() => setSelected(null)}
      className = "mt-4 w-full py-3 px-4 rounded-x1 border border-white/10 text-white/40 text-sm cursor-pointer hover:border-white/30 hover:text-white/60 transition-colors">
      close
    </button>
    </div>
  </div>
);



  // console.log(selected);
  //   return (
  //       <div
  //         className="absolute inset-0 bg-black/60 z-30 flex items-center justify-center"
  //         onClick={() => setSelected(null)}
  //       >
  //         <div
  //           className="bg-[#0a0a0f] border border-white/10 rounded-2xl p-6 w-72"
  //           onClick={(e) => e.stopPropagation()}
  //         >
  //           <p className="text-white text-sm font-medium mb-1">{selected.title}</p>
  //           <p className="text-white/30 text-xs mb-3">{selected.location}</p>
  //           <div className="flex justify-between text-xs text-white/20">
  //             <span>star #{selected.star_id}</span>
  //             <span>({selected.x?.toFixed(2)}, {selected.y?.toFixed(2)})</span>
  //           </div>
  //           <button
  //             onClick={() => setSelected(null)}
  //             className="mt-4 w-full py-2 rounded-xl border border-white/10 text-white/40 text-xs cursor-pointer"
  //           >
  //             close
  //           </button>
  //         </div>
  //       </div>

  //   )
}