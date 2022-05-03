import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import WidgetForm from './WidgteForm';

export default function () {
    return (
        <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>

            <Popover.Button className="group bg-brand-500 rounded-full px-3 h-12 text-white flex items-center">
                <ChatTeardropDots className="h-6 w-6" />
                <span className="max-w-0 overflow-hidden transition-all duration-500 ease-linear group-hover:max-w-xs">
                    <span className="pl-2">Feedback</span>
                </span>
            </Popover.Button>
        </Popover>
    );
}
