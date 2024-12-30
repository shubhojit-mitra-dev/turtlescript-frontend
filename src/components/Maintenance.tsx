import FlipTimer from './flip-timer';
import Image from 'next/image';
import logo from '@/assets/logo.png'

interface MaintenanceProps {
  endDate: Date;
}

const Maintenance: React.FC<MaintenanceProps> = ({ endDate }) => {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-4">
      <Image src={logo} alt='logo' className='h-32 w-32' priority />
      <h1 className="sm:text-4xl text-2xl font-bold">Site Under Maintenance</h1>
      <div className="flip-countdown">
        <FlipTimer endDate={endDate} />
      </div>
      <p className="sm:text-lg text-xs text-muted-foreground">
        We are currently performing scheduled maintenance.
      </p>
    </div>
  );
};

export default Maintenance;
