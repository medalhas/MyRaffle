import { useState } from 'react'
import './slot-machine.css'
import type { RaffleResult } from './model/RaffleResult';
import { SlotMachine } from './components/SlotMachine';
import logo from './assets/logo.svg';


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
        <div className="flex items-center justify-center gap-4 mb-4">
          <img src={logo} alt="MyRaffle Logo" className="w-16 h-16" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-sky-500 bg-clip-text text-transparent">
            MyRaffle
          </h1>
        </div>
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
                    className="w-full p-3 border-2 border-gray-300 rounded-lg text-base transition-colors focus:outline-none focus:border-orange-500 focus:ring-0 focus:ring-orange-100 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed"
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
                    className="w-full p-3 border-2 border-gray-300 rounded-lg text-base transition-colors focus:outline-none focus:border-orange-500 focus:ring-0 focus:ring-orange-100 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed"
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
                  className="w-full bg-gradient-to-r from-orange-500 to-sky-500 text-white border-none p-4 text-lg font-semibold rounded-lg cursor-pointer transition-transform hover:transform hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none mt-4"
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
            <div className="flex justify-center mt-6">
              <button 
                onClick={resetRaffle} 
                className="bg-gray-600 text-white border-none p-3 px-6 text-base font-semibold rounded-lg cursor-pointer transition-all hover:bg-gray-700 hover:transform hover:-translate-y-0.5"
              >
                🔄 New Raffle
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App