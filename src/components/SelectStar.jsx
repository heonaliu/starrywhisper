export function SelectStar({ selected, setSelected }) {
  console.log(selected);
    return (
        <div
          className="absolute inset-0 bg-black/60 z-30 flex items-center justify-center"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#0a0a0f] border border-white/10 rounded-2xl p-6 w-72"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white text-sm font-medium mb-1">{selected.title}</p>
            <p className="text-white/30 text-xs mb-3">{selected.location}</p>
            <div className="flex justify-between text-xs text-white/20">
              <span>star #{selected.star_id}</span>
              <span>({selected.x?.toFixed(2)}, {selected.y?.toFixed(2)})</span>
            </div>
            <button
              onClick={() => setSelected(null)}
              className="mt-4 w-full py-2 rounded-xl border border-white/10 text-white/40 text-xs cursor-pointer"
            >
              close
            </button>
          </div>
        </div>

    )
}