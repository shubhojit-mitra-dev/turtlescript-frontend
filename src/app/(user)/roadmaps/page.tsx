import { Button } from '../../../components/(roadmaps)/button';
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 pt-16">
      <h1 className="text-6xl font-bold text-center mb-8 text-gray-800 dark:text-white animate-fade-in-down">
        Welcome to <span className="text-blue-500 animate-color-pulse">Road Maps</span>
      </h1>
      <p className="text-xl text-center mb-8 max-w-2xl text-gray-600 dark:text-gray-300 animate-fade-in-up">
        Discover and purchase comprehensive roadmaps for various courses to guide your learning journey.
      </p>
      <div className="animate-float">
        <Button href="/roadmaps/browse" className="animate-pulse-shadow">Get Started</Button>
      </div>
    </div>
  )
}

