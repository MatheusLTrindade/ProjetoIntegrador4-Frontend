'use client'

// components
import Modal from '@/components/Modal';
import NotificationsList from "@/components/NotificationsList";

export const metadata = {
  title: 'Troca Fácil | Notificações',
  description: 'Notificações',
  OpenGraph: {
    title: 'Troca Fácil | Notificações',
    description: 'Notificações', 
  }
}

export default function Notifications(params) {
  return (
    <div className="h-full bg-secondary/20 text-center relative">
      <div className="py-32">
        <div className="container mx-auto h-full flex flex-col justify-center">
          <h2 className="h2 mb-8 xl:mb-0 max-sm:text-[30px] nova-slim">Notificações<span className="text-accent">.</span></h2>
          <div className="flex sm:flex-col justify-center pt-4 h-full w-full mx-auto">
            <div className="h-[330px] flex sm:flex-wrap gap-4 sm:justify-center overflow-x-scroll sm:overflow-x-hidden sm:overflow-y-auto">
              <NotificationsList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
