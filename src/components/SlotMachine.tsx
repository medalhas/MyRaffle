import { useState } from "react";

export const SlotMachine = ({ 
  maxNumber, 
  winningNumber, 
  isComplete = false, 
  title = "", 
  timestamp 
}: { 
  maxNumber: number; 
  winningNumber: number;
  isComplete?: boolean;
  title?: string;
  timestamp?: Date;
}) => {
  // Generate a sequence of numbers that ends with the winning number
  const generateNumberSequence = () => {
    const numbers = []
    
    // Generate exactly 29 random numbers first
    for (let i = 0; i < 29; i++) {
      numbers.push(Math.floor(Math.random() * maxNumber) + 1)
    }
    
    // Add the winning number as the 30th number (index 29)
    // This will be the number that appears in the window after animation
    numbers.push(winningNumber)
    
    return numbers
  }

  const [numberSequence] = useState(generateNumberSequence())

  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-[450px]">
      {isComplete && title && (
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">🎉 Raffle Complete!</h2>
          <h3 className="text-2xl font-semibold text-orange-500">{title}</h3>
        </div>
      )}
      
      <div className="relative w-70 h-80 bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl border-8 border-slate-900 shadow-slot-frame flex flex-col items-center justify-center mb-6">
        <div className="w-50 h-38 bg-black rounded-2xl border-4 border-gray-600 overflow-hidden relative shadow-slot-window">
          <div className={`absolute top-0 left-0 w-full flex flex-col ${isComplete ? 'slot-reel-stopped' : 'animate-slot-spin'}`}>
            {numberSequence.map((number, index) => (
              <div key={index} 
                   className={`w-full flex items-center justify-center text-6xl font-bold text-slate-700 border-b-2 border-gray-600 text-shadow-slot shadow-slot-number slot-reel-animation
                     ${index % 3 === 0 ? 'bg-gradient-to-br from-slot-gray-500 to-white' : 
                       index % 2 === 0 ? 'bg-gradient-to-br from-slot-gray-100 to-slot-gray-200' : 
                       'bg-gradient-to-br from-slot-gray-300 to-slot-gray-400'}`}>
                {number}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-5 pointer-events-none">
          <div className="absolute top-2.5 left-2.5 w-3 h-3 rounded-full bg-orange-400 animate-blink shadow-lg light-delay-0"></div>
          <div className="absolute top-2.5 right-2.5 w-3 h-3 rounded-full bg-orange-400 animate-blink shadow-lg light-delay-200"></div>
          <div className="absolute bottom-2.5 left-2.5 w-3 h-3 rounded-full bg-orange-400 animate-blink shadow-lg light-delay-400"></div>
          <div className="absolute bottom-2.5 right-2.5 w-3 h-3 rounded-full bg-orange-400 animate-blink shadow-lg light-delay-600"></div>
        </div>
      </div>
      
      {isComplete ? (
        <div className="text-center mt-6">
          {timestamp && (
            <p className="text-gray-500 text-sm italic m-0">
              {timestamp.toISOString()}
            </p>
          )}
        </div>
      ) : (
        <p className="text-xl font-semibold text-sky-500 m-0 animate-pulse-custom">🎰 Rolling the numbers...</p>
      )}
    </div>
  )
}
