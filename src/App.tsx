import { useState, useEffect } from 'react'
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
    const [raffleKey, setRaffleKey] = useState(0)
    const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null)
    const [showInstallPrompt, setShowInstallPrompt] = useState(false)
    const [isOnline, setIsOnline] = useState(navigator.onLine)

    useEffect(() => {
        const handleBeforeInstallPrompt = (e: Event) => {
            e.preventDefault()
            setDeferredPrompt(e)
            setShowInstallPrompt(true)
        }

        const handleOnline = () => setIsOnline(true)
        const handleOffline = () => setIsOnline(false)

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    }, [])

    const handleInstallClick = async () => {
        if (!deferredPrompt) return

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (deferredPrompt as any).prompt()

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        await (deferredPrompt as any).userChoice

        setDeferredPrompt(null)
        setShowInstallPrompt(false)
    }

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
        setRaffleKey(prev => prev + 1) // Force SlotMachine to regenerate

        const max = parseInt(maxNumber)
        const winner = Math.floor(Math.random() * max) + 1
        setWinningNumber(winner)

        setTimeout(() => {
            setResult({
                title: title.trim(),
                winner,
                maxNumber: max,
                timestamp: new Date()
            })
            setIsRunning(false)
        }, 3000)
    }

    const resetRaffle = () => {
        setTitle('')
        setMaxNumber('')
        setResult(null)
        setError('')
        setWinningNumber(null)
        setRaffleKey(0) // Reset the key
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-8">
            <div className='block'>
                {!isOnline && (
                    <div className="fixed top-0 left-0 right-0 bg-red-500 text-white text-center py-2 z-50">
                        📱 You're currently offline. The app will work, but results won't sync until you're back online.
                    </div>
                )}

                {showInstallPrompt && (
                    <div className="bg-orange-50 border border-orange-200 rounded-lg px-4 py-2 text-center">
                        <button
                            onClick={handleInstallClick}
                            className="text-orange-600 hover:text-orange-700 text-sm transition-colors"
                        >
                            📱 Install MyRaffle as an app for offline use
                        </button>
                    </div>
                )}
            </div>

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
                {!result || isRunning ? (
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                        {isRunning ? (
                            <SlotMachine
                                key={raffleKey}
                                maxNumber={result ? result.maxNumber : parseInt(maxNumber)}
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
                            key={raffleKey}
                            maxNumber={result.maxNumber}
                            winningNumber={result.winner}
                            isComplete={true}
                            title={result.title}
                            timestamp={result.timestamp}
                        />
                        <div className="flex justify-center gap-4 mt-6">
                            <button
                                onClick={() => {
                                    setIsRunning(true)
                                    setWinningNumber(null)
                                    setRaffleKey(prev => prev + 1)

                                    const winner = Math.floor(Math.random() * result.maxNumber) + 1
                                    setWinningNumber(winner)

                                    setTimeout(() => {
                                        setResult({
                                            ...result,
                                            winner,
                                            timestamp: new Date()
                                        })
                                        setIsRunning(false)
                                    }, 3000)
                                }}
                                className="bg-gradient-to-r from-orange-500 to-sky-500 text-white border-none p-3 px-6 text-base font-semibold rounded-lg cursor-pointer transition-all hover:transform hover:-translate-y-0.5 hover:shadow-lg"
                            >
                                🎲 Re-run Raffle
                            </button>
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