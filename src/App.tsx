import { useState } from 'react'
import './slot-machine.css'

interface RaffleResult {
  title: string
  winner: number
  maxNumber: number
  timestamp: Date
}

const SlotMachine = ({ 
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
          <h3 className="text-2xl font-semibold text-indigo-600">{title}</h3>
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
          <div className="absolute top-2.5 left-2.5 w-3 h-3 rounded-full bg-yellow-400 animate-blink shadow-lg light-delay-0"></div>
          <div className="absolute top-2.5 right-2.5 w-3 h-3 rounded-full bg-yellow-400 animate-blink shadow-lg light-delay-200"></div>
          <div className="absolute bottom-2.5 left-2.5 w-3 h-3 rounded-full bg-yellow-400 animate-blink shadow-lg light-delay-400"></div>
          <div className="absolute bottom-2.5 right-2.5 w-3 h-3 rounded-full bg-yellow-400 animate-blink shadow-lg light-delay-600"></div>
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
        <p className="text-xl font-semibold text-indigo-600 m-0 animate-pulse-custom">🎰 Rolling the numbers...</p>
      )}
    </div>
  )
}

function App() {
  const [title, setTitle] = useState('')
  const [maxNumber, setMaxNumber] = useState('')
  const [result, setResult] = useState<RaffleResult | null>(null)
  const [isRunning, setIsRunning] = useState(false)
  const [error, setError] = useState('')
  const [winningNumber, setWinningNumber] = useState<number | null>(null)

  const validateInputs = (): boolean => {
    setError('')
    
    if (!title.trim()) {
      setError('Please enter a title for the raffle')
      return false
    }
    
    const num = parseInt(maxNumber)
    if (isNaN(num) || num <= 0) {
      setError('Please enter a valid positive number')
      return false
    }
    
    if (num > 10000) {
      setError('Maximum number cannot exceed 10,000')
      return false
    }
    
    return true
  }

  const runRaffle = () => {
    if (!validateInputs()) return
    
    setIsRunning(true)
    setError('')
    
    // Calculate the winner immediately
    const max = parseInt(maxNumber)
    const winner = Math.floor(Math.random() * max) + 1
    setWinningNumber(winner)
    
    // Add a longer delay for the wheel animation
    setTimeout(() => {
      setResult({
        title: title.trim(),
        winner,
        maxNumber: max,
        timestamp: new Date()
      })
      setIsRunning(false)
    }, 3000) // 3 seconds for animation
  }

  const resetRaffle = () => {
    setTitle('')
    setMaxNumber('')
    setResult(null)
    setError('')
    setWinningNumber(null)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          🎲 MyRaffle
        </h1>
        <p className="text-xl text-gray-600">Create your own random number raffle!</p>
      </header>

      <main className="w-full max-w-md">
        {!result ? (
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
            {isRunning ? (
              <SlotMachine 
                maxNumber={parseInt(maxNumber)} 
                winningNumber={winningNumber!} 
                isComplete={false}
              />
            ) : (
              <>
                <div className="mb-6 text-left">
                  <label htmlFor="title" className="block mb-2 font-semibold text-gray-700 text-base">
                    Raffle Title:
                  </label>
                  <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter raffle title (e.g., 'Weekly Prize Draw')"
                    disabled={isRunning}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg text-base transition-colors focus:outline-none focus:border-indigo-600 focus:ring-0 focus:ring-indigo-100 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed"
                  />
                </div>

                <div className="mb-6 text-left">
                  <label htmlFor="maxNumber" className="block mb-2 font-semibold text-gray-700 text-base">
                    Maximum Number:
                  </label>
                  <input
                    id="maxNumber"
                    type="number"
                    value={maxNumber}
                    onChange={(e) => setMaxNumber(e.target.value)}
                    placeholder="Enter maximum number (e.g., 100)"
                    min="1"
                    max="10000"
                    disabled={isRunning}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg text-base transition-colors focus:outline-none focus:border-indigo-600 focus:ring-0 focus:ring-indigo-100 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed"
                  />
                </div>

                {error && (
                  <div className="text-red-600 bg-red-50 border border-red-200 p-3 rounded-lg mb-4 text-sm">
                    {error}
                  </div>
                )}

                <button 
                  onClick={runRaffle} 
                  disabled={isRunning}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-none p-4 text-lg font-semibold rounded-lg cursor-pointer transition-transform hover:transform hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none mt-4"
                >
                  🎲 Run Raffle
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <SlotMachine 
              maxNumber={result.maxNumber} 
              winningNumber={result.winner} 
              isComplete={true}
              title={result.title}
              timestamp={result.timestamp}
            />
            <button 
              onClick={resetRaffle} 
              className="bg-gray-600 text-white border-none p-3 px-6 text-base font-semibold rounded-lg cursor-pointer transition-all hover:bg-gray-700 hover:transform hover:-translate-y-0.5"
            >
              🔄 New Raffle
            </button>
          </div>
        )}
      </main>
    </div>
  )
}

export default App